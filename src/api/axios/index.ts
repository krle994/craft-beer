import axios from "axios";
import { Product } from "../../services/products/types";
import { checkIfImageExists } from "../../utils/imageExists";
import bottle from "../../assets/bottle.webp";
import { getRandomNumber } from "../../utils/getRandomNumber";
import { currencyFormatter } from "../../utils/currencyFormatter";
import { getProductStyle } from "../../utils/getProductStyle";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

const setMockedValues = (item: Product) => {
  const { name, image, price } = item;

  return {
    ...item,
    abv: getRandomNumber(3, 9),
    image: checkIfImageExists(image) ? image : bottle,
    price: isNaN(+price) ? price : currencyFormatter(price),
    style: getProductStyle(name),
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non aliquet enim, sed hendrerit justo. Aenean venenatis eget nisi id posuere. Curabitur id metus in nisl efficitur sodales. Morbi non magna id lectus tempus feugiat. Donec interdum molestie pulvinar. Morbi venenatis tellus vel ipsum semper pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat nisl quis velit euismod bibendum. Sed sit amet ex sed mi auctor viverra. Morbi vestibulum viverra quam nec pulvinar. Vivamus fermentum arcu vel mi condimentum, sit amet viverra turpis condimentum. Ut vitae turpis a augue mattis tincidunt facilisis in tortor. Vestibulum urna libero, lobortis sed nisi sed, sodales sagittis quam. Vestibulum tempus ex vel erat pulvinar euismod.",
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
