export interface ICheckboxFilter {
  [key: string]: {
    title: string,
    id: string,
    isChecked: boolean,
  }
}

export enum PriceFilter {
  priceMin = "priceMin",
  priceMax = "priceMax",
}

export interface IPriceFilter {
  [PriceFilter.priceMin]: number;
  [PriceFilter.priceMax]: number;
}

export enum FilterBy {
  price = "price",
  productType = "productType",
  producer = "producer",
}

export interface IFilters {
  [FilterBy.price]: IPriceFilter,
  [FilterBy.productType]: ICheckboxFilter,
  [FilterBy.producer]: ICheckboxFilter,
}