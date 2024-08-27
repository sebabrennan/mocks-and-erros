import Services from "./class.services.js";
import ProductDaoMongo from "../daos/product.dao.js";

const prodDao = new ProductDaoMongo();

export default class ProductService extends Services {
    constructor(){
        super(prodDao);
    }
};