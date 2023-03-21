import React from "react";
import { ROUTES } from "../../../common/constants";
import Page from "../../PageTemplate";
import * as style from "./About.module.scss";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

const About = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allFile(filter: {relativePath: {eq: "acad01.png"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
        id
      }
    }
  }
`)
const aboutImg = data.allFile.nodes[0].childImageSharp;

  const renderPage = () => {
    return (
      <div className={style.container}>
        <div className={style.container__image}>
          <GatsbyImage
                alt="About image failed"
                objectFit="contain"
                className=""
                image={getImage(aboutImg)}
           />
          </div>

        <div className={style.container__desc}>
          <h1>A PROPOS DE NOUS</h1>
          <p>
            Pourquoi est-il difficile pour nous qui sommes formés au Congo ou en
            Afrique de competir avec ceux formés ailleurs ?
          </p>
          <p>
            C’est la question qu’Aristote, lauréat aux Examens d’Etat 2010 en
            République Democratique du Congo s’est posée à son arrivée d’abord
            en Inde ensuite au Canada pour poursuivre ses études universitaires.
            C’est le constat que font plusieurs autres congolais et africains
            lorsqu’ils arrivent pour travailler au niveau international.
          </p>
          <p>
            Après des années d’études en Inde, Canada, États-Unis et Brésil,
            Aristote et ses associés ont réalisé que le problème n’était pas
            nécessairement ce qui était enseigné mais la manière dont
            l’enseignement est dispensé.
          </p>
          <p>
            Alors que dans les pays avancés, on apprend aux étudiants à exercer
            leur esprit critique et créatif, chez nous, on nous apprend plutôt à
            répéter, des fois sans comprendre, ce qui est enseigné.
          </p>
          <p>
            C’est dans cette optique qu'ils ont décidé de lancer l’Académie des
            élites qui est un espace privilégié d'apprentissage, de
            connectivité, d'innovation, de créativité et de partage des
            connaissances et de professionnalisme aux normes internationales.
            Elle s’est donnée pour missions de former les meilleurs
            informaticiens, développeurs et programmeurs du pays, afin de
            devenir des professionnels qualifiés dans leurs domaines respectifs
            et de ramener l’expertise internationale en RDC.
          </p>
        </div>
      </div>
    );
  };
  return <Page activeRoute={ROUTES.ABOUT}>{renderPage}</Page>;
};

export default About;
