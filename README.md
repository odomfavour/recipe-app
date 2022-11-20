# Frontend - Kitchen Diary

### Installing Dependencies

1. **Installing Node and NPM**
   This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

2. **Installing project dependencies**
   This project uses NPM to manage software dependencies. NPM Relies on the package.json file located in the `client` directory of this repository. After cloning, open your terminal and run:

```bash
npm install
```

> _tip_: `npm i`is shorthand for `npm install``

## Required Tasks

## Development Setup

**Download the project starter code locally**
```
git clone https://github.com/workshopapps/recipeprint.web.git
cd recipeprint.web/client
git branch <task name> e.g if your task is navbar run git branch navbar 
git checkout <task name> e.g git checkout navbar
```

The frontend app was built using create-react-app. In order to run the app in development mode use `npm start`. You can change the script in the `package.json` file. On your terminal ensure you are on the  `recipeprint.web` folder then run:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

**Once you have finished editing your code, you can push the dev.**
```
git add . --all   
git commit -m "your comment"
git push -u origin <task name> e.g git push -u origin navbar
```
