This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### How data can be passed through routes

1. Creates a user route with a dynamic segment nickname. When the user goes to http://localhost:3000/user/John the dynamic segment should be passed down to the template and the user should see this:

Hello John!

Add postcode | Change my name

2. When the user clicks on "Add postcode" button the user should be transitioned to user/<nickname>/postcode route.

3. When the user is clicking on "Change my name" navigate to user/<nickname>/change-nameroute

_ _ _ _ _ _ _ _

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
