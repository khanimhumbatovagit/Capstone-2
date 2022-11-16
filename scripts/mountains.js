
let mySelect = document.getElementById("dropMountain");

for (let i = 0; i < mountainsArray.length; i++) {
    const element = mountainsArray[i];
    // console.log(element.name)
    let option = document.createElement("option")
    option.innerText = element.name;
    mySelect.appendChild(option);  
}





// console.log(mySelect.length);
for (let i = 0; i < mySelect.length; i++) {
    const element = mySelect[i];
    // console.log(element)
   element.addEventListener("change", function(){
    console.log("lale")
   }) 
}

// for (let i = 0; i < mountainsArray.length; i++) {
//     const element = mountainsArray[i];
//     // console.log(element.img)

//     mySelect.addEventListener("change", function(){
//         let imageElement =  document.getElementById("mountainImage");
//         imageElement.src = `${"/images/"}`+ element.img;
//         // console.log(imageElement.src)
//      })
// }
















// mySelect.addEventListener("change", function(){
//    let imageElement =  document.getElementById("mountainImage");
// //    console.log(imageElement.src)
// })















  