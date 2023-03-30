import { Block, HeadingWrapper, Wrapper } from "./catalog.styled";
import { Breadcrumbs, Heading, ProductList, SideFilter, TopFilter } from "../../components";

import Page from "../../layout/page";
import Sorting from "../../components/sorting";
import { getCatalogProducts } from "../../store/products/productsSlice";
import { useAppSelector } from "../../app/hooks";

function Catalog() {
  const products = useAppSelector(getCatalogProducts);

  return (
    <Page>
      <Block>
        <Breadcrumbs />
        <HeadingWrapper>
          <Heading>Косметика и гигиена</Heading>
          <Sorting />
        </HeadingWrapper>
        <TopFilter />
        <Wrapper>
          <SideFilter />
          <ProductList products={products} />
        </Wrapper>
      </Block>
    </Page>
  );
}

export default Catalog;