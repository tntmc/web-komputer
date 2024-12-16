var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    /*
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' +  ("0" + index) + '</span>';
    },
    */
  },
  direction: "horizontal",
  speed: 1000,
  parallax: true,
});

var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    /*
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' +  ("0" + index) + '</span>';
    },
    */
  },
  direction: "horizontal",
  speed: 1000,
  parallax: false,
  breakpoints: {
    1920: {
        slidesPerView: 4,
        spaceBetween: 20,
    },
    1000: {
        slidesPerView: 3,
        spaceBetween: 10,
    },

    700: {
        slidesPerView: 2,
        spaceBetween: 10,
    },

    300: {
        slidesPerView: 1,
        spaceBetween: 5,
    },

    0: {
        slidesPerView: 1,
        spaceBetween: 0,
    },
  },
});

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    /*
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' +  ("0" + index) + '</span>';
    },
    */
  },
  direction: "horizontal",
  speed: 1000,
  parallax: false,
  breakpoints: {
    1920: {
      slidesPerView: 5,
      spaceBetween: 10,
    },

    1400: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

    1000: {
        slidesPerView: 3,
        spaceBetween: 10,
    },

    650: {
        slidesPerView: 2,
        spaceBetween: 10,
    },

    300: {
        slidesPerView: 1,
        spaceBetween: 5,
    },

    0: {
        slidesPerView: 1,
        spaceBetween: 5,
    },
  },
});

var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  direction: "horizontal",
  speed: 1000,
  parallax: true,
});

var swiper = new Swiper(".mySwiper6", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  direction: "horizontal",
  speed: 1000,
  parallax: false,
  breakpoints: {
    1920: {
      slidesPerView: 5,
      spaceBetween: 10,
    },

    1400: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

    1000: {
        slidesPerView: 3,
        spaceBetween: 10,
    },

    650: {
        slidesPerView: 2,
        spaceBetween: 10,
    },

    300: {
        slidesPerView: 1,
        spaceBetween: 5,
    },

    0: {
        slidesPerView: 1,
        spaceBetween: 5,
    },
  },
});



let count = 0 // Jumlah awal barang
const stok = parseInt(document.querySelector(".text-body span").innerText);
let price = parseInt(document.querySelector(".price span").innerText); // Harga satuan

document.getElementById("decreaseBtn").onclick = function(){
    if (count > 1) {
        count -= 1;
        Price = count * price;
        document.getElementById("countLabel").innerHTML = count;
        document.getElementById("priceLabel").innerHTML = Price;
    }
    if (count <= 1) {
        document.getElementById("decreaseBtn").disabled = true;
    }
}

document.getElementById("resetBtn").onclick = function(){
    count = 0;
    Price = 0;
    document.getElementById("countLabel").innerHTML = count;
    document.getElementById("priceLabel").innerHTML = Price;

    if (count <= 0) {
        count = 0;
        Price = 0;
        document.getElementById("resetBtn").onclick = disableOnInteraction;
    }
}


document.getElementById("increaseBtn").onclick = function(){
    const stok = parseInt(document.querySelector(".text-body span").innerText); // ambil stok dari HTML
    if (count < stok) {
        count += 1;
        Price = count * price;
        document.getElementById("countLabel").innerHTML = count;
        document.getElementById("priceLabel").innerHTML = Price;
        document.getElementById("decreaseBtn").disabled = false;
    } else {
        alert("Stok sudah mencapai batas");
        document.getElementById("increaseBtn").disabled = true;
    }
}