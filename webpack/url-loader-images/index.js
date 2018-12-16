//console.log("Prueba");
import "./estilo.css";
import {messages} from  "./messaje.js";
import keysistImg from './keysist.png'
document.write(messages.firstMessage)
messages.delayMessage();
const img= document.createElement('img');

img.setAttribute('src',keysistImg);
img.setAttribute('width','30px');
document.body.append(img);
console.log("Prueba webpack confi external");