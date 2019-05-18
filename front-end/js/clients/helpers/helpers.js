
class Helpers{
  constructor(indicator) {
    this.indicator = indicator;
  }
  static createElement(element){
  return document.createElement(element);
}

static appendElement(parent, element) {
  return parent.appendChild(element);
}

meetLength(field, minLength, maxLength) {
  if (field.value.length >= minLength && field.value.length <= maxLength) {
    this.setValid(field);
    return true;
  } else if (field.value.length < minLength) {
    this.setInvalid(
      field,
      `${field.name} must be  ${minLength} in length`
    );
    return false;
  } else {
    this.setInvalid(
      field,
      `${field.name} must be less than ${maxLength} in length `
    );
    return false;
  }
}

checkIfEmpty(field) {
  if (this.isEmpty(field.value.trim())) {
    // set field invalid
    this.setInvalid(field, `${field.name} is required`);
    return true;
  } else {
    // set field valid
    this.setValid(field);
    return false;
  }
}

checkIfOnlyLetters(field){
  if (/^[a-zA-Z ]+$/.test(field.value)) {
    this.setValid(field);
    return true;
  } else {
    this.setInvalid(field, `${field.name} must be letters`);
    return false;
  }

}

checkIfonlyNumbers(field){
 if(/^\d+$/.test(field.value)){
   this.setValid(field);
   return true;
 }else{
   this.setInvalid(field, `${field.name} must be numbers only`);
   return false;
 }
}

checkifEmail(field) {
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(field.value)) {
    this.setValid(field);
    return true;
  }else{
    this.setInvalid(field, `${field.name} must be a valid email`);
    return false;
  }
}
//password must contain upper case lower case and a password..........
containsCharacter(field) {
  if(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(field.value)){
    return true;
  }else{
    this.setInvalid(field, `${field.name} must contain upper lower case letter and a number`);
    return false;
  }
}

isEmpty(value) {
  if (value === '') return true;
  return false;
}

setInvalid(field, message) {
  field.classList.add('invalid');
  this.indicator.innerHTML = message;
 
}

  setValid(field) {
  field.classList.remove('invalid');
  this.indicator.innerHTML = '';
}

}

export default Helpers;