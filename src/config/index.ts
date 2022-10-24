import dotenv from 'dotenv';

dotenv.config();

export const config = {
  exampleVariable: process.env.EXAMPLE_VARIABLE,
};
