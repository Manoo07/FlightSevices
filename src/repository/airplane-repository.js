const { Airplane } = require('../models/index');

class AirplaneRespository {
    async getAirplane(id){
        try{
            // console.log("Here in AirplaneRepo");
            // console.log(id);
            const airplane = await Airplane.findByPk(id);
            return airplane;
        }
        catch(err){
            console.log("Error in Airplane Repository ",err);
        }
    }
}
module.exports = AirplaneRespository;