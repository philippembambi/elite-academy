import * as React from "react";
import { ROUTES } from "../../../common/constants";
import ButtonPrimary from "../../Button/button-primary";
import Page from "../../PageTemplate";
import TextArea from "../../TextArea";
import TextInput from "../../TextInput";
import * as style from "./Contact.module.scss";
const Contact = () => {
  const renderContactForm = () => {
    return (
      <div className={style.container}>
        <p className={style.navigation}>{"Accueil > Contact >"}</p>
        <h3 className={style.title}>Contact</h3>
        <div className={style["page__header"]}>
          <h3 className={style.title}>Contact</h3>
          <p className={style.subtitle}>
            Débutez votre cursus de formation avec Elite !
          </p>
        </div>

        <form id="contactform" className={style.form}>
          <TextInput
            label={"Prénom"}
            required
            placeholder={"Entrer votre prénom"}
            name={"prenom"}
          />
          <TextInput
            label={"Nom"}
            required
            placeholder={"Entrer votre nom"}
            name={"nom"}
          />
          <TextInput
            label={"Email"}
            required
            type={"email"}
            placeholder={"Entrer votre email"}
            name={"profession"}
          />
          <TextArea
            label={"Message"}
            required
            placeholder={"Dites nous tout!"}
            name={"message"}
          />

          <div className={style["button__section"]}>
            <ButtonPrimary text={"ENVOYER"} />
          </div>
        </form>
      </div>
    );
  };
  return <Page activeRoute={ROUTES.CONTACT}>{renderContactForm}</Page>;
};

export default Contact;
