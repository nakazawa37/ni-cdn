// フロート通知を表示する関数
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.top = '10px';
    notification.style.right = '10px';
    notification.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = 1000;
    document.body.appendChild(notification);

    // 3秒後に通知を削除
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// 値をクリップボードにコピーする関数
function copyToClipboard(value) {
    navigator.clipboard.writeText(value).then(() => {
        showNotification('コピーが完了しました！');
    }).catch(err => {
        console.error('クリップボードにコピーできませんでした: ', err);
    });
}

// ページ上の要素をクリックしてコピーする例
document.addEventListener('click', (event) => {
    const target = event.target;
    
    // 任意の条件で要素をフィルタリング（ここではdata-copy属性を持つ要素のみ）
    if (target.dataset.copy) {
        const valueToCopy = target.textContent || target.value;
        copyToClipboard(valueToCopy);
    }
});

// 任意の要素に以下のような属性を追加して動作確認できます：
// <div data-copy>コピーするテキスト</div>
// <input type="text" value="コピーするテキスト" data-copy>
