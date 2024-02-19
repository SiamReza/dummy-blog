# Getting Started with the Project

This project is built using [React](https://reactjs.org/), [Material-UI (MUI)](https://mui.com/), and interacts with [dummy JSON server](https://dummyjson.com/). To get the project up and running on your local machine for development and testing purposes, follow the steps outlined below. This project is also hosted on [Vercel](https://vercel.com/), here is the [link](https://dummyblog.vercel.app/). Feel free to check it out.

## Prerequisites

Ensure you have the following installed on your system before proceeding:
- [Node.js](https://nodejs.org/en/) (version 12.x or later)
- [npm](https://www.npmjs.com/) (normally comes with Node.js installation)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the Repository**

   Begin by opening your terminal and cloning the project repository with the following command:

   ```sh
   git clone https://github.com/SiamReza/dummy-blog.git
   ```

2. **Navigate to the Project Directory**

   Change into the project directory that was just cloned onto your machine:

   ```sh
   cd dummy-blog
   ```

3. **Install Dependencies**

   Inside the project directory, install the necessary dependencies by running:

   ```sh
   npm install
   ```

   This command reads the `package.json` file and installs all the required packages for the project to run smoothly.

## Running the Project

With the dependencies installed, you can now run the project in development mode.

1. **Start the Development Server**

   Kickstart the development server with:

   ```sh
   npm start
   ```

   This command fires up the React application in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application. The page will automatically reload if you make edits. You will also see any lint errors in the console.

2. **Accessing Dummy JSON Data**

   The project uses [Dummy JSON](https://dummyjson.com/) to simulate backend data, make sure the API service is accessible. This might require setting up a local server that mimics the Dummy JSON structure or using an online dummy JSON service. Adhere to the specific instructions provided in the documentation or the setup guide of your project's backend.

## Building for Production

When you're ready to build the app for production, execute:

```sh
npm run build
```

This builds the app to the `build` folder. It bundles React in production mode and optimizes the build for the best performance, ensuring your app is ready for deployment.

## Further Help

For additional information:
- On React, consult the [React documentation](https://reactjs.org/).
- On Material-UI, refer to the [MUI documentation](https://mui.com/).

Should you run into any problems or have questions, feel free to open an issue on the [project's GitHub repository](https://github.com/SiamReza/dummy-blog).

Thank you for checking out this project!
