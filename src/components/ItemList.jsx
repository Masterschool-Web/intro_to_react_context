//Now that we've seen how to use the React Context API to manage state in our React applications,
//let's learn how to use the useContext Hook and the useReducer Hook to access and update our context state.
// First, let's create a simple React component that renders a list of items.
//Each item in the list will have a name and a description.
//We'll use the useReducer Hook to manage our state in this component.
//useReducer Hook 
//used to manage state in React components.
//Takes a reducer function and an initial state as arguments.
//The reducer function takes two arguments, the state and an action. 
//The state is the current state of the component.
//The action is an object that contains a type and a payload.
//The type is used to determine what type of change we want to make to the state.
//The payload is the data that we want to use to make the change to the state.
//The useReducer Hook returns an array.
//The first element in the array is the current state.
//The second element is a dispatch function.
//The dispatch function is used to dispatch actions to the reducer function.
//const [state, dispatch] = useReducer(reducer, initialState);
import React, { useReducer } from "react";
//Next, let's create a context for our items. We'll call it ItemContext.
export const ItemContext = React.createContext();
//Now that we have our context, we can wrap our ItemList component in it.
//Wrap ul with <ItemContext.Provider value={{ items, dispatch }}>
//Notice that we're passing the items and dispatch state variables as the value prop to our ItemContext.
//Provider component.This will make them available to any child components that are wrapped in the ItemContext.Provider.

const ItemList = () => {
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_ITEM":
        return [
          ...state,
          {
            name: action.name,
            description: action.description,
          },
        ];
      case "REMOVE_ITEM":
        return state.filter((item) => item.name !== action.name);
      default:
        return state;
    }
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.name}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
