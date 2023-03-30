import { Block, HeadingWrapper, Wrapper } from "./catalog.styled";
import { Breadcrumbs, Heading, ProductList, SideFilter, TopFilter } from "../../components";
import { SortBy, sortProducts } from "../../common/helpers/sort";

import Page from "../../layout/page";
import Sorting from "../../components/sorting";
import { getCatalogProducts } from "../../store/products/productsSlice";
import { getFilterData } from "../../common/helpers/filter-data";
import { useAppSelector } from "../../app/hooks";

function Catalog() {
  const products = useAppSelector(getCatalogProducts);
  const sortedProducts = sortProducts(SortBy.titleAsc, [...products]);
  
  const producers = {
    filterName: "Производитель", 
    items: getFilterData(sortedProducts, "producer"),
  };

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
          <SideFilter itemSets={[producers]} />
          <ProductList products={products} />
        </Wrapper>
      </Block>
    </Page>
  );
}

export default Catalog;