# Node TypeScript Starter

Tired of having to make the same setup over and over again when beginning a new Node.js project? I give you the best template to start coding as fast as possible.

## Requirements
* Node 16
* Yarn

## Setup
First of all, make a copy of this project by clicking on **"Use this template"**.

Now that you have your own repository, clone it and install its dependencies:
```bash
yarn install
```

Finally, run your code:
```bash
yarn start
yarn start:dev # listens for changes 
```

## Build
To generate a production build of your code, you can run:
```bash
yarn build
```
This will generate a **dist** directory with the compiled **src** code. If you want to execute the code inside it, run:
```bash
yarn start:prod
```

## Linters
This project uses [Eslint](https://eslint.org/) and [Prettier](https://prettier.io/), so that you can maintain a standard and clean coding style.

If you want to check for linter offences, run:
```bash
yarn lint
yarn lint:fix # fixes offences if possible
```

## Testing
To test your code, this project has already setup [Jest](https://jestjs.io/).

To write new tests, add **\*.spec.ts** files inside de **test** directory and run:
```bash
yarn test
```

## Using Github
This project uses Github Actions to check for linter offences and run your tests in every pull request. Also, it comes with a pull request template.