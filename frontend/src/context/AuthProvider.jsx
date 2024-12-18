import  { createContext, useContext, useState } from 'react'
import Cookie from 'js-cookie'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const initialUserState = Cookie.get('jwt') || localStorage.getItem('ChatApp');

    // parse the user data sotring in state.
    const [authUser, setAuthUser] = useState(
        initialUserState ? JSON.parse(initialUserState) : undefined
    );
  return (
    <div>
    <AuthContext.Provider value={[authUser, setAuthUser]} >{children}</AuthContext.Provider>
    </div>
  )
}

export const useAuth = () => useContext(AuthContext)