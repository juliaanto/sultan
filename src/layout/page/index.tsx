import Block from "./page.styled";
import Footer from "../footer";
import Header from "../header";

interface PageProps {
  children: React.ReactNode;
}

function Page({ children }: PageProps) {
  return (
    <Block>
      <Header />
      {children}
      <Footer />
    </Block>
  );
}

export default Page;