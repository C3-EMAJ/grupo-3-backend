# grupo-3-backend

## Baby-steps
The first thing you need to do on a NodeJS repository is install all the dependencies
inside package.json. To complete this taks, promt:

```
npm i
```
Then, to run your application
```
npm run dev
```
Go to http://localhost:3000/ and voila! Your server is running


### Running Postgress inside container
first, build the image
```
docker build .
```
then run the image that was builded 
```
docker-compose up
```

Postgress will be running on user@localhost:5432/mydb-dev