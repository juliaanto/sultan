export enum AppRoute {
  Main = "/",
  Catalog = "/catalog",
  Cart = "/cart",
  Product = "/product/:id",
  Admin = "/admin"
}

export const AppLink = {
  ProductById: ((id: number): string => `/product/${id}`),
};