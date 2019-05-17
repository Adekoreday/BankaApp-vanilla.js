import helpers from '../helpers/helpers';


class Validators {
  static ValidateTextInput(field, indicator) {
    //check if its not empty
    const myhelpers = new helpers(indicator);
  if (myhelpers.checkIfEmpty(field)) return;
  // is if it has only letters
  if (!myhelpers.checkIfOnlyLetters(field)) return;
  return true;
  }

 static validatePassword(password, indicator) {
  // Empty check
  const myhelpers = new helpers(indicator);
  if (myhelpers.checkIfEmpty(password)) return;
  // Must of in certain length
  if (!myhelpers.meetLength(password, 5, 100)) return;
  if (!myhelpers.containsCharacter(password)) return;
  return true;
}

static validateAccountNumberOnly(field,  indicator){
  const myhelpers = new helpers(indicator);  
  if(!myhelpers.checkIfonlyNumbers(field)) return;   
    if (!myhelpers.meetLength(field, 10, 10)) return;
  return true;
}

static validatetNumberOnly(field,  indicator){
  const myhelpers = new helpers(indicator);  
  if(!myhelpers.checkIfonlyNumbers(field)) return;   
    if (!myhelpers.meetLength(field, 1, 20)) return;
  return true;
}





static validateEmail(field, indicator) {
   const myhelpers = new helpers(indicator);
    if (myhelpers.checkIfEmpty(field)) return;
    if(!myhelpers.checkifEmail(field)) return;

    return true;
}

static validateConfirmPassword(password, confirmPassword, indicator) {
   const myhelpers = new helpers(indicator);
  if (password.className === 'invalid') {
    myhelpers.setInvalid(confirmPassword, 'Password must be valid');
    return;
  }
  // If they match
  if (password.value !== confirmPassword.value) {
    myhelpers.setInvalid(confirmPassword, 'Passwords must match');
    return;
  } else {
    myhelpers.setValid(confirmPassword);
  }
  return true;
}
}
export default Validators;