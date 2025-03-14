// ページが読み込まれた後に実行
document.addEventListener('DOMContentLoaded', () => {
    // クリックイベントを設定
    document.addEventListener('click', function(event) {
        // Altキーが押されている場合のみ動作
        if (event.altKey) {
            // クリックされた要素の取得
            let target = event.target;

            // 要素のテキストや値を取得し、前後の空白や改行を削除
            let value = (target.textContent || target.value || '').trim();

            if (value) {
                // クリップボードにコピー
                navigator.clipboard.writeText(value).then(() => {
                    // 通知を作成して表示
                    let notification = document.createElement('div');
                    notification.textContent = 'コピーが完了しました！';
                    notification.style.position = 'fixed';
                    notification.style.top = '10px';
                    notification.style.left = '50%';
                    notification.style.transform = 'translateX(-50%)';
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
                }).catch(err => {
                    console.error('クリップボードにコピーできませんでした: ', err);
                });
            } else {
                // コピー対象がない場合の処理
                alert('コピーする値が見つかりません！');
            }
        }
    });
});
