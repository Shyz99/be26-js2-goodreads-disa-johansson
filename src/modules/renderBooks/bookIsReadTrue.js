export function bookIsReadTrue(
  allBooksObj,
  id,
  bookContainer,
  markBookAsReadBtn,
  scoreData,
  editScoreDataBtn,
) {
  if (allBooksObj[id].isRead == true) {
    bookContainer.classList.add("bookReadIsTrue");
    scoreData.classList.remove("scoreDataOff");
    editScoreDataBtn.classList.remove("scoreDataOff");
    markBookAsReadBtn.innerText = "Un-Mark book as read";
  } else {
    bookContainer.classList.remove("bookReadIsTrue");
    scoreData.classList.add("scoreDataOff");
    editScoreDataBtn.classList.add("scoreDataOff");
    markBookAsReadBtn.innerText = "Mark book as read";
  }
}
