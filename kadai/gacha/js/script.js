function gacha() {
  // 配列に画像を挿入
  let star3 = ["01.png", "02.png"];
  let star2 = ["03.png", "04.png", "05.png"];
  let star1 = ["06.png", "07.png", "08.png", "09.png", "10.png", "11.png"];

  // console.log(star1);

  // 排出率の設定

  // 星1の排出率60%
  let star1Ratio = 50;
  // 星1,2の排出率合わせた数値
  let star2Ratio = 90;
  // 各ランクに入っているキャラ数
  let stat1Total = 6;
  let stat2Total = 3;
  let stat3Total = 2;

  // 値が空の配列を作成
  let character = [];

  // 3回ガチャを引く
  for (let i = 1; i < 4; i++) {
    // １から100までのランダムな数値を生成
    let randomNum = Math.ceil(Math.random() * 100);
    console.log(randomNum);

    //   if文でランクの振り分け
    if (randomNum <= star1Ratio) {
      // 1-60の間のランダムな数値を生成
      let star1Num = Math.floor(Math.random() * stat1Total);
      character.push(star1[star1Num]);
    } else if (randomNum <= star2Ratio) {
      // 61-95の間のランダムな数値を生成
      let star2Num = Math.floor(Math.random() * stat2Total);
      character.push(star2[star2Num]);
    } else {
      // 96-100の間のランダムな数値を生成
      let star3Num = Math.floor(Math.random() * stat3Total);
      character.push(star3[star3Num]);
    }
  }

  console.log(character);
  // 配列characterの中身を表示

  document.querySelector("#outer").innerHTML =
    '<p><img src="./img/' +
    character[0] +
    '" alt="" /></p><p><img src="./img/' +
    character[1] +
    '" alt="" /></p><p><img src="./img/' +
    character[2] +
    '" alt="" /></p>';
}

// 西暦を取得して変数に代入する
const fullYear = new Date().getFullYear();
console.log(fullYear);

if (fullYear >= 2025) {
  document.querySelector("#this-year").textContent = "2024 - " + fullYear;
} else {
  // #this-yearに変数fullYearを表示させる
  document.querySelector("#this-year").textContent = fullYear;
}
