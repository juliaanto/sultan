export interface IProduct {
  barcode: number;
  title: string;
  price: number;
  brand: string;
  producer: string;
  imageUrl: string;
  productType: string[],
  sizeType: string,
  size: string;
  description: string;
}