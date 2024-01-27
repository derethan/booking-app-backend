
/***************************************
 *  MySQL Database Connection
 * ************************************/
const db = require('../db/dbConnect'); // Import dbconnect.js


/***************************************
 *  Import Statements
 * ************************************/
const formatTime = require('../dateformater');




/***************************************
 *  Retrieve available booking times
 *  GET Route - booking/availability
 *  Example: monday-friday, 9am-5pm, Closed on weekends
 * ************************************/

async function getAvailability (req, res) {
  const sql = 'SELECT day_of_week, start_time, end_time FROM working_hours';
  const params = [];

    try {

      result = await db.query(sql, params);

      // Format the results to be sent as JSON
      let availability = {};
      result.forEach((row) => {
        availability[row.day_of_week.toLowerCase()] = {
          startTime: row.start_time,
          endTime: row.end_time
        };
      });


      res.status(201).json({ availability: availability });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error Occured' });
    }
  }

  async function getAppointments (req, res) {
    try {
    // Your logic to retrieve availability goes here
    // Example: Fetch available time slots from the database
      res.status(201).json({ availability: ['10:00 AM', '11:00 AM', '2:00 PM'] });
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error Occured' });
    }
  }


    /***************************************
     *  Retrieve available booking times
     *  GET Route - booking/availability
     *  Example: monday-friday, 9am-5pm, Closed on weekends
    * ************************************/
    async function createBooking (req, res) {

        // Temp Items for testing - delete when done
        console.log(req.body);
        let bookingID = Math.floor(Math.random() * 1000000);

        // destructure the request body
        const { firstName, lastName, email, phone, date, time } = req.body;

        // Format the date and time
        const { newdate, newTime } = formatTime(date, time);
        
        const sql = `INSERT INTO booking (
            booking_id, 
            booking_date, 
            booking_time, 
            booking_name,
            booking_email,
            booking_phone,
            booking_status
            ) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`;
        const params = [bookingID, newdate, newTime, firstName + ' ' + lastName, email, phone, 'PENDING'];

        try {
            const result = await db.query(sql, params);
            console.log('Booking created successfully.');
            res.status(201).json({ DatabaseID: result.insertId, BookingID: bookingID });

        } catch (error) {

            res.status(500).json({ message: 'Error Occured' });
            console.error(error);
        }
    }


  module.exports = {
    getAvailability,
    createBooking
  };