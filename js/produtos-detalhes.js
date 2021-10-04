let slide_index = 0;
let slide_play = true;
let slides = document.querySelectorAll(".slide");

hideAllSlide = () => {
  slides.forEach((e) => {
    e.classList.remove("active");
  });
};

showSlide = () => {
  hideAllSlide();
  slides[slide_index].classList.add("active");
};

nextSlide = () =>
  (slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1);

prevSlide = () =>
  (slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1);

document
  .querySelector(".slider")
  .addEventListener("mouseover", () => (slide_play = false));

document
  .querySelector(".slider")
  .addEventListener("mouseleave", () => (slide_play = true));

l;

document.querySelector(".slide-next").addEventListener("click", () => {
  nextSlide();
  showSlide();
});

document.querySelector(".slide-prev").addEventListener("click", () => {
  prevSlide();
  showSlide();
});

showSlide();

let produtos = [
  {
    name: "JBL E55BT KEY BLACK",
    image1: "/imagens/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.png",
    image2:
      "/imagens/JBL_LIVE650BTNC_Product-Image_Hero_Black_071_x1-1605x1605px.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL JR 310BT",
    image1: "./imagens/JBL_JR 310BT_Product Image_Hero_Skyblue.png",
    image2: "./imagens/JBL_JR 310BT_Product Image_Detail_Skyblue.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL TUNE 750BTNC",
    image1:
      "./imagens/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png",
    image2: "./imagens/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL Horizon",
    image1: "./imagens/JBLHorizon_001_dvHAMaster.jpg",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL Tune 220TWS",
    image1: "./imagens/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png",
    image2: "./imagens/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.jpg",
    old_price: "400",
    curr_price: "300",
  },
  {
    name: "JBL Endurance SPRINT",
    image1:
      "./imagens/JBL_Endurance-SPRINT_Product-Image_Black_Lime_Front-1605x1605px.png",
    image2:
      "./imagens/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.png",
    old_price: "400",
    curr_price: "300",
  },
];

let produto_list = document.querySelector("#latest-produtos");
let best_produto_list = document.querySelector("#best-produtos");

produtos.forEach((e) => {
  let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="produto-card">
                <div class="produto-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="produto-card-info">
                    <div class="produto-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="produto-card-name">
                        ${e.name}
                    </div>
                    <div class="produto-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

  produto_list.insertAdjacentHTML("beforeend", prod);
  best_produto_list.insertAdjacentHTML("afterbegin", prod);
});
