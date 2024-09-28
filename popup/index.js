document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('get-url');
    const input = document.getElementById('url-input');
    button.addEventListener('click', () => {
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            const tab = tabs[0];
            const fullUrl = tab.url; // 获取完整的 URL
            // const userInput = input.value; // 获取输入框中的内容
            const userInput = input.value.trim(); // 获取输入框中的内容并去除前后空格
            const middle_string = "?username_filters=";
            console.log('用户输入的网址:', userInput);
            console.log('当前网站完整 URL:', fullUrl);
            // alert('当前网站完整 URL: ' + fullUrl);
            // alert('用户输入的网址: ' + fullUrl + userInput);
            if (userInput) {
                // 如果输入不为空，则跳转
                chrome.tabs.create({ url:fullUrl+ middle_string+ userInput }); // 在新标签页中打开网址
            } else {
                alert('请输入有效id');
            }
        });



    });
});

