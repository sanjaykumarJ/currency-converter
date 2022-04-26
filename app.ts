import express, { Request, Response, NextFunction } from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});

function convertCurrency(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { body } = request;

  
}

app.use("/convertCurrency", convertCurrency);
