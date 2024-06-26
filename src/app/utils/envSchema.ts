import * as Joi from 'joi'
const port = 6000
export const envSchema: Joi.ObjectSchema = Joi.object({
    POSTGRES_DB: Joi.string().required(),
    POSTGRES_HOST: Joi.string().required(),
    POSTGRES_USER: Joi.string().required(),
    POSTGRES_PASSWORD: Joi.string().required(),
    POSTGRES_POSRT: Joi.number().required(),
    PORT: Joi.number().default(port),
});