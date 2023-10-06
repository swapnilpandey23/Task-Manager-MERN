Hello World.
Task Management Project (MERN Stack)
This is a Task Management project built using the MERN (MongoDB, Express.js, React, Node.js) stack. It is created with Vite.js as the front-end build tool and utilizes Tailwind CSS for styling and React Icons for icons.

Project Overview
Briefly describe the purpose and functionality of your Task Management project. Explain what users can do with the application and its main features.

Technologies Used
MongoDB: Database for storing task data.
Express.js: Backend server for handling API requests.
React: Frontend framework for the user interface.
Node.js: JavaScript runtime environment for the server.
Vite.js: Build tool for the React frontend.
Tailwind CSS: CSS framework for styling.
React Icons: Library for using icons in the application.

Tools Used
VS Code : For development environment.
NPM : Node package module to install the dependencies and packages.
Postman : Tool for testing API prior integrating back-end with front-end.
Git : To push it on GitHub.

Usage
Provide instructions on how to use the Task Management application. Describe how users can:

Create, read, update, and delete tasks.
Navigate the user interface.
Interact with different features.

API endpoints (Replace the port with your port number.)
GET - http://localhost:8080/api/getTasks
POST - http://localhost:8080/api/createTask
PUT - http://localhost:8080/api/updateTask/:id
DELETE - http://localhost:8080/api/deleteTask/:id
GET - http://localhost:8080/api/getTask/:id

Running the Task Management Project Locally
To run the Task Management project locally on your development machine, follow these steps:

Prerequisites:

Node.js and npm installed (You can download them from nodejs.org)
MongoDB installed and running locally (You can download and install it from mongodb.com)
Clone the Repository:

Open your terminal or command prompt.

Navigate to the directory where you want to clone the project.

Run the following command to clone the repository:

git clone <repository-url>
Replace <repository-url> with the actual URL of your project's Git repository.

Backend Setup:

Navigate to the project's backend directory:

cd backend
Install backend dependencies:

npm install
Create a .env file in the backend directory and configure it with your MongoDB connection string and the desired port, like this:

**_PORT=8080
_**MONGO_URI=mongodb://localhost:27017/task_management
Adjust the MongoDB URI as needed.

Start the backend server:

\*\*\* npm start
The backend server will start at the specified port.

Frontend Setup:

Open a new terminal window/tab.

Navigate to the project's frontend directory:

\*\*\*cd frontend
Install frontend dependencies:
Check if the vite.js requires additional installation.

\*\*\*npm install
Start the frontend development server:

\*\*\*npm run dev
The frontend development server will start, and you can access the application in your web browser at http://localhost:3000 by default.

Access the Task Management Application:

Open your web browser and go to http://localhost:3000 to access the Task Management application.
Now, you should have the Task Management project running locally on your machine, with both the backend and frontend components active.

Feel free to adjust any specific details, paths, or port numbers to match your project's configuration.

What's next?
In the next commit, I'll be adding login and logout functionality as well, Check my other repositories as well.
