javascript:(function() {
  // プロンプトを表示してユーザーから入力を受け取る
  var userInput = prompt("表示するテキストを入力してください:");

  // 入力が空でない場合のみモーダルを表示
  if (userInput !== null && userInput !== "") {
    // モーダルのオーバーレイを作成
    var modalOverlay = document.createElement("div");
    modalOverlay.style.position = "fixed";
    modalOverlay.style.top = "0";
    modalOverlay.style.left = "0";
    modalOverlay.style.width = "100%";
    modalOverlay.style.height = "100%";
    modalOverlay.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    modalOverlay.style.display = "flex";
    modalOverlay.style.justifyContent = "center";
    modalOverlay.style.alignItems = "center";
    modalOverlay.style.zIndex = "9999";

    // モーダルのコンテンツ領域を作成
    var modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#fff";
    modalContent.style.padding = "20px";
    modalContent.style.borderRadius = "8px";
    modalContent.style.maxWidth = "80%";
    modalContent.style.maxHeight = "80%";
    modalContent.style.overflow = "auto";
    modalContent.style.textAlign = "center";
    modalContent.innerText = userInput;

    // 閉じるボタンを作成
    var closeButton = document.createElement("button");
    closeButton.innerText = "閉じる";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.backgroundColor = "#ff0000";
    closeButton.style.color = "#fff";
    closeButton.style.border = "none";
    closeButton.style.padding = "10px";
    closeButton.style.cursor = "pointer";

    // 閉じるボタンをクリックしたときにモーダルを閉じる
    closeButton.onclick = function() {
      document.body.removeChild(modalOverlay);
    };

    // モーダルコンテンツに閉じるボタンを追加
    modalContent.appendChild(closeButton);

    // モーダルオーバーレイにコンテンツを追加
    modalOverlay.appendChild(modalContent);

    // モーダルオーバーレイをページに追加
    document.body.appendChild(modalOverlay);
  } else {
    alert("入力された内容がありません");
  }
})();
