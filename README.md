# KrownPay Backend Assessment

The goal of the assessment is to test your knowledge of basic backend implementations.
It depicts the actual code base environment of what you will be working on in KrownPay if selected after successfully passing the assessments. In case of any questions while working on the assessment please reach out to the team lead via email: peterlogo@krownpay.com

## Set up

- Run `yarn install` to download all the packages needed to run the project. In case you do not have yarn installed on your machine, you can do so by typing `npm -i yarn --global`.  Please ensure you have Nodejs installed on your machine if not you will have issues working on the assessment. [Install nodejs](https://nodejs.org/en/)
- You will be working with MongoDB a NoSQL database in this project. The MongoDB used will be accessed using docker. This will run MongoDB locally on your machine and you can use it to perform your database operations. Do the following before running the project;
  - Ensure that you have docker installed on your machine. If you don't have docker installed,    you can visit [Install docker](https://docs.docker.com/get-docker/)
  - Run `docker compose -f docker-compose.mongo.yml up -d` in the project root directory to spin up a MongoDB container to connect to the database.
  - Run `docker compose -f docker-compose.mongo.yml stop` to stop the container.

**Note:**
The following packages were installed to aid in the development process;

- express-async-handler: Will be useful for writing asynchronous code in expressJS: [express-async-handler link](https://www.npmjs.com/package/express-async-handler)
- mongoose: An ODM for connecting to mongoDB and perform database operations: [mongodb link](https://mongoosejs.com/)
- mocha, chai and chai-http: The unit tests will be done using this libraries. Chai-http is useful for testing http endpoints

### Instructions

Given a user object with the type User:

```TypeScript
 interface User {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  verified: boolean;
 }
```

- Create a route to create a new user using the path `/users`
  - All fields must be filled.
  - `email` property must be a valid email address.
  - `verified` property is false by default.
  - `phoneNumber` property must be in the right format for Australian phone numbers.
  - Write a unit test for the implementation.
  
- Create a route to retrieve an existing user by id using the path `/users/:id`
  - The user must exist in the database.
  - Write a unit test for the implementation.

- Create a route to retrieve all existing users in the database using the path `/users`
  
- Create a route to update an existing user by id using the path `/users/:id`
  - `email` property must be a valid email address.
  - `verified` property is false by default.
  - `phoneNumber` property must be in the right format for Australian phone numbers.
  - The user must exist in the database.
  - Write a unit test for the implementation.
  
- Create a route to delete an existing user by id using the path `/users/:id`
  - The user must exist in the database.
  - Write a unit test for the implementation.
