let eldollarInp = document.querySelector("#dollarInp");
let elsomInp = document.querySelector("#somInp");
let replace = document.querySelector("#reorder");
let elKurs = document.querySelector("#kurs");
let calcBtn = document.querySelector("#calc");
let elList = document.querySelector(".list");
let kurs = 11400;
elKurs.textContent =`1$ = ${kurs}` ;

calcBtn.addEventListener("click", () =>{
  let dollarvl = eldollarInp.value.trim();
  let somvl = elsomInp.value.trim();
  
  let result = dollarvl * kurs;

  elsomInp.value = result;   
  let dolNum = Number(dollarvl)
  if (isNaN(dolNum)){
    eldollarInp.style.borderColor = "red";

    return
  }
  let somNum = Number(somvl)
  if (isNaN(somNum)){
    elsomInp.style.borderColor = "red";

    return
  }

  let newLi = document.createElement("li");
  let newParagraph = document.createElement("p");
  let newPrSecond = document.createElement("p");
  let newPrThird = document.createElement("p");
  newParagraph.textContent = `Dollar : ${dollarvl}`;
  newPrThird.textContent = `Sum : ${result}`
  newLi.append(newParagraph,newPrSecond,newPrThird);

  elList.appendChild(newLi);

})

