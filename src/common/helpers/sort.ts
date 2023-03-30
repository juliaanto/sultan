import { IProduct } from "../../types/product";

export enum SortBy {
  titleAsc = "titleAsc",
  titleDesc = "titleDesc",
  priceAsc = "priceAsc",
  priceDesc = "priceDesc",
}

export const sortProducts = (sortType: SortBy, products: IProduct[]) => {
  const productsCopy = [...products];
  
  switch (sortType) {
    case SortBy.titleDesc:
      return productsCopy.sort((a, b) => {
        const nameA = (a.brand + a.title).toUpperCase();
        const nameB = (b.brand + b.title).toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
      
        return 0;
      });
    case SortBy.priceAsc:
      return productsCopy.sort((a, b) => a.price - b.price);
    case SortBy.priceDesc:
      return productsCopy.sort((a, b) => b.price - a.price);
    default:
      return productsCopy.sort((a, b) => {
        const nameA = (a.brand + a.title).toUpperCase();
        const nameB = (b.brand + b.title).toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      
        return 0;
      });
  }
}