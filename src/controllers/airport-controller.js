const { AirportService } = require('../services/index');
const airportService = new AirportService();

const create = async (req,res)=>{
    try{
        // const data = req.body;
       const airport = await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
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
            message: 'Not able to create a Airport',
            error: err
        })
    }
}

const destroy = async (req,res)=>{
    try{
        const response = await airportService.destroy(req.params.id);
        return res.status(200).json({
            response: response,
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
            message: 'Not able to delete a Airport',
            error: err
        })
    }
}

const get = async (req,res)=>{
    try{
        const city = await airportService.get(req.params.id);
        return res.status(200).json({
            response: city,
            success: true,
            message: 'Successfully fetched airport ',
            err:{}
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            data: {},
            success:false,
            message: 'Not able to fetch a Airport',
            error: err
    })
}

}

const getAll = async (req,res)=>{
    try{
        const cities = await airportService.getAll(req.body);
        return res.status(200).json({
            response: cities,
            success: true,
            message: 'Successfully fetched all cities ',
            err:{}
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            data: {},
            success:false,
            message: 'Not able to fetch all Airports',
            error: err
    })
}
}

const update = async (req,res)=>{
   try{
    const response = await airportService.update(req.body,req.params.id);
    return res.status(200).json({
        response: response,
        success: true,
        message: 'Successfully updated city ',
        err:{}
    })
   }
   catch(err){
        console.log(err);
            return res.status(500).json({
                data: {},
                success:false,
                message: 'Not able to update a Airport',
                error: err
        })
   }
}



module.exports ={
    create,
    destroy,
    get,
    getAll,
    update
}