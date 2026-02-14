import express from 'express';
const app = express();
const PORT = 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const flights = [];

app.get(`/`, (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.get(`/confirmation`, (req, res) => {
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.post(`/submit-form`, (req, res) => {

    
    const booking = {
        destination: req.body.Destination,
        departureDate: req.body.DepartureDate,
        numberOfTravelers: req.body.NumberOfTravelers,
    };
    //add the booking to the flights array
    flights.push(booking);

    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});