import { useSelector } from "react-redux";

import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";

function App() {
  // Select the 'isAuthenticated' state from the Redux store
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!isAuth && <Auth />}{" "}
      {/* Render the 'Auth' component if user is not authenticated */}
      {isAuth && <UserProfile />}{" "}
      {/* Render the 'UserProfile' component if user is authenticated */}
      <Counter />
    </>
  );
}

export default App;
