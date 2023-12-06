
class CrudServices{
    constructor(repository){
        this.repository = repository;
    }
    async create(data){
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (error) {
            console.log("Something went wrong in CrudSevices : ",error);
        }
    }
    async get(id){
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in CrudSevices : ",error);
        }
    }
    async getAll(){
        try {
            const response = await this.repository.getAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in CrudSevices : ",error);
        }
    }
    async destroy(id){
        try {
            const response = await this.response.destroy(id);
            return response;
        } catch (error) {
            console.log("Something went wrong in CrudSevices : ",error);
        }
    }
    async update(data,id){
        try {
            const response = await this.repository.update(data,id);
            return response;
        } catch (error) {
            console.log("Something went wrong in CrudSevices : ",error);
        }
    }
}
module.exports = CrudServices;