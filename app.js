/***************************************
 *  Booking system backend
 *  Author: Andrew Patterson
 * 
 *  Path: app.js
 *  Purpose: Main entry point for the application
 * 
 * ************************************/

//Import express and create the app
const express = require('express');
const app = express(); 

//Import cors and tell the app to use it
const cors = require('cors');
app.use(cors());

//Define the port
const PORT = process.env.PORT || 3000;

//Create the booking table
const createBookingTable = require('./src/db/createBookingTable');
createBookingTable();


//Import the booking routes
const bookingRoutes = require('./src/routes/bookingRoutes');

//define middleware and routes
app.use(express.json());
app.use ('/booking', bookingRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);

    //Link to the default URL
    console.log(`http://localhost:${PORT}`);
});
