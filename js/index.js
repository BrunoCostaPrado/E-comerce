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
    nome: "JBL E55BT KEY BLACK",
    imagem1: "./imagens/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png",
    imagem2: "./imagens/JBL_LIVE650BTNC_Product Image_Folded_Black.webp",
    old_price: "400",
    curr_price: "300",
  },
  {
    nome: "JBL JR 310BT",
    imagem1: "./imagens/JBL_JR 310BT_Product Image_Hero_Skyblue.png",
    imagem2: "./imagens/JBL_JR 310BT_Product Image_Detail_Skyblue.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    nome: "JBL TUNE 750BTNC",
    imagem1:
      "./imagens/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png",
    imagem2: "./imagens/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp",
    old_price: "400",
    curr_price: "300",
  },
  {
    nome: "JBL Horizon",
    imagem1: "./imagens/JBLHorizon_001_dvHAMaster.png",
    imagem2: "./imagens/JBLHorizon_BLK_002_dvHAMaster.webp",
    old_price: "400",
    curr_price: "300",
  },
  {
    nome: "JBL Tune 220TWS",
    imagem1: "./imagens/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png",
    imagem2: "./imagens/JBL_TUNE220TWS_ProductImage_Pink_Back.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    nome: "UA Project Rock",
    imagem1:
      "./imagens/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png",
    imagem2:
      "./imagens/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png",
    old_price: "400",
    curr_price: "300",
  },
  {
    nome: "JBL Endurance SPRINT",
    imagem1:
      "./imagens/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp",
    imagem2: "./imagens/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp",
    old_price: "400",
    curr_price: "300",
  },
];

let produtos_list = document.querySelector("#latest-produtos");
let best_produto_list = document.querySelector("#best-produtos");

produtos.forEach((e) => {
  let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="produtos-card">
                <div class="produtos-card-img">
                    <img src="${e.imagem1}" alt="">
                    <img src="${e.imagem2}" alt="">
                </div>
                <div class="produtos-card-info">
                    <div class="produtos-btn">
                        <button class="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-cart-add'></i>
                        </button>
                        <button class="btn-flat btn-hover btn-cart-add">
                            <i class='bx bxs-heart'></i>
                        </button>
                    </div>
                    <div class="produtos-card-nome">
                        ${e.nome}
                    </div>
                    <div class="produtos-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span class="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

  produtos_list.insertAdjacentHTML("beforeend", prod);
  best_produtos_list.insertAdjacentHTML("afterbegin", prod);
});
