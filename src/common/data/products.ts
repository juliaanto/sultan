import { SizeType } from "./size-type";

const products = [
  {
    barcode: 4604049097548,
    title: "средство для мытья посуды Crystal",
    price: 48.76,
    brand: "AOS",
    producer: "Нэфис",
    imageUrl: "/img/products/aos.png",
    productType: ["Уход за\u00a0телом", "Уход за\u00a0руками"],
    sizeType: SizeType.volume,
    size: "450 мл",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.",
  },
]

export const productsJson = JSON.stringify(products);
