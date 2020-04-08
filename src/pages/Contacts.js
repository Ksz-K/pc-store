import React, { useEffect } from "react";
import { Icon } from "react-icons-kit";
import { send } from "react-icons-kit/fa/send";
import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin, Timeline);

const Contacts = () => {
  useEffect(() => {
    let tl = new Timeline();
    CSSRulePlugin.defaultTransformPerspective = 900;
    tl.from(".formName, .form2send", 3.5, {
      rotationX: 90,
      rotationY: 90,
      transformOrigin: "50% 0",
      ease: "Back.easeOut",
    }).to(".menu", { display: "flex" });
  });
  return (
    <div className="container-fluid">
      <div>
        <h3 className="h3">
          <strong>Lokalizacja salonu JLC First</strong>
        </h3>
      </div>
      <div className="row">
        <div className="col-md-7">
          <iframe
            title="JLC Location"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJdSzbm77OHkcR0yA51KTy34w&key=AIzaSyBCALEbX93EI_SpXDvji3Q6JGuHDu63rBs"
            style={{
              border: 0,
              width: "100%",
              height: "80vh",
              frameborder: 0,
            }}
          />
        </div>
        <div className="col-md-5">
          <h4 className="h4 formName">
            <strong>Formularz kontaktowy</strong>
          </h4>
          <form
            className="form2send"
            method="POST"
            action="https://formspree.io/kszk@kszk.pl"
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Imię"
                name="imie"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="E-mail"
                name="e-mail"
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                className="form-control"
                placeholder="Telefon"
                name="telefon"
              />
            </div>
            <textarea
              className="form-control"
              cols="30"
              rows="10"
              placeholder="Treść wiadomości"
              name="Tresc wiadomosci"
            />
            <button
              type="submit"
              className="btn btn-outline-primary text-uppercase mt-2"
            >
              Wyślij &nbsp; <Icon icon={send} size={12} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
