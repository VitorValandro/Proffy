# Proffy
![Project screenshots](https://user-images.githubusercontent.com/50156875/102137911-5630dc00-3e3a-11eb-902a-a58a890cb5ac.png)

This project was made on the **Next Level Week #2**, as special for the 
National Day of Education Professionals, celebrated on August 6 in Brazil. It is a complete application that uses NodeJS for back-end and React and React Native for front-end. This was also my first project using Typescript instead javascript.

## About the project

Proffy is a marketplace that **connects private teachers to students who need tutoring in certain subjects**. The teacher can record his data, class subject, curriculum and hourly rates, then the student can find the teacher that best fits his needs.

I see this project as an oportunity to improve my skills of Rest APIs, NodeJS, React and React Native, and learn something new: the popular Typescript.

All the app has been developed based on the workshop's video tutorials and documentation of the language and frameworks.

## Technologies used

- Typescript
- Node.js
- Express
- React
- React Native
- Expo
- Axios and SQLite3

## Installation

First of all, clone this repository. Type this command on your bash:
```bash
git clone https://github.com/VitorValandro/Proffy.git
```
Then, install the dependencies in each main directory using
```bash
npm install

or

yarn install
```
Finally you can execute the application:
```bash
# Back-end API
cd server

# Configurate database and create SQL tables
npm run knex:migrate # or yarn knex:migrate
# Starting API
npm start # or yarn start

# Web Application
cd web

# Starting web application
npm start # or yarn start

# Mobile App
cd mobile

# Starting mobile application
npm start # or yarn start
``` 

This project wasn't for production, so there is no deployment in heroku, netlify or app stores.

###### The designs and arts weren't made by me.
###### Vitor Matheus Valandro da Rosa. August 2020.
