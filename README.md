# Crawler-Instagram

_JS/EXPRESS BASED API_ for getting info of instagram profiles and posts!

`Dockerfile` and `package.json` available.
___
<br />

## DOCKER FILE USAGE
to create a image base on the Dockerfile provided

`
$ docker build -t williamtcastro/crawlerInsta .
`

to create a container based on the image created before

`
$ docker run -d -p 3000:3000 --name crawlerContainer williamtcastro/crawlerInsta
`
_____
<br />

## NODE RUN
to install the dependences of the api 

`npm install` or  `yarn`

to create a container based on the image created before

`node src/server.js` or `yarn start`
_____
<br />

## API ROUTES

### USER ROUTES

| Route | TYPE | RESPONSE |
|-------|------|----------|
|/u/{instagram username} | GET | Full information on the provided username (UNFILTERED) |
|/u/{instagram username}/info | GET | Basic information on the provided username |
|/u/{instagram username}/posts | GET | List of post on the provided username |
<br />
### POSTS ROUTES

| Route | TYPE | RESPONSE |
|-------|------|----------|
|/p/{instagram post shortname} | GET | Full information on the provided post (UNFILTERED) |
|/p/{instagram post shortname}/comments | GET | Comments and Replys information on the provided post |
