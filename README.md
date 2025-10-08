# React Parents-and-Children Component App
## Overview
This React application demonstrates how parent and child components interact using
**class-based components**. Each child receives props from the parent and can trigger events
that update its internal state and display messages both in the browser and in the console.
## Features
- Two parent components (`Parent` and `Parent2`) each containing a child component.
- Each child has:
- A header
- An image
- An action button
- Clicking a button updates a message on the screen and logs it in the browser console.
## Technologies Used
- React 19 (Class Components)
- JavaScript (ES6+)
- HTML5 / CSS3
## How It Works
1. The `Parent` component renders the `Child` component, passing down props such as
`header` and `picture`.
2. The `Child` component handles button clicks through the `handleButtonClick()` method.
3. When the button is pressed, it updates the local state message and logs it to the console.
## Running the App from Git
### 1. Clone the Repository
Open your terminal and clone the project from GitHub:
```bash
git clone https://github.com/yourusername/parents-and-children.git
```
### 2. Navigate into the Project Directory
```bash
cd parents-and-children
```
### 3. Install Dependencies
Run the following command to install all required packages:
```bash
npm install
```
### 4. Start the React App
Start the development server with:
```bash
npm start
```
### 5. Open in Browser
Once the app compiles, open your browser and go to:
```
http://localhost:3000
```
## Project Structure
```
src/
│── App.js
│── index.js
│── App.css
│── images/
│ ├── logo192.png
│ └── spelman.png
README.md
```
## Author
Created by **Sidney Cazeno**, Morehouse College — Software Engineering major