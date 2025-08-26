const text = document.getElementById("text");
const form = document.querySelector(".form");
const loadingSection = document.getElementById("loadingSection");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  sendFetchApi();
});

function sendFetchApi() {
    const userId = document.querySelector('#userId')?.value || '';
    const password = document.querySelector('#password')?.value || '';

    if(userId === '' || password === ''){
        text.classList.add("miss");
        text.textContent = "ユーザー名かパスワードが未入力です！";
        return;
    }

    loadingSection.classList.remove("hidden");

    fetch('/api/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userId, password: password })
    })
        .then(res => res.json())
        .then(result => {
            const { success, message } = result;

            if(success === true){
                text.classList.remove("miss");
                text.textContent = message;
            }else{
                text.textContent = message;
                text.classList.add("miss");
            }

            loadingSection.classList.add("hidden");
        });

}