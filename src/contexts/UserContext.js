import React from 'react'

const UserContext = React.createContext({
    pinballer_user_id: null,
    user_first_name: null,
    user_last_name: null,
    user_email: null,
    admin_access: false
})

export const UserProvider = UserContext.Provider
export const UserConsumer = UserContext.Consumer
export default UserContext