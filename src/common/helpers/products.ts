import { IProduct } from "../../types/product";

export const getFieldValues = (products: IProduct[], field: string) => {
  let values: (string | number)[] = [];
  
  for(const product of products) {
    const fieldValue = product[field as keyof IProduct];
    
    if (Array.isArray(fieldValue)) {
      values = values.concat(fieldValue);
    } else {
      values.push(fieldValue);
    }
  }

  const uniqueValues = Array.from(new Set(values));

  return uniqueValues;
}