//console.log("Script loaded successfully.");
document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('booking-form');
//console.log("Form found?", form);

form.addEventListener('submit', (event) => {
    //event.preventDefault();
   //console.log("SUBMISSION BLOCKED")
   event.preventDefault();
    clearErrors();
    let isValid = true;

    let destination = document.getElementById('Destination').value.trim();

    let departureDate = document.getElementById('departure-date').value.trim();

    let numberOfTravelers = document.getElementById('number-of-travelers').value.trim();

    if (destination === '') {
        document.getElementById('destination-error').style.display = 'block';
        isValid = false;
    }

    if (departureDate === '') {
        document.getElementById('departure-date-error').style.display = 'block';
        isValid = false;
    }

    if (numberOfTravelers === '' || isNaN(numberOfTravelers) || parseInt(numberOfTravelers) <= 0) {
        document.getElementById('number-of-travelers-error').style.display = 'block';
        isValid = false;
    }
    if (isValid) {
        // If all fields are valid, submit the form
        form.submit();
    }
});



function clearErrors() {
    document.getElementById('destination-error').style.display = 'none';
    document.getElementById('departure-date-error').style.display = 'none';
    document.getElementById('number-of-travelers-error').style.display = 'none';
}

});


