
let mySelect = document.getElementById("dropMountain");

for (let i = 0; i < mountainsArray.length; i++) {
    const element = mountainsArray[i];
    // console.log(element.name)
    let option = document.createElement("option")
    option.innerText = element.name;
    mySelect.appendChild(option);  
}

    

// console.log(mySelect.selectedIndex);

mySelect.addEventListener("change", function(){
    // for images
  var myIndex =  mySelect.options[mySelect.selectedIndex].index
  let imageElement =  document.getElementById("mountainImage");
  imageElement.setAttribute("src", `${"/images/"}`+ mountainsArray[myIndex].img);

//    for h3
   let myname = document.getElementById("myName");
   myname.innerText = mountainsArray[myIndex].name

//    for myp
  let myp = document.getElementById("myp");
  myp.innerText = mountainsArray[myIndex].elevation + "," + mountainsArray[myIndex].effort

//   for desc 
 let mydesc = document.getElementById("desc");
 mydesc.innerText = mountainsArray[myIndex].desc;
 })






















