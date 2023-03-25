import { Block, PhoneNumber, RequestCall, SecondaryText } from "./phone.styled";

function Phone(): JSX.Element {
  return (
    <Block>
      <PhoneNumber href="tel:+77774900091">+7 (777) 490-00-91</PhoneNumber>
      <SecondaryText>время работы: 9:00-20:00</SecondaryText>
      <RequestCall href="/">Заказать звонок</RequestCall>
    </Block>
  );
}

export default Phone;