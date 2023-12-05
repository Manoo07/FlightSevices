const {Flights} = require('../models/index');
const {Op} = require('sequelize');
class FligtRepository{
    #createFilter(data){
        let filter ={};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice && data.maxPrice){
            Object.assign(filter,{price:{[Op.between]: [data.minPrice,data.maxPrice]}});
        }
        if(data.minPrice && !data.maxPrice){
            Object.assign(filter,{price:{[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice && !data.minPrice){
            Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
        }
        console.log(filter);
        return filter;
    }
    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log('Error in flight repository :',error);
        }
    }
    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log('Error in flight repository :',error);
        }
    }
    async getAllFlights(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where: filterObject
            });
            return flights;

        } catch (error) {
            console.log('Error in flight repository :',error);
        }
    }

}

module.exports = FligtRepository;

/* 
    arrivalAirportId:2,
    departureAirportId: 3,
    price : {[Op.gte]:4000}
*/