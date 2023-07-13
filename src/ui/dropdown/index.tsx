import { Block, Button, Icon, Label, Menu } from "./dropdown.styled";
import { createRef, useEffect, useState } from "react";

import Checkbox from "../checkbox";
import useClickOutsideElement from "../../common/hooks/useClickOutsideElement";

interface DropdownProps {
  valueTitles: string[];
  initialValues?: string[];
  onValueChange: (changedProductTypes: string[]) => void;
}

function Dropdown({valueTitles, initialValues, onValueChange}: DropdownProps) {
  const defaultValues: {
    title: string,
    isChecked: boolean,
  }[] = [];
  
  valueTitles.forEach((item) => {
    defaultValues.push({
      title: item,
      isChecked: initialValues ? initialValues.includes(item) : false,
    })
  })

  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState(defaultValues);

  const menuRef = createRef<HTMLInputElement>();
  useClickOutsideElement(menuRef, () => setIsOpen(false));

  const getCheckedValues = () => {
    const checkedValueTitles: string[] = [];
    
    values.forEach((value) => {
      value.isChecked && checkedValueTitles.push(value.title);
    })
    
    return checkedValueTitles;
  }

  useEffect(() => {
    onValueChange(getCheckedValues());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  const handleInputChange = (event: { target: any; }) => {
    const valueIndex = values.findIndex((item) => item.title === event.target.name);
    const updatedValues = [...values];
    updatedValues[valueIndex].isChecked = !values[valueIndex].isChecked;
    setValues(updatedValues);
  }

  const getPlaceholder = () => {
    let placeholder;
    const checkedValues = getCheckedValues();
    
    if (checkedValues.length > 0) {
      placeholder = checkedValues.join(", ");
    } else {
      placeholder = "Выберите назначение";
    }
    
    return placeholder;
  }
  
  return (
    <Block ref={menuRef}>
      <Label>Назначение</Label>
      <Button 
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        $isSelected={getCheckedValues().length > 0}
      >
        {getPlaceholder()}
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