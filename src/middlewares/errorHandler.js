import httpResponse from "../utils/http.response.js"

export const errorHandler = (error, req, res, next) => {
    console.log( `error ${error}`) 
    //const status = error.status || 500
    return httpResponse.ServerError(res, error.message)
    //res.status(status).send(error.message)
}