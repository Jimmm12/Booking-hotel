import { useContext, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import Place from "./Place";
import AccountNav from "../AccountNav";
export default function Profile() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser, setReady } = useContext(UserContext);
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "profile";
  }
  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <AccountNav/>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email}) <br />
          <button onClick={logout} className="primary max-w-sm mt-2">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <Place />}
    </div>
  );
}
