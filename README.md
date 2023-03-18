# Food-Ordering-App-with-React.js

## Introduction
It is a Single Page Application developed using ReactJS. The app enables you to choose your preferred meals and add them to your shopping cart, adjust the quantity as needed, keep track of your cart contents, and view the cost per item, total cost for each line item, and the overall grand total.

![image](https://user-images.githubusercontent.com/65281223/226092425-be426165-f7d3-4c39-aab3-ea89cf5dd124.png)

## :movie_camera: Demo


Click [here](https://food-order-app-with-reactjs.web.app/) to go to the application.👈:point_left:



![application demo](/src/asset/video.gif)

## Implementation
This project uses Create App tool , React Hook concepts, JavaScript ES6 and CSS.

1. **Create App tool :** It's a React toolchain we have used this toolchain inorder to build a single page application. It just creates a frontend build pipeline,
so you can use it with any backend you want.

2. **React Hooks :** They are in-built functions that allow to use state and life cycle methods within the components in React. We have used some built-in hooks like useContext(), useEffect(), useRef() and useReducer().
  
    **useContext() :** To make sure that data can be added or items can be added to the cart. To manage the overall cart data through context because we will need it in different places of the
    application. We need data in the header where "Your Cart" is defined and also on summary meals.

    **useReducer() :** It is for state managment. Any components affected by the context are re-evaluated whenever the cart data changes. We are using this instead of useState because we were having a bit of a more complex state, which we're managing here
    because we'll have to check whether a meal is already part of the cart or not and for removing item from the cart.

    **useRef() :** To extract the entered amount for meal items we have used ref. It allows us to persist values between renders and does not cause a re-render when amount value will be updated.

    **useEffect() :** utilizing useEffect to play the animation when items are added to the cart or removed from the cart.
 
 3. **ES6 Features :** Used features like arrow functions to construct component functions, findindex() method inorder to update the item amount or remove the item from the cart, filter method to return new array items , let variables 
  
 4. **CSS :** Used for styling the application.
 
 ## Installation
 
 1. ```Clone repository```
 
 ```
 git clone https://github.com/arturguimaraes/food-order-app-redux.git
 ```
 
 2. ```Go to directory```
 
 ```
 cd Food-Ordering-App-with-React.js
 ```
 
 3. ```Install required libraries```
 
 ```
 npm i or npm install 
 ```
 
 4. ```Start project on http://localhost:3000/```
 
 ```
 npm start
 ```

## Feature 

![image](https://user-images.githubusercontent.com/65281223/226096602-8c5ddda9-2d0b-4c1a-bc76-6b8f9a751cf2.png)

1. Adding item
- Add items in Cart.
- While adding into cart, control cart to add amount correctly if item is already present in the cart.
- and if not in cart then add normally as new item.

2. Validating amount min item 1 and max item 5
- if no amount entered , or amount is less than 1 or amount is greater than 5 then show a "Error Message".

3. Removal of item 
- if one item in cart then remove the whole and empty the cart.
- if more than one item then subtarct 1 from items.

4. Added animation on cart.
- when add button will be clicked to add items or remove it will bounce the "Your Cart" button.


