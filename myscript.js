//Variable declaration
let array = ["A","A","B","B","C","C","D","D","E","E","F","F","G","G","H","H","I","I","J","J"]
let tiles = document.querySelectorAll(".tile")
let container = document.querySelector(".container")
let p = document.querySelector(".p")
let array2 = []
let genNumber = []
let checked = []
let holder = []
let id = []
let score = 0
let  variable = Math.floor(Math.random()*10)
p.addEventListener("click", pressOff)
//Random tiles' position generator
function generate(){
  for(var i=0;i<array.length;i++){
     while(genNumber.indexOf(variable) != -1){
        variable = Math.floor(Math.random()*array.length)
      }
        genNumber.push(variable)
    array2.push(array[variable])
   
tiles[i].innerHTML = array[variable]
tiles[i].setAttribute("id", i)
}
console.log(array2)
}
//keypressDetector
function pressOff(){
container.style.display = "block"
p.style.display = "none"
 playGame()
}

//Objectclick detector
function checkClicked(element){

  colored(element)
  if((id.indexOf(element.id)==-1)){
  id.push(element.id) 
  checked.push(element.innerHTML)
  }
  holder.push(element)
  
 if(checked.length == 2){
  if(checked[0]==checked[1]){
    
    score++
    checked = []
    holder = []
    id = []

    if(score == 10){
       let res = confirm("Do you want to play again?")
      res ? pressOff():container.innerHTML = "Thank you for playing"


       
     
      
    }
  }else{
    
  function recent(){
      holder[0].style.background = "black"
      element.style.background = "black"
      console.log(holder[0].innerHTML)
      console.log(element.innerHTML)
      holder = []
      id = []
    }
     console.log("No match")
    setTimeout(recent, 700)
    checked = []
  }
 }

}
//miscelleneous Function
function colored(ele){
  ele.style.background = "white"
}

function playGame(){
  generate()
}







































