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

- Main feature movie's trailer component
    > We will use the first movie's trailer to show in the featured constainer
    > get the Videos list for the frist movies Id, also keep the title, and overview 
    > filter the list to get the actual trailer video
    > save the video to our movies slice by creating and action and dispatch for it.
    > render the UI using selector for that video on bg 
    > use the title and over view of video on the overlay card to be dispalyed over our playing trailer bg

- Secondary Movie List's Container.
    > create the Movie's List component which is a single row of multiple movie cards component.
    > create customised hooks for fetching the types of movie's List.
    > we will use the individual set's APIs to fetch the data, then dispatch the data, actions accordingly to store that fetched data to store.
    > render the MovieLists row via browse page.

- GPT Search button.
    > create a gpt search button inside of header.
    > create a function to handle its toggle.
    > create a slice to store the value of GPT page as true or false
    > Inside of slice set the initial value of gpt page to false and action to do the not of initial state.
    > dispatch the action accordingly onclick function
    > and useselector in browse to fetxh the state and then render the UI accordingly.

- GPT Search Page
    - Create 2 components one for the search bar and other for the search suggested movies.

- Adding in Language Change Feature
    > create a Langugae constants file that has our button and search bar in different languages.
    > in our general constants add the identifier which can be used as key for dyanamic changes and name to be displayed.
    > create a config slice and add action to handle the change language function.
    > dispatch the action `onChange` for select tag
    > use selector to fetch the language changes in the GPTSearchBar.

- Registering for GPT API via Open.ai Platform
    > browse to platform.openai.com -> login with you chatGPT account
    > go to API section -> create new secret key
    > Create a secret key and copy the key generated and paste in our constants file and export from there. 

- Install npm OpenAI package. It is the helper functions that are used to make the API calls directly.

- Create a separete js file to save the open AI generic function copy it from the boiler plate of NPM OpenAI