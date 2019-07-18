# amolgajewar-proxy

For serving front end components on ebay auction page.

## Related Projects

  - https://github.com/fec4-gandolf/bid-buy
  - https://github.com/fec4-gandolf/images-modal
  - https://github.com/fec4-gandolf/Napoleon-Service
  - https://github.com/fec4-gandolf/PeopleAlsoViewed

## Table of Contents

1. [Setup](#Setup)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Setup

Create .env file in root folder of your project and specify following\

set port number for express server\
PORT=3000\
set up service api ports\
MODAL_API_PORT=\
BIDBUY_API_PORT=\
REVIEW_API_PORT=\
ALSOVIEWED_API_PORT=\

1 Run 'npm install' for installing project dependecnies,

2 Run command 'npm run start:dev' which starts express server listening on port number 3000 with nodemon alternative 'npm run start' will start the same without nodemon,

## Usage
1 Once the server is running user can access client components in brower at `http://localhost:3000`

2 User can specify id for ex. `http://localhost:3000/?id=6` to request item details like product view, bid buy, reviews and related items list

## Requirements

## Development

### Installing Dependencies

