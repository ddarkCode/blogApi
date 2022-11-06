const request = require('supertest');

const app = require('../app');

//Blogs Routes test

describe('Blogs CRUD operations', () => {
  it('Return a list of blogs in draft.', async () => {
    const res = await request(app).get('/api/blogs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toEqual(true);
  });

  it('Adds a new Blog in draft state to the database.', async () => {
    const res = await request(app)
      .post(
        '/api/blogs/?blog_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY2YTk5YTEwODNhOTQ3OTk1YzU1YmQiLCJlbWFpbCI6InVnb0BnbWFpbC5jb20iLCJsYXN0X25hbWUiOiJ1Z28iLCJmaXJzdF9uYW1lIjoidWdvIiwiaWF0IjoxNjY3NjcyNDc1LCJleHAiOjE2Njc2NzYwNzV9.q5X2-PFOwykOQ8ic4tZL53UE2H0K1arb_hcxRXPTvoM'
      )
      .send({
        title: 'jwt.verify(token1)',
        description: ' A sample blog',
        authorId: '6366a99a1083a947995c55bd',
        state: 'draft',
        tags: 'javascript, programming',
        body: '(Asynchronous) If a callback is supplied, function acts asynchronously. The callback is called with the decoded payload if the signature is valid and optional expiration, audience, or issuer are valid. If not, it will be called with the error.',
      });

    expect(res.body).toHaveProperty('title');
    expect(res.body).toHaveProperty('description');
    expect(res.body).toHaveProperty('author');
    expect(res.body).toHaveProperty('authorId');
    expect(res.body).toHaveProperty('state');
    expect(res.body).toHaveProperty('tags');
    expect(res.body).toHaveProperty('read_count');
    expect(res.body).toHaveProperty('reading_time');
    expect(res.body).toHaveProperty('body');
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('createdAt');
    expect(res.body).toHaveProperty('updatedAt');
  });

  it('Gets a blog.', async () => {
    const res = await request(app).patch('/api/blogs/6366ac332fb7debe9b1d2ca2');

    expect(res.body).toHaveProperty('title');
    expect(res.body).toHaveProperty('description');
    expect(res.body).toHaveProperty('author');
    expect(res.body).toHaveProperty('authorId');
    expect(res.body).toHaveProperty('state');
    expect(res.body).toHaveProperty('tags');
    expect(res.body).toHaveProperty('read_count');
    expect(res.body).toHaveProperty('reading_time');
    expect(res.body).toHaveProperty('body');
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('createdAt');
    expect(res.body).toHaveProperty('updatedAt');
    expect(res.body).toHaveProperty('infos');
  });

  it('Updates a blog.', async () => {
    const res = await request(app)
      .patch(
        '/api/blogs/6366ac332fb7debe9b1d2ca2/?blog_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY2YTk5YTEwODNhOTQ3OTk1YzU1YmQiLCJlbWFpbCI6InVnb0BnbWFpbC5jb20iLCJsYXN0X25hbWUiOiJ1Z28iLCJmaXJzdF9uYW1lIjoidWdvIiwiaWF0IjoxNjY3NjczMzYxLCJleHAiOjE2Njc2NzY5NjF9.EQkGmPKzP8ZKaVCB-xak8RMCZf88TK8LpSxqu9nSb74'
      )
      .send({ state: 'published' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('updateInfo');
    expect(res.body).toHaveProperty('message');
  });

  it('Delets a blog.', async () => {
    const res = await request(app).delete(
      '/api/blogs/6366ac332fb7debe9b1d2ca2/?blog_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY2YTk5YTEwODNhOTQ3OTk1YzU1YmQiLCJlbWFpbCI6InVnb0BnbWFpbC5jb20iLCJsYXN0X25hbWUiOiJ1Z28iLCJmaXJzdF9uYW1lIjoidWdvIiwiaWF0IjoxNjY3NjczMzYxLCJleHAiOjE2Njc2NzY5NjF9.EQkGmPKzP8ZKaVCB-xak8RMCZf88TK8LpSxqu9nSb74'
    );
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('deleteInfo');
    expect(res.body).toHaveProperty('message');
  });
});

//Auth tests

describe('Sign up and login a user:', () => {
  it('It should sign up user.', async () => {
    const res = await request(app).post('/api/auth/signup').send({
      email: 'jay3@gmail.com',
      last_name: 'jay',
      first_name: 'jay',
      password: 'jay',
    });
    console.log(res.statusCode);
    console.log(res.body);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('loggedIn');
    expect(res.body).toHaveProperty('profile');
    expect(res.body).toHaveProperty('token');
  });

  it('It should login a user.', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'jay1@gmail.com',
      password: 'jay',
    });
    console.log(res.statusCode);
    console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('loggedIn');
    expect(res.body).toHaveProperty('profile');
    expect(res.body).toHaveProperty('token');
  });
});

//Author routes tests

describe('Author CRUD operations', () => {
  it('Returns a list of blogs in draft and puplished state.', async () => {
    const res = await request(app).get(
      '/api/authors/6366a99a1083a947995c55bd/blogs'
    );
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('blogLists');
  });

  it('Returns a list of blogs in draft and puplished state.', async () => {
    const res = await request(app).get(
      '/api/authors/6366a99a1083a947995c55bd/blogs/blogId'
    );
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('title');
    expect(res.body).toHaveProperty('description');
    expect(res.body).toHaveProperty('author');
    expect(res.body).toHaveProperty('authorId');
    expect(res.body).toHaveProperty('state');
    expect(res.body).toHaveProperty('tags');
    expect(res.body).toHaveProperty('read_count');
    expect(res.body).toHaveProperty('reading_time');
    expect(res.body).toHaveProperty('body');
    expect(res.body).toHaveProperty('_id');
  });
});
