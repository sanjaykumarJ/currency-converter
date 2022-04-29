import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import { CurrencyConversionResponse, getConvertedCurrencyValue } from "./api";

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});

async function convertCurrency(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { body } = request;
  const { value, from, to } = body;
  try {
    if (!value && !from && !to) {
      throw new Error(`${value},${from},${to}. Params sent is invalid`);
    }
    const convertedResult: CurrencyConversionResponse | undefined =
      await getConvertedCurrencyValue(value, from, to);
    if (convertedResult) {
      response.status(200).send(convertedResult);
    } else {
      throw new Error("The data could not be processed");
    }
  } catch (error) {
    response.status(404).send(error);
  }
}

app.use("/convertCurrency", convertCurrency);
