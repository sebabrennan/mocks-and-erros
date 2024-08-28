import httpResponse from "../utils/http.response.js"

export default class Controllers {
    constructor(service) {
        this.service = service;
    }

    getAll = async(req, res, next) =>{
        try {
          const data = await this.service.getAll();
          httpResponse.Ok(res, data);
        } catch (error) {
          next(error);
        }
      };
    
      getById = async(req, res, next) =>{
        try {
          const { id } = req.params;
          const data = await this.service.getById(id);
          !data ? httpResponse.NotFound(res, data) : httpResponse.Ok(res, data);
        } catch (error) {
          next(error);
        }
      };
    
      create = async(req, res, next) => {
        try {
          const data = await this.service.create(req.body);
          httpResponse.Ok(res, data);
        } catch (error) {
          next(error);
        }
      };
    
      update = async(req, res, next) => {
        try {
          const { id } = req.params;
          const data = await this.service.update(id, req.body);
          !data ? httpResponse.NotFound(res, data) : httpResponse.Ok(res, data);
        } catch (error) {
          next(error);
        }
      };
    
      delete = async(req, res, next) => {
        try {
          const { id } = req.params;
          const data = await this.service.delete(id);
          !data ? httpResponse.NotFound(res, data) : httpResponse.Ok(res, data);
        } catch (error) {
          next(error);
        }
      };
}