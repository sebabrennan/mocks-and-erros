import Controllers from "./class.controller.js";
import ProductService from "../services/product.services.js";
import { createResponse } from "../utils/utils.js";
const prodService = new ProductService();

export default class ProductController extends Controllers {
    constructor(){
        super(prodService)
    }
    createProductsMockController = async (req, res, next) => {
        try {
          const {cant} = req.query;
          const data = await prodService.createProductsMockService(cant);
          createResponse(res, 200, data);
        } catch (error) {
          next(error)
        }
      }
};