import React, { Fragment, useEffect } from "react";
import { withRouter } from "react-router-dom";
import gsap from "gsap";
import POSslider from "../components/POSslider";
import POSoffer from "../components/POSoffer";

const PointOfSales = ({ history }) => {
  useEffect(() => {
    gsap.to(".canister", { height: "auto" });
    gsap.to(".menu", { display: "flex" });
  }, []);

  useEffect(() => {
    history.listen(() => {
      window.location.reload();
    });
  }, [history]);

  return (
    <Fragment>
      <POSslider />
      <POSoffer />
    </Fragment>
  );
};

export default withRouter(PointOfSales);
