import React, { useState, useContext, createContext } from 'react'


export const AuthContext = createContext<any>(null)

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvaider = ({children}: any) => {

    const [auth, setAuth] = useState(false)

    const toggle = () => setAuth(!auth)

    return (
          <AuthContext.Provider value={{
            visible: auth,
            toggle
        }}>
            { children }
        </AuthContext.Provider>

    )
}