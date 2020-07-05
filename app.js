let formEl = document.querySelector('form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    let formBtn = formEl.querySelector('button');
    let formError = formEl.querySelector('.error');

    e.preventDefault();

    if (!formEl.checkValidity()) {
        return;
    }


    let body = {
        name: formEl.name.value,
        email: formEl.email.value
    };

    formEl.querySelector('.error').classList.add('d-none');

    fetch("https://steallikeadev.com/api/subscribe-frontend", {
        method: "POST",
        body: JSON.stringify(body),
        headers: new Headers({
            "Content-type": "application/json"
        })
    })
        .then(resp => {
            if (!resp.ok) {
                return resp.json().then(jsonResp => {
                    throw jsonResp;
                });
            }

            return resp.json();
        })
        .then(() => {
            formEl.reset();
            formEl.innerHTML = "<p style='margin: 0; font-size: 1.5em;'> Done! Te anunțăm când tutorialele vor fi live 😉</p>";
        })
        .catch(err => {
            formBtn.removeAttribute("disabled", true);
            formError.classList.remove('d-none');
            formError.innerText = err.reason || "Oups, ceva a mers greșit. Dă-mi un semn ca să pot rezolva problema :)";
        });
}