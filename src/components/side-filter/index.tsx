import { Button, Checkbox, Input } from "../../ui";
import { Fieldset, Form, Heading, Legend, Text } from "./side-filter.styled";
import { FilterBy, IFilters, PriceFilter } from "../../types/filters";
import { filterCatalogProducts, getProductTypeFilter, setPriceFilterValue, setProducerFilterValue, setProductTypeFilterValue } from "../../store/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { InputView } from "../../ui/input";
import { useRef } from "react";

function SideFilter() {
  const filterData: IFilters = useAppSelector(getProductTypeFilter);
  const dispatch = useAppDispatch();
  const priceMinRef = useRef<HTMLInputElement | null>(null);
  const priceMaxRef = useRef<HTMLInputElement | null>(null);

  const handleProductTypeFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.name;
    const isChecked = event.target.checked;
    
    dispatch(setProductTypeFilterValue({ id, isChecked }));
  }

  const setPriceFilterValues = () => {
    let priceMin = Number(priceMinRef.current?.value);
    let priceMax = Number(priceMaxRef.current?.value);

    dispatch(setPriceFilterValue({priceMin, priceMax}));
  }

  const setProducerFilterValues = () => {
    const producerFilterElement = document.getElementById("producerFilter");
    const checkedValues = producerFilterElement?.querySelectorAll('input[type="checkbox"]');

    let checkedProducers = Array.prototype.slice.call(checkedValues);

    checkedProducers.forEach((input) => {
      const id = input.name;
      const isChecked = input.checked;
      dispatch(setProducerFilterValue({ id, isChecked}));
    });
  }

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setPriceFilterValues();
    setProducerFilterValues();
    
    dispatch(filterCatalogProducts());
  }
  
  return (
    <Form onSubmit={handleSubmitForm} name="sideFilter">
      <Heading>Подбор по параметрам</Heading>
      <Fieldset>
        <Legend>Цена ₸</Legend>
        <Input 
          type="number" 
          $view={InputView.number} 
          placeholder="0" 
          name={PriceFilter.priceMin}
          id={PriceFilter.priceMin} 
          innerRef={priceMinRef}
        />
        <Text>-</Text>
        <Input 
          type="number" 
          $view={InputView.number} 
          placeholder="10 000" 
          name={PriceFilter.priceMax} 
          id={PriceFilter.priceMax}
          innerRef={priceMaxRef}
        />
      </Fieldset>
      <Checkbox 
        filterName="Производитель" 
        items={filterData[FilterBy.producer]}
        id="producerFilter"
      />
      <Checkbox 
        filterName="Тип ухода" 
        items={filterData[FilterBy.productType]} 
        onInputChange={handleProductTypeFilterChange} 
      />
      <Button 
        $width="169px" 
        $height="59px" 
        type="submit"
      >
        Показать
      </Button>
    </Form>
  );
}

export default SideFilter;