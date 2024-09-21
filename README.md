Car Rental App
A modern, responsive Car Rental App built with React.js and Redux. Users can browse available cars, filter options, add cars to favorites, view car details in modals, and experience a clean, user-friendly interface. The app also includes a Featured Cars section and a detailed Car Catalog.

Table of Contents
Demo
Features
Tech Stack
Installation
Usage
File Structure
Redux State Management
Components
API Endpoints
Contributing
License
Demo
You can view the live demo of the app here ((https://rental-app-xi-lyart.vercel.app/)).

Features
Car Catalog: Displays all available cars with filtering options for brand, price, and mileage.
Favorites: Allows users to add and remove cars from their favorites list.
Dynamic Filtering: Filter cars based on brand, price, and mileage.
Featured Cars Section: Highlights a selection of featured cars on the homepage.
Modal Popups: Displays detailed car information in a modal upon selection.
Responsive Design: Fully responsive and optimized for all screen sizes.
Parallax Scrolling: A visually appealing parallax scrolling effect on the homepage.
Tech Stack
Frontend:
React.js: Framework for building the user interface.
React-Router: Used for client-side routing and navigation.
Formik & Yup: For form handling and validation.
React-Redux: For managing application state.
CSS Modules: For modular, scoped styling.
Backend:
MockAPI: A mock API service used to simulate real backend functionality.
Other Libraries:
Axios: For making HTTP requests to the backend.
React-Icons: For scalable icons.
React-Modal: For modal components.
Installation
To run the project locally, follow these steps:

Clone the repository:
bash

git clone https://github.com/your-username/car-rental-app.git
Navigate into the project directory:
bash

cd car-rental-app
Install all required dependencies:
bash

npm install
Start the development server:
bash

npm start
This will launch the app at http://localhost:5173/.

Usage
After installing the project:

Browse Cars: Navigate to the car catalog to view all available cars.
Filter Cars: Use the filter bar to search cars by brand, price, or mileage.
View Details: Click the "Learn More" button on a car card to view more details in a modal.
Add to Favorites: Click the heart icon to add a car to your favorites.
Explore Featured Cars: Check the featured cars section on the homepage.

Redux State Management
The app uses Redux for state management. Here’s an overview of the slices and state properties:

carCatalog Slice:

items: List of available cars.
featuredCars: List of featured cars displayed on the homepage.
currentCard: Stores details of the car selected for the modal.
hasMore: Boolean to manage the "Load More" functionality.
isModalOpen: Boolean to toggle the modal display.
filters Slice:

Manages filtering parameters for car catalog such as mileageFrom, mileageTo, make, and price.
Key Redux Actions:
fetchCarsThunk: Fetches the list of available cars.
addCurrent: Sets the currently selected car for the modal.
resetFilter: Clears the filters applied to the car catalog.
Components
Key Components:
Home.js: Renders the homepage with a parallax effect and the featured cars section.
CatalogList.js: Displays a list of cars in the catalog.
FilterPanel.js: Renders the filter bar to search cars by brand, price, or mileage.
CarDetailsModal.js: Displays detailed information about the selected car in a modal.
Navigation.js: Provides navigation links to the homepage, car catalog, and favorites.
API Endpoints
The app interacts with a mock API to simulate backend functionality. Below are the API endpoints used:

GET /cars: Fetches the list of available cars.
GET /cars?page=:page: Fetches additional pages of cars for the catalog.
GET /cars/:id: Fetches details for a specific car.
(Note: These endpoints are currently served by MockAPI).

Contributing
Contributions are welcome! Follow these steps to contribute:

Fork the repository.
Create a new branch (feature/your-feature-name).
Commit your changes.
Push to the branch:
bash
Копіювати код
git push origin feature/your-feature-name
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for more details.
