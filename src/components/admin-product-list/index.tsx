import { Block, TableHead, TableHeader } from "./admin-product-list.styled";

import AdminProductCard from "../admin-product-card";
import { IProduct } from "../../types/product";
import Message from "../message";

function AdminProductList() {
  const adminProducts = localStorage.getItem("products");
  const products: IProduct[] = adminProducts ? JSON.parse(adminProducts) : undefined;
  
  return (
    <>
    {products ?
      <Block>
        <TableHead>
          <tr>
            <TableHeader>Штрихкод</TableHeader>
            <TableHeader>Изображение</TableHeader>
            <TableHeader>Название</TableHeader>
            <TableHeader>Цена</TableHeader>
            <TableHeader>Бренд</TableHeader>
            <TableHeader>Производитель</TableHeader>
            <TableHeader>Тип размера</TableHeader>
            <TableHeader>Размер</TableHeader>
            <TableHeader>Назначение</TableHeader>
            <TableHeader>Описание</TableHeader>
          </tr>
        </TableHead>
        <tbody>
          {products.map((item) => (
            <AdminProductCard product={item} key={item.barcode} />
          ))}
        </tbody>
      </Block>
      :
      <Message>Список товаров пуст</Message>
    }
    </>
  );
}

export default AdminProductList;