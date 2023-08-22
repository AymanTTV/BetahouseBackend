const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());
app.use(cors());

// Import routes

const guriyahaRoutes = require('./route/guriyahaRoutes');
const imagesRoutes = require('./route/imagesRoutes');
const serviceRoute= require('./route/service-route');
const ourClientRoute= require('./route/ourclient-route');
const xogtaShirkadaRoutes = require('./route/xogtaShirkadaRoutes');
const aboutRoutes = require('./route/aboutRoutes');
const userRoute=require('./route/userRoute');
const contactFormRoutes = require('./route/contactFormRoutes');
const loginRoute=require('./route/loginRoute');
const AuthenticateRoute = require('./route/AuthenticationMiddleware');



// Db Connection
const database = () => {
    const ConnectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(
            'mongodb+srv://aymanttv:admin@betahouse.q4at5aw.mongodb.net/?retryWrites=true&w=majority',
            ConnectionParams
        );
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error);
        console.log('Database connection failed');
    }
};

database();

// Use the routes

app.use('/guriyaha', guriyahaRoutes);
app.use('/images', imagesRoutes);
app.use('/service',serviceRoute);
app.use('/client',ourClientRoute);

app.use('/xogtaShirkada', xogtaShirkadaRoutes);
app.use('/about', aboutRoutes);
app.use('/users',userRoute);
app.use('/contactForm', contactFormRoutes);
app.use('/login',loginRoute);

// Custom route to display all available routes
app.get('/', (req, res) => {
    const routes = [
        { url: '/users', description: 'Users routes' },
        { url: '/guriyaha', description: 'Guriyaha routes' },
        { url: '/images', description: 'Images routes' },
        { url: '/xogtaShirkada', description: 'XogtaShirkada routes' },
        { url: '/about', description: 'About routes' },
        { url: '/contactForm', description: 'ContactForm routes' },
        { url: '/client', description: 'client routes' },
        { url: '/service', description: 'service routes' },
        { url: '/login', description: 'login routes' },
    ];

    const routeList = routes.map(route => `<li><a href="${route.url}">${route.description}</a></li>`);
    const htmlResponse = `<h1>Available Routes:</h1><ul>${routeList.join('')}</ul>`;
    res.send(htmlResponse);
});

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

