from flask import Flask, request, make_response

app = Flask(__name__)

# this hardcoded value substitutes for reading items from a database
items = [
    { 'item_id': "1", 'name': 'eggs', 'qty': '12'},
    { 'item_id': "2", 'name': 'milk', 'qty': '1'},
    { 'item_id': "3", 'name': 'butter', 'qty': '2'}
]

# removed login_get method that returns the login-page html. Instead using Postman for testing.

# endpoint for logging in. Currently sets cookie, will convert to returning token once we are more
# comfortable with frontend.
@app.route('/login', methods=['POST'])
def login_post():
    resp = make_response('<html><body>&#x1F44D;</body></html>')
    resp.set_cookie('auth_token', 'DPLogin', max_age=3600) # expires after 1 hour
    return resp

# REST endpoint for listing items for given class
@app.route('/items/<list>', methods=['GET'])
def list_items(list):
    auth_token = request.cookies.get('auth_token')
    if auth_token and auth_token == 'DPLogin':
        return {
            'status': 'success',
            'data': {
                'list': list,
                'items': items
            }
        }
    else:
        return {
            'status': 'fail',
            'data': { 'message': 'Not authorized' }
        }

# REST endpoint for creating a project
@app.route('/items/<list>', methods=['POST'])
def addItem(list):
    item_id = request.form['id']
    name = request.form['name']
    qty = request.form['qty']
    items.append({'item_id': item_id, 'name': name, 'qty': qty})
    return 'OK'

# this code is needed to run locally
# (or follow the Flask Getting Started guide, but that requires setting an environment variable.)
if __name__ == '__main__':
    app.run(debug=True)