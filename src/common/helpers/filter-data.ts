import { IFilterData } from "../../types/filter-data";
import { IProduct } from "../../types/product";

export const getFilterData = (products: IProduct[], field: string) => {
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

  const result: IFilterData = {};

  uniqueValues.map((value, index) => {
    return result[field + index] = {
      title: value.toString(),
      id: field + index,
      isChecked: false,
    };
  })

  return result;
}

export const getCheckedValues = (filterData: IFilterData) => {
  const checkedValues: string[] = [];

  Object.values(filterData).forEach(({title, isChecked}) => {
    if (isChecked === true) {
      checkedValues.push(title);
    }
  });

  if (checkedValues.length === 0) {
    Object.values(filterData).forEach(({title}) => {
      checkedValues.push(title);
    });
  }
  
  return checkedValues;
}