const { Airport } = require('./../models/index');
const CrudRepository = require('./crud-repository');
// const {Op} = require('sequelize');

// class AirportRepository {
//     async createAirport({name,address,cityId}){
//         try {
//             const Airport = await Airport.create({
//                 name,
//                 address,
//                 cityId
//             })
//         } catch (error) {
//             console.log('Error in Airport Repository :',error);
//         }
//     }
//     async deleteAirport(airportId){
//         try {
//             const Airport = await Airport.destroy({
//                 where:{
//                     id:airportId
//                 }
//             })
//         } catch (error) {
//             console.log('Error in Airport Repository :',error);
//         }
//     }
//     async updateAirport(airportId,{name,address,cityId}){
//         try{
//             await Airport.update({name,address,cityId},{
//                 where:{
//                     id: airportId
//                 }
//             })
//             return true;
//         }
//         catch(err){
//             console.log('Error in Airport Repository :',err);
//         }
//     }

//     async getAirport(airportId){
//         try{
//             const airport = await Airport.findByPk(airportId);
//             return airport;
//         }
//         catch(err){
//             console.log('Error in Airport Repository :',err);
//         }
//     }
//     async getAllAirports(filter){
//         try{
//             if(filter.name){
//                 const airport = await Airport.findAll({
//                     where:{
//                         [Op.startsWith]:filter.name
//                     }
//                 })
//                 return airport;
//             }
//             const airport = await Airport.findAll();
//             return airport;
//         }
//         catch(err){
//             console.log('Error in Airport Repository :',err);
//         }
//     }
// }
class AirportRepository extends CrudRepository {
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepository;