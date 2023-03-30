import { Button, Checkbox, Input } from "../../ui";
import { Fieldset, Form, Heading, Legend, Text } from "./side-filter.styled";
import { FilterBy, IFilters, IPriceFilter } from "../../types/filters";
import { filterCatalogProducts, getProductTypeFilter, setProducerFilterValue, setProductTypeFilterValue } from "../../store/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { InputView } from "../../ui/input";

function SideFilter() {
  const filterData: IFilters = useAppSelector(getProductTypeFilter);
  const dispatch = useAppDispatch();

  const handleInputFromStoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const id = event.target.name;
    const isChecked = event.target.checked;
    
    dispatch(setProductTypeFilterValue({ id, isChecked }));
  }

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const producerFilterElement = document.getElementById("producerFilter");
    const checkedValues = producerFilterElement?.querySelectorAll('input[type="checkbox"]');

    let checkedProducers = Array.prototype.slice.call(checkedValues)

    checkedProducers.forEach((input) => {
      const id = input.name;
      const isChecked = input.checked;
      dispatch(setProducerFilterValue({ id, isChecked}));
    });

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
          name={IPriceFilter.priceMin}
          id={IPriceFilter.priceMin} 
        />
        <Text>-</Text>
        <Input 
          type="number" 
          $view={InputView.number} 
          placeholder="10 000" 
          name={IPriceFilter.priceMax} 
          id={IPriceFilter.priceMax} 
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
        onInputChange={handleInputFromStoreChange} 
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