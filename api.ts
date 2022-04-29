import axios from "axios";
import { CURRENCY_CONVERTER_ENDPOINT } from "./constants";

export type CurrencyConversionResponse = {
  [key: string]: number;
};

export type ResponseWithDate = {
  [key: string]: { [key: string]: number };
};
export async function getConvertedCurrencyValue(
  amount: number,
  fromCurrency: string, // TODO: add all country currencies as type
  toCurrency: string,
  date: string
): Promise<CurrencyConversionResponse | ResponseWithDate | undefined> {
  fromCurrency = encodeURIComponent(fromCurrency);
  toCurrency = encodeURIComponent(toCurrency);
  var query = `${fromCurrency}_${toCurrency}`;

  var url = `${CURRENCY_CONVERTER_ENDPOINT}${query}&compact=ultra${
    date ? `&date=${date}` : ""
  }&apiKey=${process.env.CURRENCY_CONVERTER_API}`;

  const response = await axios.get(url).catch((error) => {
    throw error;
  });

  if (response) {
    const conversionRate = response.data[query];
    if (!date) {
      // precision of converted value to be tested!
      return { [query]: (Math.round(amount * conversionRate) * 100) / 100 };
    } else {
      const result = conversionRate[date];
      return {
        [query]: { [date]: (Math.round(amount * result) * 100) / 100 },
      };
    }
  } else {
    return undefined;
  }
}
