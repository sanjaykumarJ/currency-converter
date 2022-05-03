import { getConvertedCurrencyValue } from "./api";

describe("api", () => {
  test("getConvertedCurrencyValue should return valid value", async () => {
    const result = await getConvertedCurrencyValue(1, "USD", "INR", "");
    expect(result).toEqual({
      USD_INR: 75,
    });
  });
});
