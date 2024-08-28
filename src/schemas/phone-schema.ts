import joi from "joi";

const validDescriptions = ['personal', 'professional', 'home', 'other', 'work'];

export const phoneSchema = joi.object({
    customer_document: joi.string().length(11).pattern(/^\d+$/).required(),
    carrier_id: joi.number().integer().positive().required(),
    number: joi.alternatives().try(joi.string().pattern(/^\d+$/).length(10).required(), joi.string().pattern(/^\d+$/).length(11).required()),
    description: joi.string().valid(...validDescriptions).required()
})
