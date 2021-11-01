import { Fragment } from "react";
import MainNav from "./main-nav";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNav />
      <div className="container">
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;
