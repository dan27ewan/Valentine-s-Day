const phone = document.getElementById("phone");
const screen = document.getElementById("screen");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const continueBtn = document.getElementById("continueBtn");
const pic = document.getElementById("pic");
const message = document.getElementById("message");
const question = document.getElementById("question");

let noCount = 0;
const maxNo = 10;
let noScale = 1;

const noQuestions = [
    "Are you sure, love?😢",
    "Please?",
    "Don't break my heart 💔",
    "Think again... 🥺",
    "I won't stop until you say YES 😏",
    "Still NO? 🥲",
    "Come on, just say YES! 💖",
    "Noooo... 😭",
    "Last chance, maybe? 🤔",
    "This is your last NO! 😅"
];

const noImages = [
    "I.gif",
    "H.gif",
    "G.gif",
    "F.gif",
    "E.gif",
    "D.gif",
    "C.gif",
    "B.gif",
    "A.gif",
    "blee.gif"
];

function centerButtons() {
    const phoneRect = phone.getBoundingClientRect();
    yesBtn.style.left = (phoneRect.width / 2 - yesBtn.offsetWidth / 2) + "px";
    yesBtn.style.top = "500px";

    noBtn.style.left = (phoneRect.width / 2 - noBtn.offsetWidth / 2) + "px";
    noBtn.style.top = "430px";
}
centerButtons();

function moveNoButton() {
    const phoneRect = phone.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth * noScale;
    const btnHeight = noBtn.offsetHeight * noScale;

    const x = Math.random() * (phoneRect.width - btnWidth - 20);
    const y = 300 + Math.random() * (phoneRect.height - 350);
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
}

noBtn.addEventListener("click", () => {
    if(noCount < maxNo){
        message.innerText = noQuestions[noCount];
        pic.src = noImages[noCount];

        noScale *= 0.9;
        noBtn.style.transform = `scale(${noScale})`;

        moveNoButton();
        noCount++;
    } else {
        noBtn.style.display = "none";
        message.innerText = "Your choice is YES only haha bleeee 💕";
        pic.src = "blee.gif";
    }
});

yesBtn.addEventListener("click", () => {
    question.style.display = "none";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    pic.src = "hai.gif";
    pic.style.display = "block";
    rightMessage.style.display = "block";
    rightMessage.innerText = "Yay! You said YES 💖. Iloveyousomuch po babygirl kong maganda, mahal na mahal na mahal po kita, hindi aki magsasawang mahalin at piliin ka, palagi po kitang mamahalin at pipiliin. mwuaaa mwuaaa mwuaaa iloveyouuu ganda";
    message.style.display = "none";
    continueBtn.style.display = "block";
});

continueBtn.addEventListener("click", () => {
    question.style.display = "block";
    question.innerText = "This is our Plan in Valentine’s Day💞";
    pic.style.display = "none";
    rightMessage.style.display = "none";
    message.style.display = "block";
    message.innerHTML = `
        Let's make this day special! 💌<br><br>
        <strong>Theme:</strong> Black and White<br>
        <strong>Date:</strong> February 14, 2026<br>
        <strong>Time:</strong> 3:00<br>
        <strong>Bring:</strong> Any foods and drinks also eco bag(lagayan ng dala)<br>
        <strong>Color:</strong> red, green, blue, yellow, pink,  violet, black, brown, white,  orange <br>
        <strong>Place:</strong> Hilltop 
        `;
    continueBtn.style.display = "none";
});
