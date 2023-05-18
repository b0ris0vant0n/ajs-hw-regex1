export default class Validator {
    constructor(name) {
      this.name = name;
    }
  
    validateUsername() {
      const checkingSymbols = /^[a-z][\da-z_-]*[a-z]$/i.test(this.name);
      const checkingDigits = !(/\d{4,}/.test(this.name));
  
      if (checkingSymbols && checkingDigits) {
        return true;
      }
  
      return false;
    }
  }