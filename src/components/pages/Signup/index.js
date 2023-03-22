import * as React from "react";
import Page from "../../PageTemplate";
import * as style from "./Signup.module.scss";
const Enregistrement = () => {
  const renderSignupPage = () => {
    return (
      <iframe src="https://docs.google.com/forms/d/1S076Us-aImpLgJ4q48oKrB2PidA6Nfmpkai7U2r2xJk/viewform?chromeless=1&edit_requested=true" 
              height="1300" 
              frameborder="0" 
              marginheight="0" 
              marginwidth="0"
              className={ style.iframe_form }
              >
                Chargement…
      </iframe>
      );
  };

  return <Page>{renderSignupPage}</Page>;
};

export default Enregistrement;
