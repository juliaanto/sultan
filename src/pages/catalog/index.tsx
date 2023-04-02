import { Block, HeadingWrapper, Wrapper } from "./catalog.styled";
import { Breadcrumbs, CatalogProductList, Heading, SideFilter, TopFilter } from "../../components";

import Page from "../../layout/page";
import Sorting from "../../components/sorting";
import { getCatalogProducts } from "../../store/products/productsSlice";
import { useAppSelector } from "../../app/hooks";
import { useEffect } from "react";

function Catalog() {
  const products = useAppSelector(getCatalogProducts);

  useEffect(() => {
    document.title = "Каталог | Султан";
  }, []);

  return (
    <Page>
      <Block>
        <Breadcrumbs currentPageName="Каталог" />
        <HeadingWrapper>
          <Heading>Косметика и гигиена</Heading>
          <Sorting />
        </HeadingWrapper>
        <TopFilter />
        <Wrapper>
          <SideFilter />
          <CatalogProductList products={products} />
        </Wrapper>
      </Block>
    </Page>
  );
}

export default Catalog;