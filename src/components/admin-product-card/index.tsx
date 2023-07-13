import { ButtonsWrapper, TableData, TableRow } from "./admin-product-card.styled";

import { Button } from "../../ui";
import { ButtonView } from "../../ui/button";
import { IProduct } from "../../types/product";
import { ReactComponent as IconBin } from "../../assets/icons/bin.svg";
import { ReactComponent as IconPencil } from "../../assets/icons/pencil.svg";
import Modal from "../modal";
import NewProductForm from "../new-product-form";
import { removeProduct } from "../../store/admin/adminSlice";
import { useAppDispatch } from "../../app/hooks";
import { useState } from "react";

interface AdminProductCardProps {
  product: IProduct;
}

function AdminProductCard({product}: AdminProductCardProps) {
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleEditClick = (product: IProduct) => {
    setIsModalOpen(true);
  }

  const handleDeleteClick = (barcode: number) => {
    dispatch(removeProduct(barcode));
  }

  return (
    <TableRow>
      <TableData>{product.barcode}</TableData>
      <TableData>
        <img src={product.imageUrl} alt={product.title} width={100} height={100} />
      </TableData>
      <TableData>{product.title}</TableData>
      <TableData>{product.price}</TableData>
      <TableData>{product.brand}</TableData>
      <TableData>{product.producer}</TableData>
      <TableData>{product.sizeType}</TableData>
      <TableData>{product.size}</TableData>
      <TableData>
        <ul>
          {product.productType.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </TableData>
      <TableData>{product.description.substring(0, 200)}</TableData>
      <TableData>
        <ButtonsWrapper>
          <Button $view={ButtonView.Icon} $width="35px" $height="35px" onClick={() => handleEditClick(product)}>
            <IconPencil />
          </Button>
          <Modal 
            isOpen={isModalOpen}
            title="Редактирование товара"
            handleCloseClick={() => setIsModalOpen(false)}
          >
            <NewProductForm 
              handleSubmit={() => setIsModalOpen(false)}
              product={product}
            />
          </Modal>
          <Button $view={ButtonView.Icon} $width="35px" $height="35px" onClick={() => handleDeleteClick(product.barcode)}>
            <IconBin />
          </Button>
        </ButtonsWrapper>
      </TableData>
    </TableRow>
  )
}

export default AdminProductCard;