import React from "react";
import Button from "../components/button";
import { login, logout } from "../lib/auth";

const RoginPage = () => {
  return (
    <div>
      <h1>ログイン</h1>
      <Button type="button" onClick={login}>
        ログインする
      </Button>

      <Button type="button" onClick={logout}>
        ログアウト
      </Button>
    </div>
  );
};

export default RoginPage;
