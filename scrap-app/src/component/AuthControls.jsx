import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

export default function AuthControls() {
  const { instance, accounts } = useMsal();
  const isAuth = useIsAuthenticated();

  const login = () => instance.loginPopup(loginRequest);
  const logout = () => instance.logoutPopup({ postLogoutRedirectUri: window.location.origin });

  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      {isAuth ? (
        <>
          <span>Signed in as <b>{accounts[0]?.username}</b></span>
          <button className="btn btn-outline-secondary" onClick={logout}>Sign out</button>
        </>
      ) : (
        <button className="btn btn-primary" onClick={login}>Sign in with Microsoft</button>
      )}
    </div>
  );
}
