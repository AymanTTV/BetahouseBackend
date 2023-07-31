const request = require('supertest');
const app = require('../app');

//                              use npx jest route/test.js to test
//                      and also make sure you are in the backend directory!
//                                       mahadsanid   

// GET - Get all users
describe('GET /users/get', function () {
  it('should respond with JSON', function (done) {
    request(app)
      .get('/users/get')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// POST - Create a user
describe('POST /users/create', function () {
  it('should create a new user', function (done) {
    request(app)
      .post('/users/create')
      .send({
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        address: '123 ABC Street',
        gender: 'Male',
        userPower: 'Admin',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// GET - Get a user by ID
describe('GET /users/get/:id', function () {
  it('should get a user by ID', function (done) {
    request(app)
      .get('/users/get/1')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// PUT - Update a user
describe('PUT /users/update/:id', function () {
  it('should update a user', function (done) {
    request(app)
      .put('/users/update/1')
      .send({
        name: 'Updated Name',
        email: 'updatedemail@example.com',
        address: '456 XYZ Street',
        gender: 'Female',
        userPower: 'User',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// DELETE - Delete a user
describe('DELETE /users/delete/:id', function () {
  it('should delete a user', function (done) {
    request(app)
      .delete('/users/delete/1')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});


////////// Images ///////////


// GET - Get all images
describe('GET /images/get', function () {
  it('should respond with JSON', function (done) {
    request(app)
      .get('/images/get')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// POST - Create an image
describe('POST /images/create', function () {
  it('should create a new image', function (done) {
    request(app)
      .post('/images/create')
      .send({
        id: 1,
        guriId: '60c9e7e3a3e7a63da0906d4f',
        guriImages: ['Buffer data'],
        bathroomImages: ['image1.jpg', 'image2.jpg'],
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});


// GET - Get an Image by ID
exports.getImageById = async (req, res) => {
    try {
      const image = await Image.findOne({ _id: req.params.id });
      if (!image) {
        return res.send('Image not found');
      }
      res.json(image);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error getting image');
    }
  };
  
  
  

// PUT - Update an image
describe('PUT /images/update/:id', function () {
  it('should update an image', function (done) {
    request(app)
      .put('/images/update/1')
      .send({
        guriId: '60c9e7e3a3e7a63da0906d4f',
        guriImages: ['Updated Buffer data'],
        bathroomImages: ['updated_image1.jpg', 'updated_image2.jpg'],
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// DELETE - Delete an image
describe('DELETE /images/delete/:id', function () {
  it('should delete an image', function (done) {
    request(app)
      .delete('/images/delete/1')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});


//////////  About Table  //////

// POST - Create a new About entry
describe('POST /about/create', function () {
  it('should create a new About entry', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .post('/about/create')
        .send({
          id: 1,
          faahfaahinYar: "Example faahfaahinYar",
          faahfaahin: "Example faahfaahin"
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// GET - Get all About entries
describe('GET /about/get', function () {
  it('should get all About entries', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .get('/about/get')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// GET - Get an About entry by ID
describe('GET /about/get/:id', function () {
  it('should get an About entry by ID', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .get('/about/get/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// PUT - Update an About entry
describe('PUT /about/update/:id', function () {
  it('should update an About entry', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .put('/about/update/1')
        .send({
          faahfaahinYar: "Updated faahfaahinYar",
          faahfaahin: "Updated faahfaahin"
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// DELETE - Delete an About entry
describe('DELETE /about/delete/:id', function () {
  it('should delete an About entry', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .delete('/about/delete/1')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});



///////// Contact Form Table ///////


// POST - Create a new contactForm entry
describe('POST /contactForm/create', function () {
  it('should create a new contactForm entry', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .post('/contactForm/create')
        .send({
          id:1,
          name: "John Doe",
          phone: "1234567890",
          message: "Hello, this is a test message"
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// GET - Get a contactForm entry by ID
describe('GET /contactForm/get/:id', function () {
  it('should get a contactForm entry by ID', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .get('/contactForm/get/1')
        .expect('Content-Type', /json/)
        .expect(500)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// PUT - Update a contactForm entry
describe('PUT /contactForm/update/:id', function () {
  it('should update a contactForm entry', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .put('/contactForm/update/1')
        .send({
          name: "Updated Name",
          phone: "9876543210",
          message: "Updated message"
        })
        .expect('Content-Type', /json/)
        .expect(500)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});

// DELETE - Delete a contactForm entry
describe('DELETE /contactForm/delete/:id', function () {
  it('should delete a contactForm entry', function () {
    return new Promise((resolve, reject) => {
      request(app)
        .delete('/contactForm/delete/1')
        .expect(500)
        .end(function (err, res) {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
    });
  });
});
