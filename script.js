const messages = [
    "Seriusss ni??",
    "Ga nyeselkann??",
    "Salah pencett kah?",
    "Hhaha becanda kan?",
    "Haha becandaa yaa",
    "Kalo Nolak aku sedih lhoo",
    "aku nangiss niii",
    "Ayooo lahhh",
    "Nyesell pasti...",
    "pencet ijooo nya dongg❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
