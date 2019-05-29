# Project Name

> Project description

## Related Projects

  - https://github.com/montyjs/mg-product-wrapper
  - https://github.com/montyjs/jb-description

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions
- run 'npm install' for dependencies
- Create an .env file that will contain your postgres login credentials, and the the server port you want to use
See below:
```
PORT=<Port number here>
DB_USER=<'User name here'>
DB_PASSWORD=<'Password here'>
```

- In the package.json, add your username to the 'initialize-db' script
See below:
```
"initialize-db": "psql -d postgres -U <USER NAME HERE> -f schema.sql"
```

- run script 'npm run initialize-db' to setup the database
- run script 'npm run real-seed' to seed the database
- run script 'npm run build-dev' to startup webpack
- run script 'npm start' to startup the server


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

- run script: initialize-db
- run script: seed-db

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
