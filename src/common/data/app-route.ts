export enum AppRoute {
  Main = "/",
  Catalog = "/catalog",
  Cart = "/cart",
  Product = '/product/:id',
}

export const AppLink = {
  ProductById: ((id: number): string => `/product/${id}`),
};