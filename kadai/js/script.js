jQuery(function () {
  // スクロールイベント
  jQuery(window).on("scroll", function () {
    // スクロール量を取得
    let y = jQuery(window).scrollTop();

    // 各セクションの位置を取得
    let section1 = jQuery("#month-1").offset().top - 10;
    let section2 = jQuery("#month-2").offset().top - 10;
    let section3 = jQuery("#month-3").offset().top - 10;
    let section4 = jQuery("#month-4").offset().top - 10;
    let section5 = jQuery("#month-5").offset().top - 10;
    let section6 = jQuery("#month-6").offset().top - 10;

    // ゼロ以上かつsection1より手前
    if (y >= 0 && y < section1) {
      jQuery("#g-nav li").removeClass("current");
      // section1以上かつセクション2より手前
    } else if (y >= section1 && y < section2) {
      jQuery("#list-1")
        .addClass("current")
        .siblings("li")
        .removeClass("current");
      // section2以上かつセクション3より手前
    } else if (y >= section2 && y < section3) {
      jQuery("#list-2")
        .addClass("current")
        .siblings("li")
        .removeClass("current");
    } else if (y >= section3 && y < section4) {
      jQuery("#list-3")
        .addClass("current")
        .siblings("li")
        .removeClass("current");
    } else if (y >= section4 && y < section5) {
      jQuery("#list-4") // 修正: IDを "list-4" に変更
        .addClass("current")
        .siblings("li")
        .removeClass("current");
    } else if (y >= section5 && y < section6) {
      jQuery("#list-5") // 修正: IDを "list-5" に変更
        .addClass("current")
        .siblings("li")
        .removeClass("current");
    } else if (y >= section6) {
      jQuery("#list-6") // 修正: IDを "list-6" に変更
        .addClass("current")
        .siblings("li")
        .removeClass("current");
    }
  });
});
