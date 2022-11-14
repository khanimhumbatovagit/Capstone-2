var namesInputs = document.getElementsByName("test");
// console.log(namesInputs)

var btn = document.getElementById("mybtn");
btn.addEventListener("click", function () {
 

  // let all = document.getElementById("all");
  // let state = document.getElementById("myLocation");
  // console.log(state)
  // let searchType = document.getElementById("type");
  // console.log(searchType);
  // if (all.checked) {
  //   state.style.hidden = true;
  //   searchType.style.hidden = true;
  // }
});

// function fun() {
//   let all = document.getElementById("all");
//   let state = document.getElementById("myLocation");
//   let searchType = document.getElementById("type");
//   if (all.checked) {
//     state.style.visibility = "hidden";
//     searchType.style.visibility = "hidden";
//   }
// }

//for parkType

// let list = document.getElementById("myList");
// console.log(list);

// parkTypesArray.forEach((item) => {
// let li = document.createElement("li");
// li.innerText = item;
// list.appendChild(li);
// li.addEventListener("click", function () {
//       console.log(li.innerText)

// })

// });

//table
let table = document.getElementById("tableBody");
function GetAllData() {
  for (let nationalPark of nationalParksArray) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = nationalPark.LocationID;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = nationalPark.LocationName;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = nationalPark.Address;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.textContent = nationalPark.City;
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.textContent = nationalPark.State;
    tr.appendChild(td5);

    let td6 = document.createElement("td");
    td6.textContent = nationalPark.ZipCode;
    tr.appendChild(td6);

    let td7 = document.createElement("td");
    td7.textContent = nationalPark.Phone;
    tr.appendChild(td7);

    let td8 = document.createElement("td");
    td8.textContent = nationalPark.Fax;
    tr.appendChild(td8);

    let td9 = document.createElement("td");
    td9.textContent = nationalPark.Latitude;
    tr.appendChild(td9);

    let td10 = document.createElement("td");
    td10.textContent = nationalPark.Longitude;
    tr.appendChild(td10);

    let td11 = document.createElement("td");
    td11.textContent = nationalPark.Location.coordinates;
    tr.appendChild(td11);

    let td12 = document.createElement("td");
    td12.textContent = nationalPark.Location.type;
    tr.appendChild(td12);

    table.appendChild(tr);

    
  }

  
}

var mybtn2 = document.getElementById("mybtn");
mybtn2.addEventListener("click", function () {
  var mylocated = document.getElementById("myLocation");
  var mytyped = document.getElementById("type");
  mylocated.style.visibility = "hidden";
  mytyped.style.visibility = "hidden";
});

//----------------------searc for location----------------------------//

function GetAllFilteredData(state) {
  var filteredArray = nationalParksArray.filter((arrayValue) =>
    arrayValue.State.includes(state)
  );
  for (let nationalPark of filteredArray) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = nationalPark.LocationID;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = nationalPark.LocationName;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = nationalPark.Address;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.textContent = nationalPark.City;
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.textContent = nationalPark.State;
    tr.appendChild(td5);

    let td6 = document.createElement("td");
    td6.textContent = nationalPark.ZipCode;
    tr.appendChild(td6);

    let td7 = document.createElement("td");
    td7.textContent = nationalPark.Phone;
    tr.appendChild(td7);

    let td8 = document.createElement("td");
    td8.textContent = nationalPark.Fax;
    tr.appendChild(td8);

    let td9 = document.createElement("td");
    td9.textContent = nationalPark.Latitude;
    tr.appendChild(td9);

    let td10 = document.createElement("td");
    td10.textContent = nationalPark.Longitude;
    tr.appendChild(td10);

    let td11 = document.createElement("td");
    td11.textContent = nationalPark.Location.coordinates;
    tr.appendChild(td11);

    let td12 = document.createElement("td");
    td12.textContent = nationalPark.Location.type;
    tr.appendChild(td12);

    table.appendChild(tr);
  }
}
let mySelect = document.getElementById("myLocation");
console.log(mySelect);

locationsArray.forEach((item) => {
  let option = document.createElement("option");
  option.innerText = item;
  mySelect.appendChild(option);
  option.addEventListener("click", function () {
    console.log(option.innerText);
  });
});

function getLocation() {
  var selectedtLocation = document.getElementById("myLocation");
  const value = selectedtLocation.value;
  console.log(value);

  var tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  GetAllFilteredData(value);
}

//------------------------------search for type-----------------------///

function GetAllFilteredType(type) {
  var filteredType = nationalParksArray.filter((arrayValueType) =>
    arrayValueType.LocationName.includes(type)
  );
  for (let nationalPark of filteredType) {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = nationalPark.LocationID;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.textContent = nationalPark.LocationName;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.textContent = nationalPark.Address;
    tr.appendChild(td3);

    let td4 = document.createElement("td");
    td4.textContent = nationalPark.City;
    tr.appendChild(td4);

    let td5 = document.createElement("td");
    td5.textContent = nationalPark.State;
    tr.appendChild(td5);

    let td6 = document.createElement("td");
    td6.textContent = nationalPark.ZipCode;
    tr.appendChild(td6);

    let td7 = document.createElement("td");
    td7.textContent = nationalPark.Phone;
    tr.appendChild(td7);

    let td8 = document.createElement("td");
    td8.textContent = nationalPark.Fax;
    tr.appendChild(td8);

    let td9 = document.createElement("td");
    td9.textContent = nationalPark.Latitude;
    tr.appendChild(td9);

    let td10 = document.createElement("td");
    td10.textContent = nationalPark.Longitude;
    tr.appendChild(td10);

    let td11 = document.createElement("td");
    td11.textContent = nationalPark.Location.coordinates;
    tr.appendChild(td11);

    let td12 = document.createElement("td");
    td12.textContent = nationalPark.Location.type;
    tr.appendChild(td12);

    table.appendChild(tr);
  }
}
let mySelectedType = document.getElementById("type");
console.log(mySelectedType);

parkTypesArray.forEach((item) => {
  let option = document.createElement("option");
  option.innerText = item;
  mySelectedType.appendChild(option);
  option.addEventListener("click", function () {
    console.log(option.innerText);
  });
});

function getType() {
  var selectedtType = document.getElementById("type");
  const value = selectedtType.value;
  console.log(value);

  var tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  GetAllFilteredType(value);
}


//-------------//////--------------------------

var mybtn2 = document.getElementById("mybtn");
mybtn2.addEventListener("click", function () {
  var mylocated = document.getElementById("myLocation");
  var mytyped = document.getElementById("type");
  mylocated.style.visibility = "hidden";
  mytyped.style.visibility = "hidden";
});





