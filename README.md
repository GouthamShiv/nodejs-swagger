# nodejs-swagger

## Improved upon this => Swagger with NodeJS tutorial - https://www.youtube.com/watch?v=xnnABB3XDag

#### ^^ definitely not by me 😅

> This is just a demo / template to demonstrate how to enable token based authorization in NodeJS - Swagger
> Implementation of JWT authentication is not the goal of this particular app

### Worthy reference links

- [How to set up a NodeJS project with TypeScript](https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript)
- [Deploying TypeScript NodeJS app to Heroku](https://medium.com/developer-rants/deploying-typescript-node-js-applications-to-heroku-81dd75424ce0)
- [How to deploy a NodeJS app to Heroku from Github (without installing Heroku on your machine)](https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/)

### Access the Live Demo of this app from [here](https://boiling-falls-56189.herokuapp.com/api-docs)

### Steps for run this app in 🔐`HTTPS` mode

This is now required as part of this commit because I've added `helmet` 🪖 <br> A dependency which enforces additional security

- > Create a directory named `cert` under `src` <br> navigate to this `cert` directory

- > Create `key.pem` file <br> `openssl genrsa -out key.pem`

- > Create `csr.pem` file <br> `openssl req -new -key key.pem -out csr.pem`

- > Create `cert.pem` file <small>actual certificate file</small> <br> `openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem`

**NOTE:** openssl comes pre-installed on MAC and easy to get it on any linux distros.

So, for windows buddies hit [this link](https://stackoverflow.com/questions/50625283/how-to-install-openssl-in-windows-10), which takes you to a stack-overflow answer, which might help setting up openssl and probably get your certificates generated with the same commands as above _<small>(don't forget to create and navigate to the `cert` directory within `src`)<small>_
