import { Outlet, useNavigate } from "react-router-dom";
import MetaNavigation from "./components/MetaNavigaton";
import styles from "./App.module.css";
import { useEffect, useRef } from "react";
import { useUserStore } from "./store/useUserStore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoaderComponent from "./components/LoaderComponent";
import ErrorComponent from "./components/ErrorComponent";

function App() {
  // const isUserError = useUserStore((state) => state.isUserError);
  const isAuthorizedUserError = useUserStore(
    (state) => state.isAuthorizedUserError
  );
  // const isUserLoading = useUserStore((state) => state.isUserLoading);
  const isAuthorizedUserLoading = useUserStore(
    (state) => state.isAuthorizedUserLoading
  );

  // const getUser = useUserStore((state) => state.getUser);
  const getAuthorizedUser = useUserStore((state) => state.getAuthorizedUser);
  const setAuthorizedUser = useUserStore((state) => state.setAuthorizedUser);
  // const authorizedUserData = useUserStore((state) => state.authorizedUserData);

  const effectRun = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in

        setAuthorizedUser(user);
        // navigate("/");
        getAuthorizedUser(user);
      } else {
        setAuthorizedUser({});
        navigate("/accounts/login");
        // User is signed out
      }
      return user;
    });
    if (!effectRun.current) {
      return () => {
        effectRun.current = true;
      };
    }
  }, [navigate, getAuthorizedUser, setAuthorizedUser]);
  return (
    <div className={`${styles.app__wrapper}`}>
      {isAuthorizedUserLoading ? (
        isAuthorizedUserError ? (
          <ErrorComponent />
        ) : (
          <LoaderComponent />
        )
      ) : (
        <>
          <MetaNavigation />
          <Outlet />
        </>
      )}
    </div>
  );
}

export default App;
