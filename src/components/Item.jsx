//2 - // Now let's create a child component that renders an individual item from our list.
import React, { useContext } from "react";
import { ItemContext } from "./ItemContext";
//We'll use the useContext Hook to access the items state variable from our context.
//Notice that we're destructuring the items state variable
//from the context object that is passed to the useContext Hook.
//We're then using the find method to get the item with the matching name
//from our list of items.
// Finally, let's update our ItemList component
//to render our Item component for each item in our list.
//import Item from './Item'; in ItemList
//implement <Item name={item.name} /> in ItemList
//Notice that we're passing the name prop to our Item component.
//This will allow our Item component to render the correct item from our list.

const Item = ({ name }) => {
  const { items } = useContext(ItemContext);
  const item = items.find((item) => item.name === name);

  return (
    <li key={item.name}>
      <div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    </li>
  );
};

export default Item;
