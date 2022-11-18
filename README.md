##MERN Project
###The following are the details of the project:

##The frontend of the project uses React Js ,the backend uses Node JS, and the database is supported by MongoDB
The frontend react components are pages, navbar, card and reactmap(uses map() to create dynamic components on Jobs and Contact pages)
The home, contact,jobs, and aboutus component renders card component and contact and jobs component renders reactmap componenet
The login page uses axiom to create a post request and login the user who after successful login lands on the home page
The user can logout clicking on the logout button on the home page
The backend follows Rest hierarchy where:
model.js has the database schema
router.js has all the routers
controllers.js has functions for each specific routes
service.js has mogoDB queries used for routes
The backend app listens port 9002 and frontend listens port 3000 (default)

