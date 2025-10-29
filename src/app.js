import "bootstrap";
import "./style.css";

window.onload = function() {
  let who = ['The dog', 'My grandma', 'The amazon delivery guy', 'A meteorite'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the computer', 'my house'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was playing'];

  const randomNumber = arr => {
    return Math.floor(Math.random() * arr.length)
  }
  let excuse = `${who[randomNumber(who)]} ${action[randomNumber(action)]} ${what[randomNumber(what)]} ${when[randomNumber(when)]}`
   console.log(excuse)
  //write your code here
  document.getElementById("excuse").innerHTML = excuse;
  

};
