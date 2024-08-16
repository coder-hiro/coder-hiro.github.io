// ------------ハンバーガーボタン----------------------

jQuery("#ham-btn").on("click", function () {
  jQuery(this).toggleClass("is-active"); //ハンバーガーボタンのアニメーション

  jQuery("#sp-nav").toggleClass("slide"); //ナビゲーションスライド
});

// -------------スクロールイベント---------------------

jQuery(window).on("scroll", function () {
  let y = jQuery(window).scrollTop(); //スクロール量を取得
  let headerH = jQuery("header").outerHeight(); //ヘッダーの高さを取得
  if (y > headerH) {
    jQuery("body").addClass("scroll"); //スクロール量がヘッダーの高さを超えたらbodyにscrollクラスを追加
  } else jQuery("body").removeClass("scroll"); //スクロール量がヘッダーの高さを超えたらbodyにscrollクラスを削除
});

// -------------西暦----------------------------------
