//1 - Create a React Component that Rendesr a List of Items
import React, { useState } from "react";
//First, create a simple React component that renders a list of items.
//Each item in the list will have a name and a description.
//We'll use the useState Hook to manage our state in this component.
//Instructor creates ItemList component
//Next, let's create a context for our items. We'll call it ItemContext.
export const ItemContext = React.createContext();
//Now that we have our context, we can wrap our ItemList component in it.
// Notice that we're passing the items and setItems state variables as the value prop to our ItemContext.
//Provider component: This will make them available to any child components that are wrapped in the ItemContext.Provider.

const ItemList = () => {
  const [items, setItems] = useState([
    {
      name: "Item 1",
      description: "This is the first item in our list",
    },
    {
      name: "Item 2",
      description: "This is the second item in our list",
    },
    {
      name: "Item 3",
      description: "This is the third item in our list",
    },
  ]);

  return (
    <ItemContext.Provider value={{ items, setItems }}>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </ItemContext.Provider>
  );
};

export default ItemList;
