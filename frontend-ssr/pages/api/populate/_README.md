# Populate

Temp files used to populate the database with some dummy data until we have end-to-end CRUD support from the interface.

You'll need to call a couple of APIs in order to populate first the Users, then the Exercises and finally the submissions.

⚠ You'll need to add a variable inside `.env.local` to configure the connection url. (write to me in private - not sure we should keep it on GitHub)

## Users

`GET localhost:3000/api/populate/users` -> Get all users in the database

`POST localhost:3000/api/populate/user` -> Insert a bunch of dummy users

## Exercises

`GET localhost:3000/api/populate/exercises` -> Get all exercises in the database

`POST localhost:3000/api/populate/exercises?count={count}` -> Insert dummy exercises. Use the `count` query param to specify how many you want to insert.

## Submissions

`GET localhost:3000/api/exercises/submissions?page={page}&query={query}` -> Search for submissions

`POST localhost:3000/api/populate/submissions?count={count}` -> Insert dummy submissions. Use the `count` query param to specify how many you want to insert.


