# Typescript code challenge
 
## Please read this before review
This code is implemented with typescript Tsconfig-google code style and some kind of javascript libraries 
i did my best to keep the code clean and typesafe and with SOLID considerations
you may find some complicated code without any reason, and some kind of over-engineering, i did it to show my skills  to use typescript features

## Installation

Use the package manager [YARN](https://yarnpkg.com/cli/node) to install dependencies.

```bash
yarn install 
```

## Usage

```bash

# for easy run project 
 yarn start

# for run  with dynamic inputs 
 yarn start --input ./app.log --output ./errors.json

# for run  with dynamic inputs and log level 
## NOTE: you pick keys from data please prepare .env file and check src/config.ts
 yarn start --input ./app.log --output ./errors.json --level debug

# for run tests
 yarn test
```

## Contributing
this code is flexible for printing different kinds of log types, also you can pick data that you need front environment variables,
it can be better if you add some features like tracing nested objects pick data like "user.id"

## Code structure
 > src
 > > dto 
 > > > data transfer object types (for validation in future)
 > >
 > > enums
 > > > log-level-type
 > > 
 > > interface
 > > > related interfaces
 > > >
 > > lib
 > > > transformer
 > > >
 > > > IO operator
 > > > 
 > > main.ts
 > > > entry point of project
 > > >
 > > logger-parser.ts
 > > > core logic of parser
 > >  
 > > config.ts
 > > > configurable variables
 > > 
 > errors.json
 > 
 > app.log
 > >
 > other files ...

 



## License
 - no license