import joi from "joi";
import { RegisterPhoneData } from "../protocols/protocols";

const validDescriptions = ['personal', 'work', 'home', 'other'];

export const postPhoneSchema = joi.object<RegisterPhoneData>({
    name: joi.string().required().trim(),
    customer_document: joi.string().length(11).pattern(/^\d+$/).required(),
    carrier_id: joi.number().integer().positive().required(),
    number: joi.alternatives().try(joi.string().pattern(/^\d+$/).length(10).required(), joi.string().pattern(/^\d+$/).length(11).required()),
    description: joi.string().valid(...validDescriptions).required()
})
  