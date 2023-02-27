
import './App.css';
  import * as React from 'react';
  import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ProgressAppBar from './ProgressAppBar';
import ProgressBreadCrumb from './ProgressBreadCrumb';
import DigitalPantryList from './DigitalPantryList';
import Box from '@mui/material/Box';

export default function MyApp() {
  const [groceryList, setGroceryList] = React.useState([]);

  function addItem() {
    const newItem = {
      name: "Grocery Item",
      quant: "Quant"
    };
    const newList = groceryList.slice();
    newList.push(newItem);
    setGroceryList(newList);
  }
  function popItem(i) {
    const newList = groceryList.slice();
    newList.pop(i);
    setGroceryList(newList);
  }
  function clickHandlerAdd() {
    addItem();
  
  }

  function delItem(i) {
    console.log(i);
    popItem(i);
  }

  return (
    <div>
       
      <ProgressAppBar></ProgressAppBar>
      <Container maxWidth="sm">
      <ProgressBreadCrumb></ProgressBreadCrumb>
      <DigitalPantryList grocery={groceryList} delFunction={delItem}/>
      <Box textAlign= 'center'>
      <Button 
      sx={{
        width: 200,
        marginTop: 5}}
        onClick={clickHandlerAdd}
        variant="contained">Add Items</Button>
        </Box>
      </Container>
    </div>
  );
}


