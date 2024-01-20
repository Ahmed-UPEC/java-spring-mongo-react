**Graal Systems Project**

This repository is divided in 2 part : front and back.

The front end is composed of ReactJS 
The back end is based on JAVA & Spring framework
The database used in the project is the NO-SQL MongoDB


Realisation of the project :
1. Init a Spring projet using [Spring Initializr tool](https://start.spring.io/) (fig 1.)
2. Init a React project using ''' npx create-react-app '''
3. Run Mongo & Mongo Express (GUI) for the database in separate docker containers (fig 2.)
4. Creation of 2 endpoints (to retrieve all the users & get a single user info) (fig 3.)
5. Creation of the data schema in JAVA to match the database (fig 4.)
6. Creation of different users manually to populate the database (4 total)
7. Working on a minimalist design in React (fig 5.)
8. Setup the router and the dynamic routes (for a single user information) (fig 6.)
9. Consume the API to get : all the users and get a single one (fig 7a. & 7b.)


*Total time : approx 5h (45min front / 3h backend + database / 30min tests)*


Technical documentation + libs :
The backend is using Java with the Spring framework for the dependencies management I am using Maven.
Java : 15
Spring boot : 3.2.1
SpringFramework
Lombok
more info take a look into the pom.xml

docker-compose.yaml file contains the instruction to run the database :
1. MongoDB for the database usage
2. Mongo Express for a GUI version hosted on the port 8081:8081
3. It contains env keys for the database access

in the projet the application.properties sets the mongodb properties

- LittlebigcodeApplication.java is the entry point of the backend restAPI
- User.java defines the schema of the data + constructor
- UserController.java defines the schema of the api endpoints (2 endpoints)
- UserRepository.java defines the behaviour of the NO-SQL collection repo (which will be populated by docs)
- UserService.java defines the method used to access the data such as getUsers() or getUserInfo()

The MongoDB is using indexed data : the studentEmail and verifies it's uniqueness. If the adress exists in the database it will not insert the data (used to populate the database).

The frontend is a ReactJS Application combined with the React-Router-Dom package to handle the routes in our application.
React : 18.2.0
React-Router-Dom : 6.21.3

The ReactAPP contain 2 main routes '/' and '/user-info/:id' with the id being the id of a document inside the MongoDB

As for a demo project and a simple application I am going for a simple minimalistic design. Grid display set to 2 columns and a button linking to the '/user-info/' page


To run the project :

Backend : 
- Docker compose up the docker-compose.yaml file to run the database (optionally get to 8081:8081 for the GUI)
- Run '''mvn spring-boot:run''' to run the Backend on your local machine (make sure to install maven)

Frontend :
- Run ''' npm i ''' in the root folder 'front' to install all the dependencies of the frontend (make sure to install NodeJS)
- Run ''' npm start ''' to spin up the frontend a new window should popup at 3000:3000


**A short video will be provided as the app will not be deployed online + ppt for images**