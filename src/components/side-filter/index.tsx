import { BottomLine, Fieldset, Form, Heading, Legend, Text } from "./side-filter.styled";
import { Button, CheckboxSet, Input } from "../../ui";
import { FilterBy, IFilters, PriceFilter } from "../../types/filters";
import { filterCatalogProducts, getFilter, setPriceFilterValue, setProducerFilterValue, setProductTypeFilterValue } from "../../store/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect, useState } from "react";

import { ButtonView } from "../../ui/button";
import { ReactComponent as IconBin } from "../../assets/icons/bin.svg";
import { InputView } from "../../ui/input";

function SideFilter() {
  const filterData: IFilters = useAppSelector(getFilter);
  const dispatch = useAppDispatch();
  const [priceMinValue, setPriceMinValue] = useState(filterData[FilterBy.Price].priceMin);
  const [priceMaxValue, setPriceMaxValue] = useState(filterData[FilterBy.Price].priceMax);

  useEffect(() => {
    dispatch(setPriceFilterValue({priceMin: priceMinValue, priceMax: priceMaxValue}));
  }, [dispatch, priceMaxValue, priceMinValue]);

  const handleProductTypeFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.name;
    const isChecked = event.target.checked;
    dispatch(setProductTypeFilterValue({ id, isChecked }));
  }

  const handleProducerFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.name;
    const isChecked = event.target.checked;
    dispatch(setProducerFilterValue({ id, isChecked }));
  }

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(filterCatalogProducts());
  }

  const handleClearFiltersButtonClick = () => {
    setPriceMinValue("");
    setPriceMaxValue("");
    dispatch(setPriceFilterValue({priceMin: "0", priceMax: "0"}));
    
    const productTypeFilterData = filterData[FilterBy.ProductType];
    Object.values(productTypeFilterData).forEach((item) => dispatch(setProductTypeFilterValue({ id: item.id, isChecked: false })));

    const producerFilterData = filterData[FilterBy.Producer];
    Object.values(producerFilterData).forEach((item) => dispatch(setProducerFilterValue({ id: item.id, isChecked: false })));

    dispatch(filterCatalogProducts());
  }
  
  return (
    <Form onSubmit={handleSubmitForm} name="sideFilter">
      <Heading>Подбор по параметрам</Heading>
      <Fieldset>
        <Legend>Цена ₸</Legend>
        <Input 
          type="number" 
          $view={InputView.Number} 
          placeholder="0" 
          name={PriceFilter.PriceMin}
          id={PriceFilter.PriceMin} 
          value={priceMinValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPriceMinValue(event.target.value)}
        />
        <Text>-</Text>
        <Input 
          type="number" 
          $view={InputView.Number} 
          placeholder="10 000" 
          name={PriceFilter.PriceMax} 
          id={PriceFilter.PriceMax}
          value={priceMaxValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPriceMaxValue(event.target.value)}
        />
      </Fieldset>
      <CheckboxSet 
        filterName="Производитель" 
        items={filterData[FilterBy.Producer]}
        filterField={FilterBy.Producer}
        shownItemsCount={4}
        onInputChange={handleProducerFilterChange}
      />
      <CheckboxSet 
        filterName="Тип ухода" 
        items={filterData[FilterBy.ProductType]} 
        filterField={FilterBy.ProductType}
        shownItemsCount={4}
        onInputChange={handleProductTypeFilterChange}
      />
      <BottomLine>
        <Button 
          $width="169px" 
          $height="59px" 
          type="submit"
        >
          Показать
        </Button>
        <Button
          $view={ButtonView.Icon}
          $width="59px"
          $height="59px"
          onClick={handleClearFiltersButtonClick}>
          <IconBin />
        </Button>
      </BottomLine>
    </Form>
  );
}

export default SideFilter;