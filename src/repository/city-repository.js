const {Op} = require('sequelize');
const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }){
        try{
            const city = await City.create(
            {
                name : name
            }
            );
            return city;
        }
        catch(err){
            console.log('Error in CreateCity :');
            throw {err};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id: cityId
                }
            })
            return true;
        }
        catch(err){
            console.log('Error in deleteCity :');
            throw {err};
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        }
        catch(err){
            console.log('Error in deleteCity :');
            throw {err};
        }
    }
    async getAll(filter){
        try{
            if(filter.name){
                const cities = await City.findAll({
                    where:{
                        name:{
                            [Op.startsWith]:filter.name
                        }
                    }
                })
                return cities;
            }
            const city = await City.findAll();
            return city;
        }
        catch(err){
            console.log('Error in deleteCity :');
            throw {err};
        }
    }

    async updateCity(cityId,data){
        try{
            const city = await City.update(data,{
                where :{
                    id:cityId
                }
            })
            return city;
        }
        catch(err){
            console.log('Error in deleteCity :');
            throw {err};
        }
    }
}

module.exports = CityRepository;