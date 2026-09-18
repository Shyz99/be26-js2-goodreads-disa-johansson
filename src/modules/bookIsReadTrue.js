export function bookIsReadTrue(bookObj, bookContainer, markBookAsReadBtn) {
  if (bookObj.isRead == true) {
    bookContainer.classList.add("bookReadIsTrue");
    markBookAsReadBtn.innerText = "Un-Mark book as read";
  } else {
    bookContainer.classList.remove("bookReadIsTrue");
    markBookAsReadBtn.innerText = "Mark book as read";
  }
}
