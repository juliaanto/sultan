import { FilterBy, ICheckboxFilter, IFilters, IPriceFilter } from "../../types/filters";

import { IProduct } from "../../types/product";
import { getCheckedValues } from "./filter-data";

const filterByProductType = (products: IProduct[], filterField: ICheckboxFilter) => {
  const filterValue = getCheckedValues(filterField);
  
  return products.filter((product) => {
    const productValue = product[FilterBy.ProductType];
    const intersection = productValue.filter((value) => filterValue.includes(value));
    return intersection.length > 0;
  });
}

const filterByProducer = (products: IProduct[], filterField: ICheckboxFilter) => {
  const filterValue = getCheckedValues(filterField);

  return products.filter((product) => {
    const productValue = product[FilterBy.Producer];
    return filterValue.includes(productValue);
  });
}

export const getFilterItemsCount = (products: IProduct[], value: string, filterField: FilterBy) => {
  switch (filterField) {
    case (FilterBy.Producer):
      return products.filter((product) => product.producer === value).length;
    case (FilterBy.ProductType):
      return products.filter((product) => product.productType.includes(value)).length;
    default:
      return 0;
  }
}

const filterByPrice = (products: IProduct[], filterField: IPriceFilter) => {
  const { priceMin, priceMax } = filterField;
  
  return products.filter((product) => {
    const productValue = product[FilterBy.Price];

    if (Number(priceMax) > 0) {
      return productValue > Number(priceMin) && productValue < Number(priceMax);
    } else {
      return productValue > Number(priceMin);
    }
  });
}

export const filterProducts = (products: IProduct[], filter: IFilters) => {
  let filteredProducts = products;
  
  filteredProducts = filterByProductType(filteredProducts, filter[FilterBy.ProductType]);
  filteredProducts = filterByProducer(filteredProducts, filter[FilterBy.Producer]);
  filteredProducts = filterByPrice(filteredProducts, filter[FilterBy.Price]);
  
  return filteredProducts;
}
