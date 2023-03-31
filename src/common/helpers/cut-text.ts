export const cutText = (text: string, length: number) => {
  if (text.length > length) {
    text = text.slice(0, length) + "...";
  }
  return text;
}