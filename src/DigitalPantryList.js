import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

/* function delItem() {
  const newList = groceryList.slice();
  const name = newList.getAttribute("name")
  setStudentList(newList.filter(item => item.name !== name));
}
*/

function generate(groceryList, delFunction) {
  return groceryList.map((groceryItem, index) =>
       <ListItem key={index}>
          <ListItemButton>
          <ListItemIcon>
          <IconButton aria-label="delete"
          onClick={evt => delFunction(index)}> 
            <RemoveCircleIcon/>
          </IconButton>
          </ListItemIcon>
          <ListItemText 
          sx={{
            textAlign: "center"
          }}primary= {groceryItem.name + "  |  " + groceryItem.quant} />
          <Checkbox
                edge="end"                
              />
        </ListItemButton>
      </ListItem>
  );
  }
  export default function DigitalPantryList({grocery, delFunction}) {
  
    return (
      <List>
          {generate(grocery, delFunction)}
      </List>
   );
  }
   
  

  