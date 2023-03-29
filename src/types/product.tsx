import { SizeType } from "../common/data/size-type";

export interface IProduct {
  barcode: number;
  title: string;
  price: number;
  brand: string;
  producer: string;
  imageUrl: string;
  productType: string[],
  sizeType: SizeType,
  size: string;
  description: string;
}