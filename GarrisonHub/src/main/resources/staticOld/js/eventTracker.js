window.addEventListener("load", function () {
  console.log("Script Loaded");
  init();
});

function init() {
  document.newVeteranForm.submit.addEventListener("click", function (e) {
    e.preventDefault();

    let newVeteran = {};
    newVeteran.firstName = document.newVeteranForm.firstName.value;
    newVeteran.lastName = document.newVeteranForm.lastName.value;
    newVeteran.email = document.newVeteranForm.email.value;
    newVeteran.phoneNumber = document.newVeteranForm.phoneNumber.value;
    newVeteran.eaos = document.newVeteranForm.eaos.value;
    newVeteran.dutyStation = document.newVeteranForm.dutyStation.value;
    newVeteran.dodSkillBridge = document.newVeteranForm.dodSkillBridge.value;
    newVeteran.assignRecruiter = document.newVeteranForm.assignRecruiter.value;
    newVeteran.careerInterest = document.newVeteranForm.careerInterest.value;
    newVeteran.branch = document.newVeteranForm.branch.value;
    window.location = window.location;
    addOrUpdateVeteran(newVeteran);
  });

  document.veteranForm.lookup.addEventListener("click", function (e) {
    e.preventDefault();
    let veteranId = document.veteranForm.veteranId.value;
    if (!isNaN(veteranId) && veteranId > 0) {
      getVeteran(veteranId);
    }
  });
  listVeterans();

  console.log("in init() still ");
}

function listVeterans() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/veterans/");

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
  th2.textContent = "FirstName";
  th3.textContent = "LastName";
  th4.textContent = "EAOS";
  th5.textContent = "Branch";
  th6.textContent = "";
  th7.textContent = "Number of Veterans: ";
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
        showUpdateForm(vetList[i].id);
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

function addOrUpdateVeteran(veteran) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "api/veterans");
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        let createVeteran = JSON.parse(xhr.responseText);
        displayVeteran(createVeteran);
      }
    } else {
      displayError("Cannot Add Veteran to Database.");
    }
  };
  createVeteran = JSON.stringify(veteran);
  xhr.send(createVeteran);
}

function getVeteran(veteranId) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/veterans/" + veteranId);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let veteran = JSON.parse(xhr.responseText);
        // console.log(xhr.responseText);
        // console.log(veteran);
        displayVeteran(veteran);
      }
    } else {
      // console.error("No Veteran by that Identifier Exists.");
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

  var updateVeteranForm = document.createElement("form");

  var veteranFirstName = document.createElement("input");
  veteranFirstName.name = "firstName";
  veteranFirstName.type = "text";
  veteranFirstName.value = veteran.firstName;

  var veteranLastName = document.createElement("input");
  veteranLastName.name = "lastName";
  veteranLastName.type = "text";
  veteranLastName.value = veteran.lastName;

  var veteranEmail = document.createElement("input");
  veteranEmail.name = "Email";
  veteranEmail.type = "text";
  veteranEmail.value = veteran.email;

  var veteranPhoneNumber = document.createElement("input");
  veteranPhoneNumber.name = "phoneNumber";
  veteranPhoneNumber.type = "text";
  veteranPhoneNumber.value = veteran.phoneNumber;

  var veteranEAOS = document.createElement("input");
  veteranEAOS.name = "EAOS";
  veteranEAOS.type = "text";
  veteranEAOS.value = veteran.eaos;

  var veterandutyStation = document.createElement("input");
  veterandutyStation.name = "dutyStation";
  veterandutyStation.type = "text";
  veterandutyStation.value = veteran.dutyStation;

  var veterandodSkillBridge = document.createElement("input");
  veterandodSkillBridge.name = "dodSkillBridge";
  veterandodSkillBridge.type = "text";
  veterandodSkillBridge.value = veteran.dodSkillBridge;

  var veteranAssignRecruiter = document.createElement("input");
  veteranAssignRecruiter.name = "assignRecruiter";
  veteranAssignRecruiter.type = "text";
  veteranAssignRecruiter.value = veteran.assignRecruiter;

  var veterancareerInterest = document.createElement("input");
  veterancareerInterest.name = "careerInterest";
  veterancareerInterest.type = "text";
  veterancareerInterest.value = veteran.careerInterest;

  var veteranBranch = document.createElement("input");
  veteranBranch.name = "branch";
  veteranBranch.type = "text";
  veteranBranch.value = veteran.branch;

  updateVeteranForm.appendChild(veteranFirstName);
  updateVeteranForm.appendChild(veteranLastName);
  updateVeteranForm.appendChild(veteranEmail);
  updateVeteranForm.appendChild(veteranPhoneNumber);
  updateVeteranForm.appendChild(veteranEAOS);
  updateVeteranForm.appendChild(veterandutyStation);
  updateVeteranForm.appendChild(veterandodSkillBridge);
  updateVeteranForm.appendChild(veteranAssignRecruiter);
  updateVeteranForm.appendChild(veterancareerInterest);
  updateVeteranForm.appendChild(veteranBranch);

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete this Veteran";
  dataDiv.appendChild(deleteButton);
  deleteButton.addEventListener("click", function (e) {
    window.location = window.location;
    deleteVeteran(veteran.id);
  });

  var updateButton = document.createElement("button");
  updateButton.innerHTML = "Update this Veteran";
  dataDiv.appendChild(updateButton);
  updateButton.addEventListener("click", function (e) {
    e.preventDefault();

    var updatedVeteran = {};
    updatedVeteran.id = veteran.id;
    updatedVeteran.firstName = updateVeteranForm.firstName.value;
    updatedVeteran.lastName = updateVeteranForm.lastName.value;
    updatedVeteran.email = updateVeteranForm.Email.value;
    updatedVeteran.phoneNumber = updateVeteranForm.phoneNumber.value;
    updatedVeteran.eaos = updateVeteranForm.EAOS.value;
    updatedVeteran.dutyStation = updateVeteranForm.dutyStation.value;
    updatedVeteran.dodSkillBridge = updateVeteranForm.dodSkillBridge.value;
    updatedVeteran.assignRecruiter = updateVeteranForm.assignRecruiter.value;
    updatedVeteran.careerInterest = updateVeteranForm.careerInterest.value;
    updatedVeteran.branch = updateVeteranForm.branch.value;
    window.location = window.location;
    updateTheVeteran(updatedVeteran);
  });
  dataDiv.appendChild(updateVeteranForm);
}

function postNewVeteran(e) {
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

function deleteVeteran(veteranId) {
  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", "api/veterans/" + veteranId);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 204) {
        var dataDiv = document.getElementById("veteranInformation");
        dataDiv.textContent = "Veteran Has Been Removed From the System";
      }
    } else {
      displayError("Veteran Has Been Removed From the System");
    }
  };
  xhr.send();
}

function updateTheVeteran(updatedVeteran) {
  let xhr = new XMLHttpRequest();
  xhr.open("PUT", "api/veterans/" + updatedVeteran.id);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201 || xhr.status === 200) {
        let savedVeteran = JSON.parse(xhr.responseText);
        displayVeteran(savedVeteran);
      } else {
        console.error(
          "There was an error updating this service member, status=" +
            xhr.status
        );
        console.error(xhr.responseText);
        displayError(
          "There was an error adding this service member. Please Refer to the SOP."
        );
      }
    }
  };

  savedVeteran = JSON.stringify(updatedVeteran);

  xhr.send(savedVeteran);
}
