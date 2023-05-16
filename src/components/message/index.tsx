import { Block } from "./message.styled";

interface MessageProps {
  children?: React.ReactNode;
}

function Message({children}: MessageProps) {
  return (
    <Block>
      {children}
    </Block>
  );
}

export default Message;