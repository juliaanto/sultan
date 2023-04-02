export interface ICheckboxFilter {
  [key: string]: {
    title: string,
    id: string,
    isChecked: boolean,
  }
}

export enum PriceFilter {
  PriceMin = "priceMin",
  PriceMax = "priceMax",
}

export interface IPriceFilter {
  [PriceFilter.PriceMin]: string;
  [PriceFilter.PriceMax]: string;
}

export enum FilterBy {
  Price = "price",
  ProductType = "productType",
  Producer = "producer",
}

export interface IFilters {
  [FilterBy.Price]: IPriceFilter,
  [FilterBy.ProductType]: ICheckboxFilter,
  [FilterBy.Producer]: ICheckboxFilter,
}