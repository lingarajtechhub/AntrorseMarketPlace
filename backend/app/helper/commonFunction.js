
module.exports={
    generateOTP :() => {
        // Generate a random 6-digit number
        const otp = Math.floor(100000 + Math.random() * 900000);
      
        return otp.toString(); // Convert the number to a string
      },

      // hashPassword: async function (plainTextPassword) {
      //   const saltRounds = 10;
      
      //   try {
      //     const hash = await bcrypt.hash(plainTextPassword, saltRounds);
      //     // Store the 'hash' value in your database
      //     console.log('Hashed Password:', hash);
      //     return hash;
      //   } catch (error) {
         
      //     throw error; // You might want to handle this error in a meaningful way in your application
      //   }
      // }
}