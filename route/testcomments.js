/////// xogtaShirkada Table /////////////



// describe('XogtaShirkada API', () => {
//   let createdXogtaShirkadaId;

//   // Test POST /xogtaShirkada/create
//   it('should create a new XogtaShirkada entry', async () => {
//     const response = await request(app)
//       .post('/xogtaShirkada/create')
//       .send({
//         id: 1,
//         location: 'Test Location',
//         logo: [Buffer.from('Test Logo')],
//         email: 'test@example.com',
//         complainEmail: 'complain@example.com',
//         complainPhone: '1234567890',
//         facebook: 'test-facebook',
//         tiktok: 'test-tiktok',
//         twitter: 'test-twitter',
//         instagram: 'test-instagram'
//       });

//     expect(response.statusCode).toBe(201);
//     expect(response.body).toHaveProperty('_id');
//     createdXogtaShirkadaId = response.body._id;
//   });

//   // Test GET /xogtaShirkada/get
//   it('should get all XogtaShirkada entries', async () => {
//     const response = await request(app).get('/xogtaShirkada/get');

//     expect(response.statusCode).toBe(200);
//     expect(response.body).toBeInstanceOf(Array);
//     expect(response.body.length).toBeGreaterThan(0);
//   });

//   // Test GET /xogtaShirkada/get/:id
//   it('should get a single XogtaShirkada entry by ID', async () => {
//     const response = await request(app).get(`/xogtaShirkada/get/${createdXogtaShirkadaId}`);

//     expect(response.statusCode).toBe(200);
//     expect(response.body).toHaveProperty('_id', createdXogtaShirkadaId);
//     expect(response.body).toHaveProperty('location', 'Test Location');
//   });

//   // Test GET /xogtaShirkada/get/:id - should return 404 if XogtaShirkada entry not found
//   it('should return 404 if XogtaShirkada entry not found', async () => {
//     const response = await request(app).get('/xogtaShirkada/get/nonexistent_id');

//     expect(response.statusCode).toBe(404);
//     expect(response.text).toBe('xogtaShirkada not found');
//   });

//   // Test PUT /xogtaShirkada/update/:id
//   it('should update an existing XogtaShirkada entry', async () => {
//     const response = await request(app)
//       .put(`/xogtaShirkada/update/${createdXogtaShirkadaId}`)
//       .send({
//         location: 'Updated Location'
//       });

//     expect(response.statusCode).toBe(200);
//     expect(response.body).toHaveProperty('_id', createdXogtaShirkadaId);
//     expect(response.body).toHaveProperty('location', 'Updated Location');
//   });

//   // Test PUT /xogtaShirkada/update/:id - should return 404 if XogtaShirkada entry not found
//   it('should return 404 if XogtaShirkada entry not found', async () => {
//     const response = await request(app).put('/xogtaShirkada/update/nonexistent_id');

//     expect(response.statusCode).toBe(404);
//     expect(response.text).toBe('xogtaShirkada not found');
//   });

//   // Test DELETE /xogtaShirkada/delete/:id
//   it('should delete an existing XogtaShirkada entry', async () => {
//     const response = await request(app).delete(`/xogtaShirkada/delete/${createdXogtaShirkadaId}`);

//     expect(response.statusCode).toBe(200);
//     expect(response.text).toBe('xogtaShirkada deleted successfully');
//   });

//   // Test DELETE /xogtaShirkada/delete/:id - should return 404 if XogtaShirkada entry not found
//   it('should return 404 if XogtaShirkada entry not found', async () => {
//     const response = await request(app).delete('/xogtaShirkada/delete/nonexistent_id');

//     expect(response.statusCode).toBe(404);
//     expect(response.text).toBe('xogtaShirkada not found');
//   });
// });




////////// Guriyaha Table //////


// describe('Guriyaha API', () => {
//   let createdGuriyahaId;

//   // Test the POST /guriyaha/create route
//   describe('POST /guriyaha/create', () => {
//     it('should create a new Guriyaha entry', async () => {
//       const response = await request(app)
//         .post('/guriyaha/create')
//         .send({
//           id: 1,
//           type: 'Residential',
//           area: 'Mogadishu',
//           bedrooms: 3,
//           bathrooms: 2,
//           price: 200000,
//         });

//       expect(response.statusCode).toBe(201);
//       expect(response.body).toHaveProperty('_id');
//       createdGuriyahaId = response.body._id;
//     });
//   });

//   // Test the GET /guriyaha/get/:id route
//   describe('GET /guriyaha/get/:id', () => {
//     it('should get a single Guriyaha entry by ID', async () => {
//       const response = await request(app).get(`/guriyaha/get/${createdGuriyahaId}`);

//       expect(response.statusCode).toBe(200);
//       expect(response.body).toHaveProperty('_id', createdGuriyahaId);
//       expect(response.body).toHaveProperty('type', 'Residential');
//     });

//     it('should return 404 if Guriyaha entry not found', async () => {
//       const response = await request(app).get('/guriyaha/get/nonexistent_id');

//       expect(response.statusCode).toBe(404);
//       expect(response.text).toBe('Guriyaha entry not found');
//     });
//   });

//   // Test the PUT /guriyaha/update/:id route
//   describe('PUT /guriyaha/update/:id', () => {
//     it('should update an existing Guriyaha entry', async () => {
//       const response = await request(app)
//         .put(`/guriyaha/update/${createdGuriyahaId}`)
//         .send({
//           type: 'Commercial',
//           area: 'Hargeisa',
//           bedrooms: 0,
//           bathrooms: 1,
//           price: 500000,
//         });

//       expect(response.statusCode).toBe(200);
//       expect(response.body).toHaveProperty('_id', createdGuriyahaId);
//       expect(response.body).toHaveProperty('type', 'Commercial');
//     });

//     it('should return 404 if Guriyaha entry not found', async () => {
//       const response = await request(app)
//         .put('/guriyaha/update/nonexistent_id')
//         .send({
//           type: 'Commercial',
//           area: 'Hargeisa',
//           bedrooms: 0,
//           bathrooms: 1,
//           price: 500000,
//         });

//       expect(response.statusCode).toBe(404);
//       expect(response.text).toBe('Guriyaha not found');
//     });
//   });

//   // Test the DELETE /guriyaha/delete/:id route
//   describe('DELETE /guriyaha/delete/:id', () => {
//     it('should delete an existing Guriyaha entry', async () => {
//       const response = await request(app).delete(`/guriyaha/delete/${createdGuriyahaId}`);

//       expect(response.statusCode).toBe(200);
//       expect(response.body.message).toBe('Guriyaha deleted successfully');
//     });

//     it('should return 404 if Guriyaha entry not found', async () => {
//       const response = await request(app).delete('/guriyaha/delete/nonexistent_id');

//       expect(response.statusCode).toBe(404);
//       expect(response.text).toBe('Guriyaha not found');
//     });
//   });
// });