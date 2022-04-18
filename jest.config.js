module.exports = {
      testIgnorePattern:["/node_modules"],
      transform:{
        "^.+\\.(js|jsx|ts|tsx)$ ":"<rootDir>/node_modules/babel-jest",
  

      },
        preset: "react-native" ,
        setupFilesAfterEnv: [
          "@testing-library/jest-native/extend-expect",
          "jest-styled-components",
         
         
        ],

        
       
    
      

}