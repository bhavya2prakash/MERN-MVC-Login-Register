MERN Login Project

This is a project where a user can login in if they have an account and successfully land on the home page which has a navbar that helps to navigate to the the abput , contct and jobs pages. The home page has a logout button which successfully logs out the user.the four pages has a card componenet giving the details og the pages and the contct page and jobs pages has react map() to dynamically create a componenet.

Frontend: React-Js
Backend:Node-JS ,Express, MongoDB

The following are some more details of the project:

1.The frontend of the project uses React Js ,the backend uses Node JS, and the database is supported by MongoDB

2.The frontend react components are pages, navbar, card and reactmap(uses map() to create dynamic components on Jobs and Contact pages)

3.The home, contact,jobs, and aboutus component renders card component and contact and jobs component renders reactmap componenet

4.The login page uses axiom to create a post request and login the user who after successful login lands on the home page

5.The user can logout clicking on the logout button on the home page

6.The backend follows Rest hierarchy where model.js has the database schema,router.js has all the routers,controllers.js has functions for each specific routes,service.js has mogoDB queries used for routes

7.The backend app listens port 9002 and frontend listens port 3000 (default)

