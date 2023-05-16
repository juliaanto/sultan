import { Block, TableHeader } from "./admin-product-list.styled";

import AdminProductCard from "../admin-product-card";
import mockProducts from "../../common/data/products.json";

function AdminProductList() {
  return (
    <Block>
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
      {mockProducts.map((item) => (
        <AdminProductCard product={item} />
      ))}
    </Block>
  );
}

export default AdminProductList;