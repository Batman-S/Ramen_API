# Ramen API (Express, Node.js, TypeORM, Postgres) v1.0.1

![Ramen Image](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOPco936TQRvsoRCp4SGOvkVsTUMo5qG9tEQ&usqp=CAU)

Hungry already?

Find your perfect bowl with Ramen API!

# Getting Started

1. Install Dependencies:  
   `npm install`

2. Setup local Enviroment Variables

3. Setup database settings inside `ormconfig.ts` file

4. Run `npm start` command

# API Endpoints

_**All endpoints are prefixed with**_ `/ramenapi`

* Create : POST 
* Read : GET
* Update : PATCH
* Delete : DELETE

## Ramen Shops
### Create
* `/ramenshop`
    * Creates new ramen shop and adds to the database
    * Accepts JSON formated data matching entity type **Ramen Shop** (see Entities below)
### Read
* `/ramenshop`
   * Retrieves a list of all available ramen shops in the database 
* `/ramenshop/:id`
    * Retrives one specific ramen shop designated by the id parameter

### Update
* `/ramenshop/:id`
    * Updates specific ramen shop designated by id
    * Accepts JSON formated data matching or partial entity type **Ramen Shop** 
    
### Delete
* `/ramenshop/:id`
    * Deletes specific ramen type designated by the id parameter.

## Ramen Type
### Create
* `/ramentype`
    * Creates new ramen type and adds to the database
    * Accepts JSON formated data matching entity type **Ramen Type** (see Entities below)
### Read
* `/ramentype`
   * Retrieves a list of all available ramen types in the database 
* `/ramentype/:id`
    * Retrives one specific ramen type designated by the id parameter

### Update
* `/ramentype/:id`
    * Updates specific ramen type designated by id
    * Accepts JSON formated data matching or partial entity type **Ramen Type** 
    
### Delete
* `/ramentype/:id`
    * Deletes specific ramen type designated by the id parameter.