
<p align="center">
<img src="https://avatars.githubusercontent.com/u/4601329?v=4" width="150"/>
</p>
<h1 align="center">Byte Size URL Shortner</h1>

# API

1. The API for this repo was setup with Prisma and a Planetscale database. The [API repo can be found here](https://github.com/roman-bytes/bytes-url-api) but `.env` variables are needed to run that locally.
2. This API was generated from Prisma and uses the URL Shortner schema template and came with more APIs than I really needed.

# Local Setup

## Prerequisites 

1. Node 16
2. [Netlify Cli ](https://github.com/netlify/cli)

## Getting things running

1. Clone down repo [https://github.com/roman-bytes/bytes](https://github.com/roman-bytes/bytes)
2. Navigate to repo in terminal and install the dependencies 
```bash
yarn install
// or
npm run install
```

3. Once everything is done installing run :
```bash
yarn dev
// or 
npm run dev
```

## Running Tests

Test are setup with [Jest](https://github.com/facebook/jest) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

1. Running Test run
```bash
yarn run test
// or
npm run test
```
