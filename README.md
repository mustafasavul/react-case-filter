# README

This repository contains code for a React application that displays a grid list of data. The application compares dates in the grid and highlights rows based on certain conditions. Here's a brief overview of the code:

# Installation

To run the application, follow these steps:

# Clone the repository.

Install the required dependencies using npm install or yarn install.
Start the application with npm start or yarn start.
Code Structure
The code is organized into several files:

# App.tsx

This file is the main component of the React application. It fetches data from a JSON file (Data.json) and renders the GridList component. It also includes a form to input values for the today and limit variables. The control function is responsible for comparing dates and updating the wrongRows state.

# GridList.tsx

This file defines the GridList component, which receives the data prop and renders a table based on the provided data. Each row in the table represents an item from the data array. The isBackgroundColorRed property determines the background color of each row.

# type.ts

This file contains the type definitions for the GridList component and its props.

# Usage

Upon running the application, the grid list will be displayed with the initial data. To modify the displayed data, enter a date in the "Today" field (format: YYYY-MM-DD) and a numeric limit in the "Limit" field. Clicking the "Send" button will update the grid list and display the number of incorrect rows below.

Feel free to explore the code and make any necessary modifications to suit your needs. If you encounter any issues or have any questions, please don't hesitate to reach out.

Note: This README.md file was generated CHAT-GPT 3
