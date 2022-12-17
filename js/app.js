const imageInputBtn = document.querySelector("#img_input");

const uploadBtn = document.querySelector(".upload_btn");

const modal = document.querySelector(".modal_container");
const modalImageContainer = document.querySelector(".modal_image_container");
const croppedImageModal = document.querySelector(
  ".cropped_image_modal_container"
);
const cropBtn = document.querySelector(".crop_btn");

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

cropBtn.addEventListener("click", () => {
  let imgSrc = cropper
    .getCroppedCanvas({
      width: 300,
    })
    .toDataURL();
  croppedImageModal.classList.remove("hide");
  const cropped_img = document.querySelector(".cropped_img");
  console.log(imgSrc);
  console.log(cropped_img);
  modal.classList.remove("active");
  cropped_img.src = imgSrc;
});
