export interface ICheckboxFilter {
  [key: string]: {
    title: string,
    id: string,
    isChecked: boolean,
  }
}

export enum IPriceFilter {
  priceMin = "priceMin",
  priceMax = "priceMax",
}

export enum FilterBy {
  price = "price",
  productType = "productType",
  producer = "producer",
}

export interface IFilters {
  [FilterBy.price]: {
    [IPriceFilter.priceMin]: number;
    [IPriceFilter.priceMax]: number;
  },
  [FilterBy.productType]: ICheckboxFilter,
  [FilterBy.producer]: ICheckboxFilter,
}