import { readCart, updateCartCount, writeCart } from "./utils/common.js";
updateCartCount();
const cartList = document.querySelector(".cart-list");
const cart = readCart();
console.log(cart);

const cartHTML = cart.map(
  item =>
    `
  <article class="cart-item">
    <span class="item-check"><span class="check-box" aria-hidden="true"></span></span>
    <div class="cart-thumb">
      <img
        src="${item.thumb}"
        alt="${item.title}"
      />
    </div>
    <div class="cart-item-info">
      <h2>${item.title}</h2>
      <p>브랜드명 | ${item.brand}</p>
      <strong>$${item.price}원</strong>
    </div>
    <div class="quantity-box" aria-label="수량">
      <button type="button" aria-label="수량 줄이기">-</button>
      <span>1</span>
      <button type="button" aria-label="수량 늘리기">+</button>
    </div>
    <button type="button" class="remove-item" aria-label="${item.title} 삭제"></button>
  </article>
  `,
);
cartList.innerHTML += cartHTML.join("");
