const { FlightRepository, AirplaneRepository } = require('../repository/index');

class FlightService{
    constructor(){
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            // console.log(airplane);
            const flight = await this.flightRepository.createFlight({
                ...data,
                totalSeats: airplane.capacity
            })
            return flight;
        } catch (error) {
            console.log('Error in service layer: ',error);
        }
    }
    async getAllFlightData(data){
        try {
            const flight = await this.flightRepository.getAllFlights(data);
            return flight;
        } catch (error) {
            console.log('Error in service layer: ',error);
        }
    }
}

module.exports = FlightService;
