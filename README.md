#PROJECT 

Use github email in login page to get your repositories.

## How to run
```
# start server(Backend)
npm start or npm run start:dev in development
sudo service redis-server start

# start server(Frontend)
npm start

```
## How to test
Install [Postman](https://www.getpostman.com/)

## API endpoints
HTTP route prefix : http://localhost:3000

## Architecture Diagram
![alt text](https://github.com/davidson-ncompass/NestJs-Project/blob/master/System%20Architecture.jpg?raw=true)

### API endpoints summary
### USER
Route      | Method | Description
-----------|--------|--------------------
/login         | post    | to get access token
### Repo
Route      | Method | Description
-----------|--------|--------------------
/repositories  | GET    | read repo (Authentication needed)
#### POST http://localhost:3000
Screenshot:
![alt text](https://github.com/davidson-ncompass/NestJs-Project/blob/master/screens/login.png?raw=true)
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
#### get http://localhost:3000/repositories
Screenshot:
![alt text](https://github.com/davidson-ncompass/NestJs-Project/blob/master/screens/user-details.png?raw=true)
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
```
