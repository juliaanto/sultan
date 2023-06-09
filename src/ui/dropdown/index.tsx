import { Block, Button, Icon, Label, Menu } from "./dropdown.styled";
import { createRef, useEffect, useState } from "react";

import Checkbox from "../checkbox";
import useClickOutsideElement from "../../common/hooks/useClickOutsideElement";

interface DropdownProps {
  valueTitles: string[];
  onValueChange: (changedProductTypes: string[]) => void;
}

function Dropdown({valueTitles, onValueChange}: DropdownProps) {
  const defaultValues: {
    title: string,
    isChecked: boolean,
  }[] = [];
  
  valueTitles.forEach((item) => {
    defaultValues.push({
      title: item,
      isChecked: false,
    })
  })

  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState(defaultValues);

  const menuRef = createRef<HTMLInputElement>();
  useClickOutsideElement(menuRef, () => setIsOpen(false));

  useEffect(() => {
    const checkedValueTitles: string[] = [];
    values.forEach((value) => {
      value.isChecked && checkedValueTitles.push(value.title);
    })
    onValueChange(checkedValueTitles);
  }, [values]);

  const handleInputChange = (event: { target: any; }) => {
    const valueIndex = values.findIndex((item) => item.title === event.target.name);
    const updatedValues = [...values];
    updatedValues[valueIndex].isChecked = !values[valueIndex].isChecked;
    setValues(updatedValues);
  }
  
  return (
    <Block ref={menuRef}>
      <Label>Назначение</Label>
      <Button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Выберите назначение
        <Icon />
      </Button>
      {isOpen &&
        <Menu >
          {values.map((item, index) => (
            <Checkbox 
              key={index} 
              title={item.title} 
              id={item.title} 
              isChecked={item.isChecked} 
              onInputChange={handleInputChange}
            />
          ))}
        </Menu>
      }
    </Block>
  );
}

export default Dropdown;