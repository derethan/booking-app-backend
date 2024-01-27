/********************************************
 *  Route Handler
 * ******************************************/

const express = require('express');
const router = express.Router();

//Import the booking controller
const bookingController = require('../controllers/bookingController');


   /********************************************
     *  GET Routes
     * ******************************************/

router.get('/availability', bookingController.getAvailability);

// router.get('/appointments', bookingController.getAppointments);

// router.get('/confirmations/:bookingId', bookingController.getBookingConfirmation);


   /********************************************
     *  POST Routes
     * ******************************************/

router.post('/create', bookingController.createBooking);



module.exports = router;