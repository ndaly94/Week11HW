# week-11-HW

## Dependencies:
    Express, Node, JSX, dotenv, method-override, mongoose
    Testing Dependencies: Artillery, Jest, Supertest, Morgan
    
## This project is used to show understanding of creating routes with express and MongoDb within Node.JS

This project is broken down in the MVC framework with additional directories for the routes and tests. 

The database is a relational database hosted by MongoDB.

The Routes are defined in the Model section in ToDo.js and uses a mongoose schema. 

The controller works with the routes in order to specify the routes which can be ran. There are routes for the following: 

    - GETting all of the todos on one page. 
    - POST which allows us to create a new ToDo and assigns it an ID on the backend. 
    - PUT to update a specific ToDo based on its ID.
    - GET route that pings up the NEW.jsx file which gives the user a page to input new ToDos to the database. This page can initiate a POST to the backend via the corresponding route
    - GET route tha bbrings up the Show.jsx file which displays a list of all already entered toDos and their description, completion status, and the date they need to be completed by

### The routes are also tested via Jest, SuperTest, and Artillery.yml

