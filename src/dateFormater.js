/***************************************
 *  Function to format a date to 24 hour 
 *  time string: 00:00:00
 * ************************************/        
        
const formatTime = (date, time) => {
        //Format the date object to a MySQL datetime string
        let dateObject = new Date(date);
        let newdate = dateObject.toISOString().split('T')[0];

        // Convert the time to a 24 hour time string
        let timeParts = time.split(' ');
        let hourMinuteParts = timeParts[0].split(':');
        let hours = parseInt(hourMinuteParts[0]);
        let minutes = hourMinuteParts[1];

        if (timeParts[1] === 'PM' && hours < 12) {
        hours += 12;
        } else if (timeParts[1] === 'AM' && hours === 12) {
        hours = 0;
        }

        let newTime = `${hours.toString().padStart(2, '0')}:${minutes}:00`;

        return { newdate, newTime };
}

module.exports = formatTime;