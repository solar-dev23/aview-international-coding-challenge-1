# Aview International Coding Challenge 1

## Description

This is a simple test application that displays dogs and translate the content to multiple languages using 3rd party libraries.

## Getting Started

### Prerequisites

- [React](https://reactjs.org/)
- [Material UI](https://mui.com/)

### Installation

#### Clone the repo

```bash
git clone https://github.com/solar-dev23/aview-international-coding-challenge-1.git
```

#### Install Yarn packages

```bash
yarn
```

#### Create .env in the root directory and make sure all environment values are valid

### Run app

```bash
$ yarn start
```

The app will be running on [http://localhost:3000](http://localhost:3000)

## Challenges

- For now, we are translating only the content per dog card since we have the api limitation and in order to reduce the number of api calls.
- If we have a better api solution, we can update the app that can translate whole page content with a single api call. In this case, we can move the language select dropdown to the header bar instead of each dog card. And we can use the context api to change the language in the app. (FYI, already added `LanguageContext`, but it's not used for now.)

## Suggestion

- Import translation dictionary instead of using 3rd part api
