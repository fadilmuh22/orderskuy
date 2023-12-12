import { FunctionComponent } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-toastify";
import { GoogleCallbackPayload, LoginResponse } from "@/api/auth/types";

type Props = {
  googleCallback: (payload: GoogleCallbackPayload) => Promise<LoginResponse>;
};

export const AuthGoogleButton: FunctionComponent<Props> = ({
  googleCallback,
}) => {
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
