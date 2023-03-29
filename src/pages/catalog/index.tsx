import { Block, HeadingWrapper, Wrapper } from "./catalog.styled";
import { Breadcrumbs, Heading, ProductList, SideFilter, TopFilter } from "../../components";

import Page from "../../layout/page";
import Sorting from "../../components/sorting";
import { getFieldValues } from "../../common/helpers/products";
import { productsJson } from "../../common/data/products";

function Catalog() {
  const products = JSON.parse(productsJson);

  const productTypes = {
    filterName: "Бренд",
    filterCode: "productType",
    items: getFieldValues(products, "productType"),
  };
  
  const producers = {
    filterName: "Производитель", 
    filterCode: "producer",
    items: getFieldValues(products, "producer"),
  };

  return (
    <Page>
      <Block>
        <Breadcrumbs />
        <HeadingWrapper>
          <Heading>Косметика и гигиена</Heading>
          <Sorting />
        </HeadingWrapper>
        <TopFilter items={productTypes.items}/>
        <Wrapper>
          <SideFilter itemSets={[producers, productTypes]} />
          <ProductList products={products} />
        </Wrapper>
      </Block>
    </Page>
  );
}

export default Catalog;