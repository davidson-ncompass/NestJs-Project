#PROJECT 

Use github email in login page to get your repositories.

## How to run
```
# start server
npm start or npm run start:dev in development
sudo service redis-server start
```
## How to test
Install [Postman](https://www.getpostman.com/)

## API endpoints
HTTP route prefix : http://localhost:3000

### API endpoints summary
### USER
Route      | Method | Description
-----------|--------|--------------------
/         | post    | to get access token
### Repo
Route      | Method | Description
-----------|--------|--------------------
/repositories  | GET    | read repo (Authentication needed)
#### POST http://localhost:3000
![alt text](https://github.com/davidson-ncompass/NestJs-Project/blob/master/screens/login.jpg?raw=true)
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
##### TOKEN 
 BEARER TOKEN in authorization header
##### HTTP Request Body Example
Repo details will be fetched after logingin
##### HTTP Response Body Example
```json
{
    {
    [
        {
            
        }
    ]
}
}
```
