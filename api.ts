import axios from "axios";
import { CURRENCY_CONVERTER_ENDPOINT } from "./constants";

export type CurrencyConversionResponse = {
  [key: string]: number;
};
export async function getConvertedCurrencyValue(
  amount: number,
  fromCurrency: string, // TODO: add all country currencies as type
  toCurrency: string
): Promise<CurrencyConversionResponse | undefined> {
  fromCurrency = encodeURIComponent(fromCurrency);
  toCurrency = encodeURIComponent(toCurrency);
  var query = `${fromCurrency}_${toCurrency}`;

  var url = `${CURRENCY_CONVERTER_ENDPOINT}${query}&compact=ultra&apiKey=${process.env.CURRENCY_CONVERTER_API}`;

  const response = await axios.get(url).catch((error) => {
    throw error;
  });

  if (response) {
    const conversionRate = response.data[query];
    // precision of converted value to be tested!
    return { [query]: (Math.round(amount * conversionRate) * 100) / 100 };
  } else {
    return undefined;
  }
}
