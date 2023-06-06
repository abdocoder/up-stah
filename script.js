document.addEventListener("DOMContentLoaded", function () {

  const photos = document.querySelectorAll(".photo");

  const overlay = document.getElementById("overlay");

  const expandedPhoto = document.getElementById("expanded-photo");

  const closeBtn = document.querySelector(".close");

  photos.forEach(function (photo) {

    photo.addEventListener("click", function () {

      const imgSrc = photo.querySelector("img").src;

      expandedPhoto.src = imgSrc;

      overlay.style.display = "flex";

    });

  });

  closeBtn.addEventListener("click", function () {

    overlay.style.display = "none";

  });

});

