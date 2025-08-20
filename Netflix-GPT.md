## Netflix-GPT


## Features:







## Steps Summarized

- Do `create-react-app` that creates a whole schefold of our project

- Install and setup `tailwindcss`

- Start creating the basic Component pages. E.g: Home Page, Login Page,etc.

- Along with creating the pages. Setup the `routing` for those pages.

- create the SignIn page using form.

- Once you have a SignIn, SignUp form build the `form validation` using `useRef`
    > create a function `handleValidation` that uses our created util `checkvalidData`
    >  create a `checkvalidData` function that verifies our Name, email and password to the Regex criteria
    > use the hook `useRef` to reffer the input boxes to our ref variables to check

- Setting up `Google Firebase` for backend: install firebase, -g firebase-tools
    > Firebase Setup
    > set `email and password` under authentication
    > Deploy your app to production by hosting it on firebase

- Building `authentication` using `Google Firebase`.
- Setting up Redux Store: install @reduxjs/toolkit, react-redux
    > Create a `Store`
    > create a `slice`
    > `Providing` store to our App

- Working on the Actual SignIn and Signout
    > use `createUserWithEmailAndPassword` on SignUp page to create the user account
    > use `updateProfile` with dispatch inside of above step so that the store is updated on every new user signup
    > use `signInWithEmailAndPassword` to Login for the existing users.

- Start building `browse` page
    > We will get our data from TMDB movie database and we can use there APIs
    > create an account on TMDB movie data base -> Login -> Edit profile -> API section -> get access token

- Get Data from TBDM
    > go to Documentation  `developer.themoviedb.org` -> API Reference -> Movie Lists -> Now Playing -> Javascript
    > add the options to our constants file and export it.
    > do the fetch inside our browse file.

- Update the Redux store creating a new slice for nowPlayingMovies

- Working on UI of Browse
    > create two separate components for the browse page where one is used as main Container to display the trending's trailer and other is used to dispaly the rows of the movies