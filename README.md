Simple React-Typescript Drag n Drop Tutorial based upon freeCodeCamps Tutorial for React-Typescript beginners - Link : https://youtu.be/FJDVKeh7RJI

Added Functionality / deviation from the tutorial: 
    - SCSS Integration
    - React-Router-Dom Setup (for future page integration)
    - @hello-pangea/dnd ( alternative to react-beautiful-dnd)
        /* react-beautiful-dnd seems to have outdated dependancies. (This is what the tutorial was based on) React needed downgrading to react 17 for the drag n drop to work. Implimentation was as easy as swapping out the sources with import {} from "./@hello-pangea/dnd" */
    - Added additional state to hide all the CRUD icons when the input 
      field has a state of edit.
    - Added a 'hint' to the input field to inform the user to hit the
      enter key to complete the editing of the "form"/todo name
    - Fixed a bug that kept the input field from upsating state when
      the singleTodo was located within the "Active Tasks" column.
    - Placed a scss filter on the singleTodo to limit pacity except
      when hovered over.
    - Custom File Setup

Things I learned: 
    - I'm very much a beginner in Typescript. This project helped me
      continue growing in react while learning typescript 
      simultaneously. I am also getting better at state-focused DOM 
      manipulation as opposed to OOP. 
    - Props, Interfaces, and Typesript classes.
    - I learned how to Downgrade React.
    - Practiced import and export of SCSS variables. (It'd been awhile)

Dependancies:
    - react-icons (npm i react-icons)
    - react-router-dom (npm i react-router-dom)
    - @hello-pangea/dnd (npm i @hello-pangea/dnd)

If you're reading this, thank you very much!


...The Usual: 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`...
