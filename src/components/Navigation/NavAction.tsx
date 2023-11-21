import { useState } from "react";

export const NavAction = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      {!isLogin && (
        <div>
          <div
            onClick={() => {
              setIsLogin(true);
            }}
            className="dark:text-white text-black cursor-pointer"
          >
            Login
          </div>
        </div>
      )}
      {isLogin && (
        <div>
          <div
            onClick={() => {
              setIsLogin(false);
            }}
            className="dark:text-white text-black cursor-pointer"
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};
