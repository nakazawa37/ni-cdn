javascript:(function(){

  // Bodyに動的に要素を追加する
  document.body.style.fontFamily = 'Arial, sans-serif';

  // コピー対象の要素を作成
  const targetElement = document.createElement('p');
  targetElement.id = 'targetElement';
  targetElement.textContent = 'これはコピーされるテキストです。';
  document.body.appendChild(targetElement);

  // コピー用ボタンを作成
  const copyButton = document.createElement('button');
  copyButton.id = 'copyButton';
  copyButton.textContent = 'コピー';
  document.body.appendChild(copyButton);

  // フロートウィンドウを作成
  const floatingWindow = document.createElement('div');
  floatingWindow.id = 'floatingWindow';
  floatingWindow.textContent = 'コピー完了';
  floatingWindow.style.display = 'none'; // 初期状態は非表示
  floatingWindow.style.position = 'fixed';
  floatingWindow.style.bottom = '20px';
  floatingWindow.style.right = '20px';
  floatingWindow.style.padding = '10px';
  floatingWindow.style.backgroundColor = '#4CAF50';
  floatingWindow.style.color = 'white';
  floatingWindow.style.borderRadius = '5px';
  floatingWindow.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  document.body.appendChild(floatingWindow);

  // ボタンにイベントリスナーを追加
  copyButton.addEventListener('click', function () {
      // コピー対象のテキストを取得
      const textToCopy = targetElement.textContent;

      // 一時的なtextareaを作成して値をコピー
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = textToCopy;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();

      try {
          // クリップボードにコピー
          document.execCommand('copy');

          // フロートウィンドウを表示
          floatingWindow.style.display = 'block';

          // 一定時間後に非表示
          setTimeout(() => {
              floatingWindow.style.display = 'none';
          }, 2000); // 2秒後に非表示
      } catch (err) {
          console.error('コピーに失敗しました:', err);
      }

      // 一時textareaを削除
      document.body.removeChild(tempTextArea);
  });
  
})();
