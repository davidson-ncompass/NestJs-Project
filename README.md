#PROJECT 

## BACKEND DESCRIPTION

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

# Github Repository Tracker

A nest js API to track all the repositories in a user's github profile

## Acknowledgements

 - [Nestjs Documentation](https://docs.nestjs.com/)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

SERVER Credentials 

HOST
DB_NAME 
DB_PORT 
DB_USER 
DB_PASSWORD 
JWT_SECRET 

## API Reference

#### To Login

```http
  POST /login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email`   | `string` | **Required**.              |
| `password`| `string` | **Required**.              |

Returns a jwt token on succesful login

#### To Get Repositories 

```http
  GET /repositories
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `JWT token| `string` | **Required**.  |

Returns all the repositories for the logged in user


## How to test
Install [Postman](https://www.getpostman.com/)

## API endpoints
HTTP route prefix : http://localhost:3000
##### HTTP Request Body Example
```json
{
    "EMAIL" : "****@gmail.com",
    "PASSWORD" : "****"
}
In place of **** => give ur respective email and password
```
##### HTTP Response Body Example
```json
{
    "access_token" : "**************************************************************************"
}
```
##### TOKEN 
 BEARER TOKEN in authorization header
##### HTTP Request Body Example
Repo details will be fetched after logging in
##### HTTP Response Body Example
```json
{
    [
        {
        "id": your_repository_id,
        "username": "your_username",
        "repository_name": "repository_name",
        "repository_url": "https://api.github.com/users/****-****/repos",
        "email": "your_emailId"
        }
    ]
}

#### POST http://localhost:3000




```


##FRONTND DESCRIPTION

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


![alt text](https://github.com/davidson-ncompass/NestJs-Project/blob/master/screens/login.png?raw=true)
This is the LOG-IN page.


Use github email in login page to get your repositories.
```
![alt text](https://github.com/davidson-ncompass/NestJs-Project/blob/master/screens/login.png?raw=true)
This is the page for showing the Repository list.


![1](https://user-images.githubusercontent.com/105263598/175952047-53d55423-16af-4c59-a927-0f8c4bad9800.jpg)
This is the Architecture Diagram.



```
## Architecture Diagram
![alt text](https://github.com/davidson-ncompass/NestJs-Project/blob/master/System%20Architecture.jpg?raw=true)


#### get http://localhost:3000/repositories
Screenshot:
![alt text](https://github.com/davidson-ncompass/NestJs-Project/blob/master/screens/user-details.png?raw=true)

