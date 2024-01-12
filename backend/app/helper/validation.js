module.exports={
     isValidEmail : (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email);
      },
       isEmpty : (value) => {
        // Check if the value is null or undefined
        if (value === null || value === undefined) {
          return true;
        }
    },
     isNonEmptyString :(value) => {
        return typeof value === 'string' && value.trim().length > 0;
      },
      isValidMobileNumber :(number) => {
        // Check if the value is a non-empty string
        if (typeof number !== 'string' || number.trim().length === 0) {
          return false;
        }
      
        // Check if the value is a 10-digit numeric string
        const numericRegex = /^\d{10}$/;
        return numericRegex.test(number);
      },
}