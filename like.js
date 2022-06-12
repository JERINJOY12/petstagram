const likeButtons = document.querySelectorAll(".like-btn");
function handleLike(event){ //if its red it will become whote else red(like button)
    event.target.classList.toggle("active");
}
likeButtons.forEach((likeButton) => {
    likeButton.addEventListener("click",handleLike);
});