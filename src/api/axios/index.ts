import axios from "axios";
import { Product } from "@/services/products/types";
import { getRandomNumber } from "@/utils/getRandomNumber";
import { currencyFormatter } from "@/utils/currencyFormatter";
import { getProductStyle } from "@/utils/getProductStyle";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const setMockedValues = (item: Product) => {
  const { name, price } = item;

  return {
    ...item,
    abv: getRandomNumber(3, 9),
    price:  parseFloat(String(price || 0).match(/[\d\.]+/) as unknown as string),
    formattedPrice: isNaN(+price) ? price : currencyFormatter(price),
    style: getProductStyle(name),
    description:
      "A MODERN TAKE ON A TRADITIONAL BEER. THIS IRISH STOUT BRINGS FORWARD NOTES OF DARK CHOCOLATE WITH HINTS OF COFFEE AND DARK FRUIT. TAKE A JOURNEY INTO THE DARK SIDE OF MALT.",
  };
};

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Check if the response is from the 'beers/ale' endpoint
    if (response.config.url === "/beers/ale") {
      // Modify the data to include mocked fields
      response.data = response.data.map((item: Product) => {
        return setMockedValues(item);
      });
    }

    // Check if the response is from the 'beers/ale/:id' endpoint
    const productUrlPattern = /\/beers\/ale\/\d+/;
    if (response.config.url && productUrlPattern.test(response.config.url)) {
      // Modify the data to include mocked fields
      response.data = setMockedValues(response.data);
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
