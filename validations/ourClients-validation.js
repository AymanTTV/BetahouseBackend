const joi=require('joi');
// valiadtion
function clientvalidation(clientOBj) {
    let clientval = joi.object({
        ClientName: joi.string().required(),
        Logo: joi.string().required(),
    });
    return clientval.validate(clientOBj);
}
  
module.exports = {
    
    clientvalidation,
};