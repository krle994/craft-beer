import { STYLES } from "./constants";

export const getProductStyle = (productName: string) => {
  for (let i = 0; i < STYLES.length; i++) {
    if (productName.toLowerCase().includes(STYLES[i].toLowerCase())) {
      return STYLES[i];
    }
  }
  return null;
};
