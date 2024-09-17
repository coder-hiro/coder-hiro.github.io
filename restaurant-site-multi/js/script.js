// ---------------vegasの呼び出し-----------
// アップロードするために画像パスを絶対パスに変更
$("#main-visual").vegas({
  slides: [
    { src: "/img/main-1.webp" },
    { src: "/img/main-2.webp" },
    { src: "/img/main-3.webp" },
  ],
  timer: false,
  //   変更可能
  transition: "fade",
  //   変更可能
  animation: "kenburns",
});

// ----------------hamburger------------------------
jQuery("#ham-btn").on("click", function () {
  //ハンバーガーボタンをクリックした時
  jQuery(this).toggleClass("is-active"); //ハンバーガーボタンにis-activeを付与、削除
  jQuery("#g-nav").fadeToggle(250); //g-navをフェードイン、フェードアウト
});

jQuery("#g-nav a").on("click", function () {
  //g-navのリンクをクリックした時
  jQuery("#g-nav").fadeOut(250); //g-navを非表示にする
  jQuery("#ham-btn").removeClass("is-active"); //ハンバーガーボタンのis-activeを外す
});

// ------------------#g-navを非表示にする-----------------------------

jQuery("#g-nav").hide(); //g-navを非表示にする

// -------------ajax外部データを呼び出す---------------
// jQuery('#news-list').load('/news.txt');

// -----------------carousel-----------------------

$(".bxslider").bxSlider({
  //bxsliderを呼び出す
  ticker: true,
  speed: 40000,
  minSlides: 2,
  maxSlides: 6,
  slideWidth: 320,
});

// ---------------西暦を取得してfullerYearに代入する----------------------------------

const fullYear = new Date().getFullYear(); //西暦を取得してfullerYearに代入する

if (fullYear >= 2025) {
  jQuery("#this-year").text("2024 - " + fullYear);
} else {
  jQuery("#this-year").text(fullYear);
}

// ---------------スクロールに応じて要素を「フワッ」と登場させる----------------------------------

var wow = new WOW({
  boxClass: "wow", // animated element css class (default is wow)
  animateClass: "animated", // animation css class (default is animated)
  offset: 0, // distance to the element when triggering the animation (default is 0)
  mobile: true, // trigger animations on mobile devices (default is true)
  live: true, // act on asynchronously loaded content (default is true)
  callback: function (box) {
    // the callback is fired every time an animation is started
    // the argument that is passed in is the DOM node being animated
  },
  scrollContainer: null, // optional scroll container selector, otherwise use window,
  resetAnimation: true, // reset animation on end (default is true)
});
wow.init();
new WOW().init();
