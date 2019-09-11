import React from "react";

const UserContext = React.createContext({
  pinballer_user_id: null,
  user_first_name: null,
  user_last_name: null,
  user_email: null,
  admin_access: false,

//   addpinballer_user_id: () => {},
//   adduser_first_name: () => {},
//   adduser_last_name: () => {},
//   adduser_email: () => {},
//   addadmin_access: () => {}
});

export default UserContext;
