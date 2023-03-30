import { IProduct } from "../../types/product";

export enum SortBy {
  titleAsc = "titleAsc",
  titleDesc = "titleDesc",
  priceAsc = "priceAsc",
  priceDesc = "priceDesc",
}

export const sortProducts = (sortType: SortBy, products: IProduct[]) => {
  switch (sortType) {
    case SortBy.titleDesc:
      return products.sort((a, b) => {
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
      return products.sort((a, b) => a.price - b.price);
    case SortBy.priceDesc:
      return products.sort((a, b) => b.price - a.price);
    default:
      return products.sort((a, b) => {
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