function findEmployeeByName (name, employeeArr) {
  for (let i = 0; i < employeeArr.length; i++) {
    let employeeObj = employeeArr[i];
    for (let key in employeeObj) {
      if (employeeObj.key = name) return employeeObj;
      else continue;
    }
  }
  return "Name could not be found in database.";
}

function findManagerFor (employeeObj, employeeArr){
  for (let i = 0; i < employeeArr.length; i++) {
    let managerObj = employeeArr[i];
    if (managerObj.id === employeeObj.managerId) return managerObj;
    else continue;
  }
  return "Manager of ${employeeObj.name} could not be found in database.";
}

function findCoworkersFor (employeeObj, employeeArr){
  let coworkersArr = [];
  for (let i = 0; i < employeeArr.length; i++) {
    let coworkerObj = employeeArr[i];
    if (coworkerObj.managerId = employeeObj.managerId) coworkersArr.push(coworkerObj);
    else continue;
  }
  return (coworkersArr.length) ? coworkersArr : "Coworkers of ${employeeObj.name} could not be found in database.";
}

function findManagementChainForEmployee (employeeObj, employeeArr) {
  let chainArr = [];

  if (!employeeObj.managerId) return employeeObj;

  for (let i = 0; i < employeeArr.length; i++) {
    let selectedEmployeeObj = employeeArr[i];
    if (selectedEmployeeObj.id === employeeObj.managerId) {
      chainArr.push(findManagementChainForEmployee(selectedEmployeeObj, employeeArr));
    }
  }

  return chainArr.reverse();
}


function generateManagementTree (employeeArr) {
  employeeArr.forEach(employeeObj => employeeObj.reports = []);

  const ceo = employeeArr.find(employeeObj => !employeeObj.managerId);
  const ceoArrIdx = employeeArr.indexOf(ceo);
  employeeArr = employeeArr.splice(ceoArrIdx, 1);
  let treeObj = {ceo};

  while (employeeArr.length > 1) {
    for (let i = 0; i < employeeArr.length; i++) {
      let employeeObj = employeeArr[i];
      for (let key in treeObj) {
        if (employeeObj.managerId === treeObj[key].id) {
          treeObj[key].reports.push(employeeObj);
          employeeArr = employeeArr.splice(i, 1);
        }
      }
    }
  }

}

function displayManagementTree (treeOfEmployees) {
}