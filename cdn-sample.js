javascript:(function() {
  // プロンプトを表示してユーザーから入力を受け取る
  var userInput = prompt("表示するテキストを入力してください:");

  // 入力が空でない場合のみ処理を行う
  if (userInput !== null && userInput !== "") {
    // 新しいdiv要素を作成
    var newDiv = document.createElement("div");

    // div要素の中にユーザーが入力したテキストを設定
    newDiv.innerText = userInput;

    // 任意でスタイルを追加
    newDiv.style.backgroundColor = "lightblue";
    newDiv.style.padding = "10px";
    newDiv.style.margin = "10px 0";
    newDiv.style.borderRadius = "5px";

    // body要素の直前に新しいdivを挿入
    document.body.parentNode.insertBefore(newDiv, document.body);
  } else {
    alert("入力されたテキストがありません");
  }
})();
