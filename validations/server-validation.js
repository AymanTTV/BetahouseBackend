const joi = require('joi');
// va;iadtion
function servicevalidation(servicetOBj) {
    let serviceval = joi.object({
        Title: joi.string().required(),
        Icon: joi.string().required(),
        Description: joi.string().required(),
    });
    return serviceval.validate(servicetOBj);
}
  
module.exports = {
    servicevalidation,
};