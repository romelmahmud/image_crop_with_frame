const imageInputBtn = document.querySelector("#img_input");

const uploadBtn = document.querySelector(".upload_btn");

// active image input button

uploadBtn.addEventListener("click", () => {
  imageInputBtn.click();
});
