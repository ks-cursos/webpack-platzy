import renderToDOM from "./rederToDom";
import  makeMessage  from "./makeMessage";
const waitTime= new Promise(
    (sucess,fail)=>{
        setTimeout(() => {
            sucess('Han pasado 3 segundos')
        }, 3000);
    }
);
var messages={
    firstMessage:'Hola mundo desde js',
    delayMessage:async ()=>{
        const message=await waitTime;
        const element=makeMessage(message);
        renderToDOM(element);
    } 
}
export {messages};