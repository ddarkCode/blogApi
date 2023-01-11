# Blog App

This is an api for a Blog app

---

## Requirements

​

1. Users should have a first_name, last_name, email, password, (you can add other attributes you want to store about the user)
2. A user should be able to sign up and sign in into the blog app
3. Use JWT as authentication strategy and expire the token after 1 hour
4. A blog can be in two states; draft and published
5. Logged in and not logged in users should be able to get a list of published blogs created
6. Logged in and not logged in users should be able to to get a published blog
7. Logged in users should be able to create a blog.
8. When a blog is created, it is in draft state
9. The owner of the blog should be able to update the state of the blog to published
10. The owner of a blog should be able to edit the blog in draft or published state
11. The owner of the blog should be able to delete the blog in draft or published state
12. The owner of the blog should be able to get a list of their blogs.
    a. The endpoint should be paginated
    b. It should be filterable by state
13. Blogs created should have title, description, tags, author, timestamp, state, read_count, reading_time and body.
14. The list of blogs endpoint that can be accessed by both logged in and not logged in users should be paginated,
    a. default it to 20 blogs per page.
    b. It should also be searchable by author, title and tags.
    c. It should also be orderable by read_count, reading_time and timestamp
15. When a single blog is requested, the api should return the user information(the author) with the blog. The read_count of the blog too should be updated by 1
16. Come up with any algorithm for calculating the reading_time of the blog.
17. Write tests for all endpoints

---

## Setup

- Install NodeJS, mongodb
- pull this repo
- update env with yourOwn.env
- run `npm run dev`

---

## Base URL

https://blog-api-project-v2.onrender.com/

## Models

---

### User

| field      | data_type | constraints |
| ---------- | --------- | ----------- |
| \_id       | string    | required    |
| email      | string    | required    |
| first_name | string    | optional    |
| last_name  | string    | optional    |
| password   | string    | required    |

### Blog

| field        | data_type | constraints            |
| ------------ | --------- | ---------------------- |
| \_id         | string    | optional               |
| created_at   | date      | optional               |
| state        | string    | required,default:draft |
| title        | string    | required               |
| description  | string    | required               |
| author       | string    | optional               |
| authorId     | string    | optional               |
| tags         | string    | required               |
| read_count   | number    | optional               |
| reading_time | number    | optional               |
| body         | string    | required               |
| updatedAt    | date      | optional               |

## APIs

---

### Signup User

- Route: /api/auth/signup
- Method: POST
- Body:

```
{
  "email": "doe@example.com",
  "password": "Password1",
  "firstname": "jon",
  "lastname": "doe",
}
```

- Responses

Success

```
{
  "loggedIn": true,
  "profile": {
    "_id": "636720c4f7ea577142f91291",
    "email": "example@gmail.com",
    "last_name": "jon",
    "first_name": "doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY3MjBjNGY3ZWE1NzcxNDJmOTEyOTEiLCJlbWFpbCI6InVnbzJAZ21haWwuY29tIiwibGFzdF9uYW1lIjoidWdvIiwiZmlyc3RfbmFtZSI6InVnbyIsImlhdCI6MTY2NzcwMjk4MCwiZXhwIjoxNjY3NzA2NTgwfQ.0k0dS85xwoU-kSnbUOYCW34AoK9EPUL9vWWTE3AoGYQ"
}
```

---

### Login User

- Route: /api/auth/login
- Method: POST
- Body:

```
{
  "password": "password",
  "email": 'example@gmail.com",
}
```

- Responses

Success

```
{
  "loggedIn": true,
  "profile": {
    "_id": "636720c4f7ea577142f91291",
    "email": "example@gmail.com",
    "last_name": "jon",
    "first_name": "doe"
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY3MjBjNGY3ZWE1NzcxNDJmOTEyOTEiLCJlbWFpbCI6InVnbzJAZ21haWwuY29tIiwibGFzdF9uYW1lIjoidWdvIiwiZmlyc3RfbmFtZSI6InVnbyIsImlhdCI6MTY2NzcwMzEwNSwiZXhwIjoxNjY3NzA2NzA1fQ.6-VKgN-S_H3VRI1JXv2Yc4Hl86y5ZboY2VdQ-_s72dM"
}
```

---

## Blogs

### Get all published blogs

- Route: /api/blogs
- Method: GET

Success

[]

### Create Blog

- Route: /api/blogs/?blog_token
- Method: POST

- Body:

```
{

  "title": "",
  "description": "",
  "state": "",
  "tags": "",
  "body": ""
}
```

### Update Blog

- Route: /api/blogs/blogId/?blog_token
- Method: PATCH

- Body:

```
{

  "title": "",
  "description": "",
  "state": "",
  "tags": "",
  "body": ""
}
```

### DELETE Blog

- Route: /api/blogs/blogId/?blog_token
- Method: DELETE

---

## Authors

### GET Author Blogs

- Route: /api/authors/authorId/blogs/?blog_token
- Method: GET
- Query params:
- page (default: 1)
- limit (default: 10)
- state (default: any)

Success

{
"next": {
"page": 3,
"limit": 4
},
"previous": {
"page": 1,
"limit": 4
},
"blogLists": []
}

---

```

---

...

## Contributor

- Nnamani Ugochukwu Frederick
```
