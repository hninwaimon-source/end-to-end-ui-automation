const constants = {
    
          milliseconds: {
            waitTimeMedium: 2000,
          },

          urls: {
            base: process.env.BASE_URL as string,
          },

          accounts: {
            main: {
              email: process.env.USER_EMAIL as string,
              password: process.env.USER_PASSWORD as string,
            },
          },


};
        
export default constants;
        