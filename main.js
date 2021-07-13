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
}