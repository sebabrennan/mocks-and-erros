import Controllers from "./class.controller.js";
import ProductService from "../services/product.services.js";
import httpResponse from "../utils/http.response.js";
const prodService = new ProductService();

export default class ProductController extends Controllers {
    constructor(){
        super(prodService)
    }
    createProductsMockController = async (req, res, next) => {
        try {
          const {cant} = req.query;
          const data = await prodService.createProductsMockService(cant);
          httpResponse.Ok(res, data)
        } catch (error) {
          next(error)
        }
      }
};