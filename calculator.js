const inputDisplay = document.getElementById("display");

let calculate = (name) => {
  inputDisplay.innerText += name;
};

let clearAll = () => {
  inputDisplay.innerText = " ";
};
let deleteText = () => {
  inputDisplay.innerText = inputDisplay.innerText.slice(0, -1);
};

let result = () => {
  try {
    inputDisplay.innerText = eval(inputDisplay.innerText);
  } catch {
    inputDisplay.innerText = alert("Error please enter correct number");
  }
};

// const  calculate =  (number) => {
//      inputDisplay.innerText += number;
// }

//    const result = () =>{
//         try {
//           inputDisplay.innerText = eval(inputDisplay.innerText);
//         } catch (error) {
//           inputDisplay.innerText = "Error input vaild"
//         }
//    }

// const clearAll =  () => {
//      inputDisplay.innerText = ' ';
//  }

//  const deleteText =  () =>  {
//      inputDisplay.innerText =  inputDisplay.innerText.slice(0,-1)
//  }

// const button = Array.from(document.getElementsByClassName('button'));

//    button.map( button => {
//         button.addEventListener('click', (N) => {
//           switch(N.target.innerText){

//            case "AC":
//                     display.innerText = " ";
//            break;

//            case "DEL":
//                      if(display.innerText){
//                       display.innerText = display.innerText.slice(0,-1)
//                      }
//            break;

//            case"=":
//               try{
//                   display.innerText = eval(display.innerText);
//               }catch{
//                    display.innerText = "Error!"
//               }
//            break;

//            default:
//                 display.innerText += N.target.innerText;

//            break;
//           }
//         })
//    })
