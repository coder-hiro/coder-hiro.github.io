// 西暦を取得して変数に代入する
const fullYear = new Date().getFullYear();
console.log(fullYear);

if (fullYear >= 2025) {
  document.querySelector("#this-year").textContent = "2024 - " + fullYear;
} else {
  // #this-yearに変数fullYearを表示させる
  document.querySelector("#this-year").textContent = fullYear;
}
