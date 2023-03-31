import { IProduct } from "../../types/product";

export enum SortBy {
  TitleAsc = "titleAsc",
  TitleDesc = "titleDesc",
  PriceAsc = "priceAsc",
  PriceDesc = "priceDesc",
}

export const sortProducts = (sortType: SortBy, products: IProduct[]) => {
  switch (sortType) {
    case SortBy.TitleDesc:
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
    case SortBy.PriceAsc:
      return products.sort((a, b) => a.price - b.price);
    case SortBy.PriceDesc:
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