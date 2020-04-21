import React, { useEffect } from "react";
import { Icon } from "react-icons-kit";
import { send } from "react-icons-kit/fa/send";
import { ic_local_post_office } from "react-icons-kit/md/ic_local_post_office";
import { ic_settings_phone } from "react-icons-kit/md/ic_settings_phone";
import { clock } from "react-icons-kit/icomoon/clock";
import { mail4 } from "react-icons-kit/icomoon/mail4";
import { calendarO } from "react-icons-kit/fa/calendarO";
import { calendarMinusO } from "react-icons-kit/fa/calendarMinusO";
import { sun } from "react-icons-kit/feather/sun";
import { open } from "react-icons-kit/entypo/open";
import { lock } from "react-icons-kit/entypo/lock";
import { ic_watch } from "react-icons-kit/md/ic_watch";
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
    })
      .from(".card", 3.5, {
        rotationX: 90,
        transformOrigin: "50% 0",
        ease: "Back.easeOut",
        stagger: 0.78,
      })
      .to(".menu", { display: "flex" })
      .to(".canister", { height: "auto" });
  });

  let iPadCorrector = window.innerHeight === 768 ? true : false;
  return (
    <div className="container-fluid">
      <div className="contacts row justify-content-around mb-1">
        <div className="card col-6 col-lg-3" style={{ height: "34vh" }}>
          <div className="card-body text-center">
            <h4 className="h4">Zapraszamy do salonu JLC First</h4>
          </div>
          <img
            src="./img/store.png"
            className="card-img-bottom p-2 mb-1"
            style={{ maxHeight: "30vh" }}
            alt="Store"
          />
        </div>
        <div className="card col-6 col-lg-3" style={{ height: "34vh" }}>
          <ul className="list-group list-group-flush">
            {!iPadCorrector && (
              <li className="list-group-item">
                <Icon icon={ic_local_post_office} size={20} />
              </li>
            )}
            <li className="list-group-item">Kondratowicza 22 lok. U-07</li>
            <li className="list-group-item">03-285 Warszawa</li>
            <li className="list-group-item">
              <Icon icon={ic_settings_phone} size={20} /> salon/biuro
            </li>
            <li className="list-group-item">22 301-19-09</li>
            <li className="list-group-item">
              <Icon icon={ic_settings_phone} size={20} /> serwis
            </li>
            <li className="list-group-item">22 301-19-10</li>
          </ul>
        </div>
        <div className="card col-6 col-lg-3" style={{ height: "34vh" }}>
          <ul className="list-group list-group-flush">
            {!iPadCorrector && (
              <li className="list-group-item">
                {" "}
                <Icon icon={mail4} size={20} />
              </li>
            )}
            <li className="list-group-item">sklep@first.com.pl</li>
            <li className="list-group-item">
              {" "}
              <Icon icon={clock} size={20} />
            </li>
            <li className="list-group-item">
              Dni powszednie: <Icon icon={open} size={15} />
              10:00 - 18:00
              <Icon icon={lock} size={15} />
            </li>
            <li className="list-group-item">
              Sobota: <Icon icon={open} size={15} />
              10:00 - 14:00
              <Icon icon={lock} size={15} />
              <ul>
                <li className="list-group-item">
                  {" "}
                  <Icon icon={calendarMinusO} size={20} />
                  &nbsp; wyłączywszy okres lipiec-sierpień&nbsp;
                  <Icon icon={sun} size={8} />
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="card col-6 col-lg-3" style={{ height: "34vh" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <Icon icon={calendarO} size={20} />
              &nbsp;W roku 2020 salon będzie zamknięty&nbsp;
              <Icon icon={calendarMinusO} size={20} />
            </li>
            <li className="list-group-item">
              <Icon icon={lock} size={17} />
              &nbsp;11-12 czerwca
            </li>
            <li className="list-group-item">
              <Icon icon={lock} size={17} />
              &nbsp;2 listopada{" "}
            </li>
            <li className="list-group-item">
              w Wigilię i Sylwestra
              <ul>
                <li className="list-group-item">
                  <Icon icon={ic_watch} size={17} />
                  &nbsp;pracujemy do 14:00&nbsp;
                  <Icon icon={lock} size={15} />{" "}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-7">
          <iframe
            title="JLC Location"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJdSzbm77OHkcR0yA51KTy34w&key=AIzaSyBCALEbX93EI_SpXDvji3Q6JGuHDu63rBs"
            style={{
              border: 0,
              width: "100%",
              height: "50vh",
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
              placeholder="Treść wiadomości - wszelkie Państwa dane kontaktowe są opcjonalne. Jeżeli jest Państwa życzeniem, abyśmy się zwrotnie skontaktowali, to poprosimy o tego jasną deklarację i dane do kontaktu. Państwa danych nie przechowujemy. "
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
