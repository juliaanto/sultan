import { Block, Button, Icon, Label, Menu } from "./dropdown.styled";
import { createRef, useState } from "react";

import Checkbox from "../checkbox";
import useClickOutsideElement from "../../common/hooks/useClickOutsideElement";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = createRef<HTMLInputElement>();
  useClickOutsideElement(menuRef, () => setIsOpen(false));
  
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
          <Checkbox title={"Уход за руками"} id={"Уход за руками"} isChecked={false} />
          <Checkbox title={"Уход за лицом"} id={"Уход за лицом"} isChecked={false} />
          <Checkbox title={"Бумажная продукция"} id={"Бумажная продукция"} isChecked={false} />
        </Menu>
      }
    </Block>
  );
}

export default Dropdown;