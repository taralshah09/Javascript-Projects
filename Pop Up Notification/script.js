const submit = document.getElementById("submit")
const ok = document.getElementById("ok")
const noti = document.querySelector(".notification")

const openPopup = () => {
    noti.classList.add("open-popup");
}

const closePopup = () => {
    noti.classList.remove("open-popup")
}