#PROJECT 

Use github email in login page to get your repositories.

## How to run
```
# start server
npm start or npm run start:dev in development
```
## How to test
Install [Postman](https://www.getpostman.com/)

## API endpoints
HTTP route prefix : http://localhost:3000

### API endpoints summary
### USER
Route      | Method | Description
-----------|--------|--------------------
/login         | post    | to get access token
### Repo
Route      | Method | Description
-----------|--------|--------------------
/repositories  | GET    | read repo (Authentication needed)
#### POST http://localhost:3000/login
##### HTTP Request Body Example
```javascript
{
    "EMAIL" : "****@gmail.com",
    "PASSWORD" : "****"
}
In place of **** => give ur respective email and password
```
##### HTTP Response Body Example
```javascript
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
```javascript
{
    {
    [
        {
            
        }
    ]
}
}
```
