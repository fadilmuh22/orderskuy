import { FunctionComponent } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleCallback } from "@/api/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthGoogleButton: FunctionComponent = () => {
  const navigate = useNavigate();

  const { mutateAsync: googleCallback } = useGoogleCallback({
    onSuccess: () => {
      toast.success("Login successfully!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.error_message);
    },
  });

  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        if (!credentialResponse.credential) return;
        await googleCallback({ credential: credentialResponse.credential });
      }}
      shape="circle"
      onError={() => {
        toast.error("Google login failed");
      }}
    />
  );
};
