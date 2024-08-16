import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
