const genBtn = document.querySelector(".btn1");
const copyBtn = document.querySelector(".btn2");
const addBtn = document.querySelector(".btn3");

genBtn.addEventListener("click", () => genPassword());
copyBtn.addEventListener("click", () => copyPassword());

function genPassword(){
 let dot = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()~.,;:}{][shecodeafricaudemecomfort";
 passwordLength = 10;
 password="";

for(let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * dot.length);
    password += dot.substring(randomNumber, randomNumber + 1);
}
document.getElementById("password").value = password;
}

function copyPassword(){
    let copyText = document.getElementById("password")
    copyText.select();
    document.execCommand("copy")
}