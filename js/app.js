const imageInputBtn = document.querySelector("#img_input");

const uploadBtn = document.querySelector(".upload_btn");

const modal = document.querySelector(".modal_container");
const modalImageContainer = document.querySelector(".modal_image_container");
// active image input button

uploadBtn.addEventListener("click", () => {
  imageInputBtn.click();
});

imageInputBtn.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // const result = reader.result;
      let img = document.createElement("img");
      img.id = "image";
      img.src = e.target.result;
      // clean result before
      modalImageContainer.innerHTML = "";
      // append new image
      modalImageContainer.appendChild(img);
      modal.classList.add("active");
      cropper = new Cropper(img);
    };
    // cancelBtn.addEventListener("click", function () {
    //   img.src = "";
    //   modal.classList.add("active");
    // });
    reader.readAsDataURL(file);
  }
});
