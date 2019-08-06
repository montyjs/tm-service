# Project Name

Tarantulace Equipment, Inc.

## Related Projects

  - https://github.com/montyjs/mg-product-wrapper
  - https://github.com/montyjs/jb-description

## Table of Contents

1. [Demo](#Demo)
2. [Technologies](#Technologies)
2. [Usage](#Usage)
3. [Requirements](#requirements)
4. [Development](#development)

## DEMO

![gif](https://imgur.com/M2q5UJk.gif)

This componenet was deployed to AWS via Elastic Beanstalk.  A proxy server was also deployed to pull in 2 other modules (as shown in the gif) to create a clone of an REI product page.  The team for this project used an Agile software development structure along with a micro-services architecture.

## Technologies

- JavaScript
- React.js
- Sass
- Node.js
- Express
- PostgreSQL
- Jest
- Enzyme
- AWS Relational Database Service
- AWS Elastic Beanstalk

## Usage

> Some usage instructions

This repo is configured to run in a production or developement environment.  Environment specific instructions are below:

* Development

1. Install dependencies by running 'npm install'
2. Create an env file for your local postgres login credentials and server port.  See below for an example config:
```
PORT=<Port number here>
DB_USER=<'USER NAME HERE'>
DB_HOST=<'HOST HERE'>
DB_PASSWORD=<'PASSWORD HERE'>
DB_PORT=<PORT NUMBER HERE>
```
3. In the pakcage.json add your username to the 'build:db' script as shown below:
```
"build:db": "psql -d postgres -U <YOUR USERNAME HERE> -f schema.sql"
```
4. Run script 'build:db' to initialize the database
5. Run script 'seed:db'.  This will load the database with 14 realistic entries.
6. Run script 'build:dev' to compile a bundle.js from React via Webpack.
7. Run script 'start' bring up the server.

* Production

- Follow all instructions above except for step 2.  Instead of your local postgres connection details create a variale for your database connection string.  See below:
```
DB_URI=<YOUR CONNECTION STRING HERE>
```

## Requirements

- Node ^8.11.0
- PostgreSQL *11.20
