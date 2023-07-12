import { Block, TableHead, TableHeader } from "./admin-product-list.styled";

import AdminProductCard from "../admin-product-card";
import Message from "../message";
import { getProducts } from "../../store/admin/adminSlice";
import { useAppSelector } from "../../app/hooks";

function AdminProductList() {
  const products = useAppSelector(getProducts);
  
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
            <TableHeader>Действия</TableHeader>
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