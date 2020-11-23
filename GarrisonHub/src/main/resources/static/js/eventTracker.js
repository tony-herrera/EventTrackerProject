window.addEventListener("load", function () {
  console.log("Script Loaded");
  init();
});

function init() {
  getVeteran();
  listVeterans();

  console.log("in init() still ");
}

function listVeterans() {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'api/veterans/');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let vetList = JSON.parse(xhr.responseText);
        displayVeteranList(vetList);
      } else {
        console.error("Vet Not Found.");
        displayError("Vet Not Found");
      }
    }
  };
  xhr.send();
}

function displayVeteranList(vetList) {
  var table = document.createElement("table");
  table.style.border = "solid";
  var head = document.createElement("thead");
  var headTr = document.createElement("tr");
  var headTr2 = document.createElement("tr");
  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");
  var th4 = document.createElement("th");
  var th5 = document.createElement("th");
  var th6 = document.createElement("th");
  var th7 = document.createElement("th");
  var th8 = document.createElement("th");

  th1.textContent = "ID";
  th2.textContent = "firstName";
  th3.textContent = "lastName";
  th4.textContent = "eaos";
  th5.textContent = "branch";
  th6.textContent = "";
  th7.textContent = "Number of veterans: ";
  th8.textContent = vetList.length;

  headTr.appendChild(th1);
  headTr.appendChild(th2);
  headTr.appendChild(th3);
  headTr.appendChild(th4);
  headTr.appendChild(th5);
  headTr2.appendChild(th6);
  headTr2.appendChild(th7);
  headTr2.appendChild(th8);
  head.appendChild(headTr2);
  head.appendChild(headTr);
  table.appendChild(head);
  var tBody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.textContent = vetList.length;
  for (let i = 0; i < vetList.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    td1.textContent = vetList[i].id;
    td2.textContent = vetList[i].firstName;
    td3.textContent = vetList[i].lastName;
    td4.textContent = vetList[i].eaos;
    td5.textContent = vetList[i].branch;
    tr.addEventListener("click", function (event) {
      event.preventDefault();
      getVeteran(vetList[i].id);
      tr.onclick = function (e) {
      showUpdateForm(veteran.Id);
    };
    });
    td1.style.border = "solid";
    td2.style.border = "solid";
    td3.style.border = "solid";
    td4.style.border = "solid";
    td5.style.border = "solid";
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tBody.appendChild(tr);
  }
  var dataTableDiv = document.createElement("div");
  table.appendChild(tBody);
  dataTableDiv.appendChild(table);
  document.body.insertBefore(dataTableDiv, document.body.children[1]);
}

// function displayVeteranList(list) {
//   table = document.createElement("table");
//   table.style.border = 'solid';
//   table.id = "vetList";
//   keys = ["id", "firstName", "lastName", "email", "eaos", "branch"];
//   let tBody = document.createElement("tBody");

//   for (var keys = 0; )
// let tBody = document.createElement("tBody");

//   let tr = document.createElement("tr");

//   for (const key of keys) {
//     let th = document.createElement("th");
//     th.textContent = key;
//     tr.appendChild(th);
//   }
//   table.appendChild(tr);

//   for (const veteran of list) {
//     let tr = document.createElement("tr");

//     // tr.onclick = function (e) {
//     //   showUpdateForm(veteran.Id);
//     // };

//     for (const key of keys) {
//       let td = document.createElement("td");

//       td.textContent = veteran[key];

//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
// }

function getVeteran(veteranId) {
  document.veteranForm.lookup.addEventListener("click", function (e) {
    e.preventDefault();
    let veteranId = document.veteranForm.veteranId.value;
    if (!isNaN(veteranId) && veteranId > 0) {
      getVeteran(veteranId);
    }
  });
  document.newVeteranForm.submit.addEventListener("click", function (e) {
    e.preventDefault();
    postNewVeteran(e);
  });
  console.log("getVeteran(): veteranId=" + veteranId);

  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/veterans/" + veteranId);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let veteran = JSON.parse(xhr.responseText);
        console.log(xhr.responseText);
        console.log(veteran);
        displayVeteran(veteran);
      }
    } else {
      // console.error('No Veteran by that Identifier Exists.');
      displayError("No Veteran by that Identifier Exists.");
    }
  };
  xhr.send();
}

function displayError(msg) {
  let div = document.getElementById("veteranData");
  div.textContent = msg;
}
function displayVeteran(veteran) {
  let dataDiv = document.getElementById("veteranData");
  dataDiv.textContent = "";
  let h1 = document.createElement("h1");
  h1.textContent = veteran.firstName;
  dataDiv.appendChild(h1);

  let h2 = document.createElement("h2");
  h2.textContent = veteran.lastName;
  dataDiv.appendChild(h2);

  h3 = document.createElement("h3");
  h3.textContent = veteran.email;
  dataDiv.appendChild(h3);

  h4 = document.createElement("h4");
  h4.textContent = veteran.phoneNumber;
  dataDiv.appendChild(h4);

  p = document.createElement("p");
  p.textContent = veteran.eaos;
  dataDiv.appendChild(p);

  let ul = document.createElement("ul");
  let li = document.createElement("li");

  li = document.createElement("li");
  li.textContent = veteran.dutyStation;
  ul.appendChild(li);
  li = document.createElement("li");
  li.textContent = veteran.dodSkillBridge;
  ul.appendChild(li);
  li = document.createElement("li");
  li.textContent = veteran.assignRecruiter;
  ul.appendChild(li);
  li = document.createElement("li");
  li.textContent = veteran.careerInterest;
  ul.appendChild(li);

  let bq = document.createElement("blockquote");
  bq.textContent = veteran.branch;
  dataDiv.appendChild(bq);
}

function postNewVeteran(e) {
  let form = document.newVeteranForm;
  let newVeteran = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phoneNumber: form.phoneNumber.value,
    eaos: form.eaos.value,
    dutyStation: form.dutyStation.value,
    dodSkillBridge: form.dodSkillBridge.value,
    assignRecruiter: form.assignRecruiter.value,
    careerInterest: form.careerInterest.value,
    branch: form.branch.value,
  };
  console.log(newVeteran);
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "api/veterans");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201 || xhr.status === 200) {
        let savedVeteran = JSON.parse(xhr.responseText);
        displayVeteran(savedVeteran);
      } else {
        console.error(
          "There was an error adding this service member, status=" + xhr.status
        );
        console.error(xhr.responseText);
        displayError(
          "There was an error adding this service member. Please Refer to the SOP."
        );
      }
    }
  };
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.send(JSON.stringify(newVeteran));
}

// xhr.open('PUT', api/garrisonhub/' + garrisonId);

// xhr.send(JSON.stringify(updateVeteran))

//xhr.open('DELETE', 'api/veterans/' + veteranId);
