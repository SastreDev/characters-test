# Caracters code challenge

Example of code challege.

## Node

- This project was developed with version 18.4.0

## Installation

```bash
npm install
```

## Run project

```bash
npm run dev
```

## Code Challenge

### Current status

This project contains a /server folder with a small api created with express library.
You have two endpoints available:

- `/api/characters`: Will returns a list of characters. This endpoint can randomly fail, be delayed or succed.
- `/api/characters/{id}`: Will return the character matching with ID provided. If no matching character, endpoint will fail.

### Goal

Create a FE projects (/client) that consumes this endpoint. This project must have two views (routes):

- `/`: Must display all characters. Make sure to cover all API responses status. Each character must redirect to a dedicated view where to display specific character data.
- `/{id}`: Dedicated view where to display specific character data.

### Extra points

- For characters view, create a filter by `name` and `status`
- For characters view, create a sorting by `gender`

### Rules

- Feel free to use any framework or library of your preference
- Try not to use any third party library, I want to see how you solve problems by your own