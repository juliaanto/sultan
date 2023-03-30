import { IProduct } from "../../types/product";

export enum FilterBy {
  price = "price",
  productType = "productType",
  producer = "producer",
}

export const filterProducts = (filterBy: FilterBy, products: IProduct[], filterValue: string[]) => {
  if (filterBy === FilterBy.productType) {
    return products.filter((product) => {
      const productValue = product.productType;
      const intersection = productValue.filter((value) => filterValue.includes(value));
      return intersection.length > 0;
    });
  }
}
