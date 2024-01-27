/*************************************************************
 *          Create a booking table in the database          *
 * 
 * ************************************************************/

const db = require('./dbConnect');

//Create the booking table

async function createBookingTable() {

    const sql =  `CREATE TABLE IF NOT EXISTS booking (
        booking_id INT PRIMARY KEY AUTO_INCREMENT,
        booking_date DATE NOT NULL,
        booking_time TIME NOT NULL,
        booking_name VARCHAR(50) NOT NULL,
        booking_email VARCHAR(50) NOT NULL,
        booking_phone VARCHAR(50) NOT NULL,
        booking_message VARCHAR(255),
        booking_status VARCHAR(50) NOT NULL
    )`;
    
    try {
        const result = await db.query(sql);

        //if table exists
        if (result.warningCount == 0) {
            console.log("Booking table created successfully.");
        } else {
            console.log("Booking table Detected.");
        }

        
    } catch (error) {
        console.log(error);
    }
}



module.exports = createBookingTable;