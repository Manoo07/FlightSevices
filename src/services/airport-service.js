const airport = require('../models/airport');
const { AirportRepository } = require('../repository/index');

class AirportService{
    constructor(){
        this.airportRepository = new AirportRepository();
    }
    async createAirport(data){
        try{
            const airport = await this.airportRepository.createAirport(data);
            return airport;
        }
        catch(err){
            console.log('Error in Airport service layer : ',err);
        }
    }
    async getAirport(id){
        try{
            const airport = await this.airportRepository.getAirport(id)
            return airport;
        }
        catch(err){
            console.log('Error in Airport service layer : ',err);
        }
    }
    async getAllAirports(filter){
        try{
            const airports = await this.airportRepository.getAllAirports(filter);
            return airports;
        }
        catch(err){
            console.log('Error in Airport service layer : ',err);
        }
    }
    async deleteAirport(id){
        try{
            const response = await this.airportRepository.deleteAirport(id);
            return response;
        }
        catch(err){
            console.log('Error in Airport service layer : ',err);
        }
    }
    async updateAirport(id,data){
        try{
            const city = await this.airportRepository.updateAirport(id,data);
            return city;
        }
        catch(err){
            console.log('Error in Airport service layer : ',err);
        }
    }
}
module.exports = AirportService;