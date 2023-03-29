import { Block, HeadingWrapper, Wrapper } from "./catalog.styled";
import { Breadcrumbs, Heading, ProductList, SideFilter, TopFilter } from "../../components";
import { SortBy, sortProducts } from "../../common/helpers/sort";

import Page from "../../layout/page";
import Sorting from "../../components/sorting";
import { getFieldValues } from "../../common/helpers/products";
import { productsJson } from "../../common/data/products";
import { useState } from "react";

function Catalog() {
  const [sortType, setSortType] = useState(SortBy.titleAsc);
  const initialProducts = sortProducts(SortBy.titleAsc, JSON.parse(productsJson));

  const productTypes = {
    filterName: "Бренд",
    filterCode: "productType",
    items: getFieldValues(initialProducts, "productType"),
  };
  
  const producers = {
    filterName: "Производитель", 
    filterCode: "producer",
    items: getFieldValues(initialProducts, "producer"),
  };

  return (
    <Page>
      <Block>
        <Breadcrumbs />
        <HeadingWrapper>
          <Heading>Косметика и гигиена</Heading>
          <Sorting handleChangeSorting={(e) => setSortType(e.target.value)} />
        </HeadingWrapper>
        <TopFilter items={productTypes.items}/>
        <Wrapper>
          <SideFilter itemSets={[producers, productTypes]} />
          <ProductList products={sortProducts(sortType, initialProducts)} />
        </Wrapper>
      </Block>
    </Page>
  );
}

export default Catalog;