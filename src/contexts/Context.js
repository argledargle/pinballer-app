import React from "react";

const Context = React.createContext({
  pinballer_user_id: null,
  user_nick_name: null,
  admin_access: false,
});

export default Context;
