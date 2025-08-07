// api.js experiment

// function getAllProducts() {
//   fetch('https://fakestoreapi.com/products')
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// }

// Fetch dummy data
export default function getAllProducts(url) {
  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
}

// const PRODUCTS = [
//   {
//     id: 0,
//     category: "men's clothing",
//     description:
//       'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
//     image:
//       'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
//     price: 22.3,
//     rating: { rate: 4.1, count: 259 },
//     title: 'Mens Casual Premium Slim Fit T-Shirts ',
//   },
//   {
//     id: 1,
//     category: "men's clothing",
//     description:
//       'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
//     image:
//       'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
//     price: 55.99,
//     rating: { rate: 4.7, count: 500 },
//     title: 'Mens Cotton Jacket',
//   },
// ];
