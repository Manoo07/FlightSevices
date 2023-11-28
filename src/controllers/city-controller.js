const { CityService } = require('../services/index');

const cityService = new CityService();

const create = async (req,res)=>{
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created city ',
            err:{}
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            data: {},
            success:false,
            message: 'Not able to create a city',
            error: err
        })
    }
}
const get = async (req,res)=>{
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city ',
            err:{}
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            data: {},
            success:false,
            message: 'Not able to fetch the city',
            error: err
        })
    }
}
const getAll = async (req,res)=>{
    try{
        const response = await cityService.getAll(req.query);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city ',
            err:{}
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            data: {},
            success:false,
            message: 'Not able to fetch the cities',
            error: err
        })
    }
}
const update = async (req,res)=>{
    try{
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated the city ',
            err:{}
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            data: {},
            success:false,
            message: 'Not able to fetch the city',
            error: err
        })
    }
}
const destroy = async (req,res)=>{
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted city ',
            err:{}
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            data: {},
            success:false,
            message: 'Not able to delete city',
            error: err
        })
    }
}

module.exports ={
    create,
    get,
    getAll,
    update,
    destroy
}


