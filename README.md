# Project Name

> Optimizing database management system to support scaling the existing service

## Related Projects

  - https://github.com/Team-Martell/InitialViewAndProductPicCarousel
  - https://github.com/Team-Martell/AboutThisItem
  - https://github.com/Team-Martell/SimilarFeaturedCarousel
  - https://github.com/Team-Martell/RatingsandReviews

## Table of Contents

1. [CRUD](#CRUD)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## CRUD

> The below URL's should be prefixed with /api/products
Action | Method | URL
-------|--------|------
Create a new question | POST | /:id/questions
Create a new answer | POST | /:id/answers
Get details for product | GET | /:id/details
Get questions for product | GET | /:id/questions
Get answers for product | GET | /:id/answers
Update answer to Helpful | PUT | /:id/helpful
Update answer to Not Helpful | PUT | /:id/not-helpful
Delete a product | DELETE | /:id


## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node v14.15.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install
Rename example.env to .env
Input your environmental variables into .env
npm run reset // resets and/or creates a database named ABOUT_THIS_ITEM
npm run seed // clears databse and begins seeding process
npm run build // creates bundle.js
npm start // starts server
```

