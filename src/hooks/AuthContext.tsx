import React, {createContext, useContext,  ReactNode} from 'react';

interface AuthProviderProps{
    children:ReactNode;
}

interface User{
    id:string;
    name:string;
    email:string;
    photo?:string;
}

interface IAuthContextDate {
    user:User;

}

 const AuthContext = createContext({} as IAuthContextDate);

function AuthProvider({children} :AuthProviderProps){

    const user ={
        id:'12344',
        name:' Fabricio Tamai',
        email:'fabriciotamai@gmail.com'
    }
    return (
      <AuthContext.Provider value={{
          user

      }}>
          {children}
          
    
      </AuthContext.Provider>

    )
  }

  function useAuth(){
      const context = useContext(AuthContext);
      return context;
  }

  export {AuthProvider , useAuth}
 