$(document).ready(function () {
  function initializeVegas() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      $(".mvInner").vegas({
        slides: [
          { src: "./img/sp/new01_sp.webp" },
          { src: "./img/sp/new02_sp.webp" },
          { src: "./img/sp/new03_sp.webp" },
          { src: "./img/sp/new04_sp.webp" },
        ],
        align: "50%", // スライドの位置を中央に設定
        delay: 5000, // スライド間の遷移時間を5秒に設定
        animation: 'kenburns'
      });
    } else {
      $(".mvInner").vegas({
        slides: [
          { src: "./img/zoom01.webp" },
          { src: "./img/zoom02.webp" },
          { src: "./img/zoom03.webp" },
          { src: "./img/zoom04.webp" },
          { src: "./img/zoom05.webp" },
          { src: "./img/zoom06.webp" },
          { src: "./img/zoom07.webp" },
          { src: "./img/zoom08.webp" },
          { src: "./img/zoom09.webp" },
        ],
        align: "center", // スライドの位置を中央に設定


      });
    }
  }

  // 初期化
  initializeVegas();

  // ウィンドウのリサイズイベントをリッスン
  $(window).resize(function () {
    $(".mvInner").vegas("destroy");
    initializeVegas();
  });
});
