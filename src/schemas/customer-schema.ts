import joi from "joi";

export const customerSchema = joi.object({
    name: joi.string().required().trim(),
    customer_document: joi.string().length(11).pattern(/^\d+$/).required()
})
