## Prerequisites
1. NPM is installed on your PC.

## Installation
1. Clone this repository
2. Install the packages using npm install (in your command line execute: npm install)
3. Launch the app in development mode using npm start (in your command line execute: npm start)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Description of the app elements

`src/GlobalConstants` --> Contains global constants that will be reused within the whole application&nbsp;
`src/components` --> Contains all the components used to create this project&nbsp;
`src/components/routes` --> Component in order to map the url paths to their respective views&nbsp;
`src/components/MiddlePanel` --> Contains a reusable container that will be used to render the views in all the pages&nbsp;
`src/components/Navigation` --> Contains a reusable navigation bar that contains the elements used to browse the app (SpaceX button for homepage, history button for historical events regarding SpaceX, crew button to show information about the employees of SpaceX and flights information to show all the launches of SpaceX with information regarding the launchpad that has been used). &nbsp;
`src/components/Navigation/NavigationItem` --> Component containing a single navigation item &nbsp;
`src/components/Navigation/Sidebar` --> Component containing a sidebar used for smaller window sizes and mobile devices &nbsp;
`src/components/Views/Crew` --> Contains the view for the crew members tab&nbsp;
`src/components/Views/Crew/CrewMember` --> Contains a reusable component for the single crew member card&nbsp;
`src/components/Views/Flights` --> Contains the view for the flights tab&nbsp;
`src/components/Views/Filter` --> Filter button used to toggle between successfull and unsuccessful flights (a button can be unclicked for disactivation)&nbsp;
`src/components/Views/History` --> Contains the view for the history tab&nbsp;
`src/components/Views/History/HistoryItem` --> Contains a reusable component for the single history card item&nbsp;
`src/components/Views/Main` --> Contains the landing page containing generic information about SpaceX&nbsp;

## Testing

`cypress/integration/homepage.js` --> contains automated tests for the landing page.

In order to run the test, run npm test while the application is app and running, then select homepage.js in the cypress tab that will appear.

