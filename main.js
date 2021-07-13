// Spacer function requires multiple functions within it. 
// spacer function accepts a string
  // the first 'word' in string is the function, followed by the input needed to be added to function
  // spacer function splits the string into array, seperateor ' '.
    // If array has only one value, assume 


function findEmployeeByName(name, employeeArr) {
  for (let i = 0; i < employeeArr.length; i++) {
    let employeeObj = employeeArr[i];
    for (let key in employeeObj) {
      if (employeeObj.key = name) return employeeObj;
      else continue;
    }
  }
  return "Name could not be found in database.";
}

function findManagerFor(employeeObj, employeeArr){
  for (let i = 0; i < employeeArr.length; i++) {
    let managerObj = employeeArr[i];
    if (managerObj.id === employeeObj.managerId) return managerObj;
    else continue;
  }
  return "Manager of ${employeeObj.name} could not be found in database.";
}

function findCoworkersFor(employeeObj, employeeArr){
  let coworkersArr = [];
  for (let i = 0; i < employeeArr.length; i++) {
    let coworkerObj = employeeArr[i];
    if (coworkerObj.managerId = employeeObj.managerId) coworkersArr.push(coworkerObj);
    else continue;
  }
  return (coworkersArr.length) ? coworkersArr : "Coworkers of ${employeeObj.name} could not be found in database.";
}