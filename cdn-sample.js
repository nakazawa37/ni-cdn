javascript:(function() {
  var userInput = prompt("表示するテキストを入力してください:");

  // ユーザーが入力した文字列が空でない場合のみ処理を行う
  if (userInput !== null && userInput !== "") {
    // 新しい div 要素を作成
    var newDiv = document.createElement("div");

    // div 要素の内容をユーザーの入力値に設定
    newDiv.innerText = userInput;

    // div 要素にスタイルを追加（任意）
    newDiv.style.backgroundColor = "lightblue";
    newDiv.style.padding = "10px";
    newDiv.style.margin = "10px 0";
    newDiv.style.borderRadius = "5px";

    // body の先頭部分に新しい div を追加
    document.body.insertBefore(newDiv, document.body.firstChild);
  } else {
    alert("入力されたテキストがありません");
  }
})();
