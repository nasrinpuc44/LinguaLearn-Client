import { useContext } from "react";
import { Authcontext } from "../context/AuthProvider";

const GetUser = () => {
  const user = useContext(Authcontext);
  console.log("user", user);
  return user;
};

export default GetUser;
