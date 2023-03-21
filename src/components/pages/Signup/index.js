import * as React from "react";
import ButtonPrimary from "../../Button/button-primary";
import Page from "../../PageTemplate";
import RadioGroup from "../../RadioGroup";
import RadioInput from "../../RadioInput";
import TextInput from "../../TextInput";
import * as style from "./Signup.module.scss";
const Enregistrement = () => {
  const renderSignupPage = () => {
    return (
      <React.Fragment>
        <div className={style.container}>
          <p className={style.navigation}>
            {"Accueil > Contact >"}
            <span className={style["navigation__selected"]}>
              Enregistrement
            </span>
          </p>
          <div className={style["page__header"]}>
            <h3 className={style.title}>Enregistrement</h3>
            <p className={style.subtitle}>
              Débutez votre cursus de formation avec Elite !
            </p>
          </div>

          <form id="signupform" className={style.form}>
            <TextInput
              label={"Nom complet"}
              required
              placeholder={"Entrer nom"}
              name={"nom"}
            />
            <TextInput
              label={"Email"}
              required
              placeholder={"Quel Courrier (email) utiliser pour écrire ?"}
              name={"age"}
            />
            <TextInput
              label={"Numéro Whatsapp"}
              required
              type={"tel"}
              placeholder={
                "Quel numéro de cellulaire utiliser pour vous contacter ?"
              }
              name={"phone"}
            />
            <TextInput
              label={"Adresse physique"}
              required
              type={"text"}
              placeholder={"Votre adresse"}
              name={"address"}
            />
            <RadioGroup
              label={"Quels sont les programmes qui vous intéressent ?"}
            >
              <RadioInput
                name={"experience"}
                multichoice
                label={
                  "Augmenter son intelligence avec le numérique (Alphabétisation Numérique)"
                }
              />
              <RadioInput
                name={"experience"}
                multichoice
                label={
                  "Apprendre à réfléchir comme un ingénieur logiciel (Bases de la programmation)"
                }
              />
              <RadioInput
                name={"experience"}
                multichoice
                label={
                  "Programmer comme chez Microsoft (Immersion en entreprise)"
                }
              />
            </RadioGroup>
            <RadioGroup label={"Disposez-vous d'un laptop pour apprendre ?"}>
              <RadioInput name={"experience"} label={"Oui"} />
              <RadioInput name={"experience"} label={"Non"} />
            </RadioGroup>
            <RadioGroup label={"Êtes-vous l'étudiant ou tuteur de l'étudiant"}>
              <RadioInput name={"experience"} label={"Je suis l'étudiant"} />
              <RadioInput name={"experience"} label={"Je suis le tuteur"} />
            </RadioGroup>
            <div className={style["button__section"]}>
              <ButtonPrimary text={"S'INSCRIRE"} />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  };

  return <Page>{renderSignupPage}</Page>;
};

export default Enregistrement;
