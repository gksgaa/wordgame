

const words = [
    {word: "aroma", hint: "Pleasing smell"},
    {word: "happy", hint: " A feeling of contentment and joy"},
    {word: "run", hint: "To move quickly on foot"},
    {word: "pepper", hint:"Salt's partner"},
    {word: "halt", hint:"put a stop to"},
    {word: "jump", hint:"Rise suddenly "},
    {word: "talk", hint: "To communicate verbally"},
    {word: "shuffle", hint:"Mix cards up "},
    {word: "combine", hint: "Add; Mix"},
    {word: "chaos", hint:"Total disorder"},
    {word: "small", hint: "Tiny or little"},
    {word: "disturb", hint:"Interrupt; upset "},
    {word: "shift", hint:"Move; Period of word"},
    {word: "machine", hint: "Device or appliance"},
    { word: "python", hint: "programming language" },
    { word: "guitar", hint: "musical instrument" },
    { word: "aim", hint: "purpose or intention" },
    { word: "venus", hint: "planet in our solar system" },
    { word: "gold", hint: "precious metal" },
    { word: "ebay", hint: "online shopping site" },
    { word: "golang", hint: "programming language" },
    { word: "coding", hint: "related to programming" },
    { word: "matrix", hint: "sci-fi movie" },
    { word: "bugs", hint: "programming issues" },
  ];

const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span")
timeText = document.querySelector(".time span")
inputField = document.querySelector("input")
refreshBtn = document.querySelector(".refresh")
checkBtn = document.querySelector(".check")

const answer = document.getElementById('answer');
let correctWord;



const initGame = () => {
    answer.focus();
    let randomObj = words [ Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for(let i = wordArray.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLocaleLowerCase();
    inputField.value = "";
    inputField.setAttribute("Maxlength", correctWord.length)
    console.log(randomObj);
}
initGame();


const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase();
    if(!userWord) 
        {return alert("Please enter your guess to check word");
        }
    else
        if(userWord !== correctWord ){
            return alert(`oops! ${userWord} is not a correct word`); 
        }

    alert(`congrats ${userWord.toUpperCase()} is the correct word`);
    initGame();
}
refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);

