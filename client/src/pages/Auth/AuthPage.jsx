import { useState } from "react";
import HeaderLayout from "../../layouts/Header/HeaderLayout";
import Login from "../../components/Login/Login";
import Button from "../../components/Button/Button";

const pageTitles = {
  title: {
    login: "Login",
    register: "Register",
  },
  subTitle: {
    option1: "Already registered",
  },
};

const AuthPage = () => {
  const [activeAction, setActiveAction] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <HeaderLayout title={"Login"} subTitle={"Already registered? you can Login"}>
        <Button></Button>
      </HeaderLayout>
      <Login
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </>
  );
};

export default AuthPage;
