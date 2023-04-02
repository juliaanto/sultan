export enum AppRoute {
  Main = "/sultan-online-store",
  Catalog = "/catalog",
  Cart = "/cart",
  Product = '/product/:id',
}

export const AppLink = {
  ProductById: ((id: number): string => `/product/${id}`),
};