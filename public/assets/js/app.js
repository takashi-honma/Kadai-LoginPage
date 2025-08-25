const text = document.getElementById("text");
const button = document.getElementById("button");
const loadingSection = document.getElementById("loadingSection");

button.addEventListener("click", sendFetchApi);

function sendFetchApi() {
    loadingSection.classList.remove("hidden");

    const userId = document.querySelector('#userId')?.value || '';
    const password = document.querySelector('#password')?.value || '';

    fetch('http://localhost:3000/api/send', {
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
                text.textContent = message;
            }else{
                text.textContent = message;
                text.classList.add("miss");
            }

            loadingSection.classList.add("hidden");
        });

}