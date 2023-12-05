const { fileURLToPath } = require('url');
const { FlightService } = require('../services/index');

const flightService = new FlightService();

const create = async (req,res) => {
    try{
        // console.log(req.body);
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            error: {},
            message: 'Successfully created a flight ',
        })
    }
    catch(err){
        console.log('Error in Controller layer : ');
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to create flight',
            error: err
        })
    }
}
const getAll = async (req,res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            error: {},
            message: 'Successfully fetched  flights ',
        })
    } catch (error) {
        console.log('Error in Controller layer : ');
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to fetch flights',
            error: err
        })
    }
}

module.exports ={
    create,
    getAll
}
// flightNumber,
// airplaneId,
// departureAirportId,
// arrivalAirportId,
// arrivalTime,
// departureTime,
// price,
// boardingGate,
// totalSeats