import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntl } from "gatsby-plugin-intl";
import T from "prop-types";
import * as React from "react";
import { ROUTES } from "../../../common/constants";
import ButtonRounded from "../../Button/button-rounded";
import Carousel from "../../Carousel";
import Page from "../../PageTemplate";
import CourseItem from "./CourseItem";
import * as style from "./Home.module.scss";
import GoogleMapFrame from "../../GooglMap";
import { useState } from "react";
import { Link } from "gatsby";

import styled from "styled-components";
import "./styles.css";
import Modal from "./Modal";
import img1 from "../../../assets/images/mentor.png"
import img2 from "../../../assets/images/qualify.png"
import img3 from "../../../assets/images/computer.png"
import img4 from "../../../assets/images/pedagogie.png"
import img5 from "../../../assets/images/professional.png"
import img6 from "../../../assets/images/certificat.png"

import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const OverlayContents = [
  "Les programmes offerts sont soigneusement préparés par des mentors congolais qui ont bénéficié d’une éducation internationale au Canada et aux USA. et évoluent dans des entreprises de renom dans le domaine de la technologie telles que Microsoft (USA) et Rhetorik (Canada).",
  "Contrairement à l'enseignement traditionnel, nous disposons de coachs au détriment des enseignements. Ce modèle permet aux apprenants de développer une indépendance afin d'être orienté dans leur apprentissage. Ces coaches sont des professionnels de formation et de pratique dans le domaine de l’informatique.",
  "Notre salle d’apprentissage est un véritable laboratoire de créativité,innovation, collaboration,productivité en groupe dans le but de favoriser l’autonomie et l’intelligence collective.",
  "Notre pédagogie se base sur l'échange des connaissances. Un système apprentissage autonome qui consiste à engager une discussion dans laquelle les apprenants participent et construisent le cours ensemble avec le coach (professeur) qui oriente les sujets.",
  "Nos programmes sont dispensés dans un local où se situe une entreprise de renom dans la technologie qui dispose des clients internationaux. Cet emplacement permet aux apprenants de s’adapter au milieu professionnel et aussi d'avoir des connaissances en plus de ce qu’ils apprendront.",
  "A la fin de votre formation, vous aurez un certificat reconnu oú que vous alliez qui atteste vos compétences et connaissances.",
];

const OverlayTitles = [
  "Mentors de niveau international",
  "Coach Qualifiés et pratiquants",
  "Lab Creative",
  "Methode Harkness",
  "Environnement Professionnel et Sérieux",
  "Certificat"
];

const OverlayCountry = [
  "",
  "",
  "Canada",
  "USA",
  "",
  ""
]

const Home = ({ carouselItems, map }) => {

  const [modalContentId, setModalContentId] = useState(0);
  const [img, setImg] = useState("")

  const intl = useIntl();
  const [overlayOpen, setOverlayOpen] = React.useState(false);
  const [overlayIndex, setOverlayIndex] = React.useState(1);
  const handleClick = (e) => {
    let id = e.target.id;
    if (id === undefined) return;
    id = id.replace("image-", "");
    const mId = parseInt(id);
    setOverlayIndex(mId);
    setOverlayOpen(!overlayOpen);
  };
  const handleCloseClick = (e) => {
    setOverlayOpen(false);
  };
  const renderOverlayComponent = (idx) => {
    return !overlayOpen ? null : (
      <div className={style.about__overlay}>
        <div className={style.about__popup}>
          <button onClick={handleCloseClick} className={style.close}>
            &times;
          </button>
          <div className={style.content}>
            <p className={style.about__desc}>{OverlayContents[idx - 1]}</p>
          </div>
        </div>
      </div>
    );
  };

  const ModalContent = styled.div`
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          h1 {
            color: #5c3aff;
          }
        `;

        const images = [img1, img2, img3, img4, img5, img6]

        //const body = document.querySelector("body");
        //let containerBody = React.useRef(null);

        const [isOpen, toggle] = useState(false);

        function handlOpenModal(open, id) {
          console.log("close modal");
          
          setModalContentId(id)

          //open === true ? (body.style.overflow = "hidden") :  (body.style.overflow = "auto");
          toggle(open);
        }

  const InternalPage = ({ courses }) => {
    
    return (
      <React.Fragment>
        <Carousel items={carouselItems} />
        <div className={style.row__center}>
          <h3 className={style.typography3} style={{ marginTop: "3%" }}>
            {intl.formatMessage({ id: "content.homepage.elite.title" })}
            <span className={style.sitename}>
              {intl.formatMessage({ id: "content.homepage.elite.suffix" })}
            </span>
          </h3>
          <p className={style.typography6} style={{ paddingTop: "20px" }}>
            {intl.formatMessage({ id: "content.homepage.elite.decription" })}
          </p>
        </div>

          
          <Modal isOpen={isOpen} handleClose={() => handlOpenModal(false)}>
            <ModalContent className={ style.modal + " bg-gray-100"} >

                <figure className="md:flex bg-gray rounded-xl p-8 md:p-0">
                  <div className={ style.modalImgContainer }>
                      <img  className="md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
                            src={ images[modalContentId] } 
                            alt=""  
                            style={{ justifyContent: "center", marginTop: "12%"}} />
                  </div>

                <div class={ style.modalContentBloc + " pt-6 md:p-8 text-center bg-gray md:text-left space-y-3"}>
                  <blockquote className={ style.modalContentTextWrapper }>

                    <p class="text-lg font-semibold" className={ style.modalContentText }>
                      { (OverlayContents[modalContentId] != undefined) ? (OverlayContents[modalContentId].split('.')[0]) : ""  }
                        <p style={{ paddingTop: "1%" }} className={ style.modalParagraphe2 }>
                          { (OverlayContents[modalContentId] != undefined) ? (OverlayContents[modalContentId].split('.')[1]) : "" }
                        </p>
                        <p style={{ paddingTop: "1%" }} className={ style.modalParagraphe3 }>
                          { (OverlayContents[modalContentId] != undefined) ? (OverlayContents[modalContentId].split('.')[2]) : "" }
                        </p>
                    </p>
                  </blockquote>
                  <figcaption className="font-medium">
                    <div className={ style.overlayTitle } style={{ color: "#046059", fontWeight: 'bold', textAlign: "center" }}>
                      { OverlayTitles[modalContentId] }
                    </div>
                    <div className="text-gray-500" style={{ textAlign: "center" }}>
                      { OverlayCountry[modalContentId] }
                    </div>
                  </figcaption>
                </div>
              </figure>
            </ModalContent>
          </Modal>

        <section className={style.course__section}>
          <div className={style.courselist}>

            {courses.map((course, i) => (
              
              <CourseItem
                key={"course-" + i}
                title={course.title}
                slug={course.slug}
                description={course.description}
                outlined={i % 2 === 0}
                timeline={course.timeline}
                price={course.price}
                descTitle={course.shortDescription}
                outcomes={[]}
                image={course.image}
                icon1={course.icon1}
              />
            ))}
          </div>
        </section>
        <h3 id="about" className={style.about__header}>
          Pourquoi choisir l'académie des élites ?
        </h3>      
        <section className={style.about__container}>
          {renderOverlayComponent(overlayIndex)}
          <button id="1" onClick={() => handlOpenModal(true, 0)} className={style.about__box}>
          <StaticImage
              alt="mentor"
              id="image-1"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/mentor.png"}
          />
            <p className={style.about__title} style={{ marginTop: "8%" }}>
              Mentors de niveau international
            </p>
          </button>

          <button id="2" onClick={() => handlOpenModal(true, 1)} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-2"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/qualify.png"}
            />
            <p className={style.about__title} style={{ marginTop: "8%" }}>Coach Qualifiés et pratiquants</p>
          </button>
          <button id="3" onClick={() => handlOpenModal(true, 2)} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-3"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/computer.png"}
            />
            <p className={style.about__title} style={{ marginTop: "8%" }}>Lab Creative (Canada)</p>
          </button>
          <button id="4" onClick={() => handlOpenModal(true, 3)} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-4"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/pedagogie.png"}
            />
            <p className={style.about__title} style={{ marginTop: "8%" }}>Methode Harkness (USA)</p>
          </button>
          <button id="5" onClick={() => handlOpenModal(true, 4)} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-5"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/professional.png"}
            />
            <p className={style.about__title} style={{ marginTop: "8%" }}>
              Environnement Professionnel et Sérieux
            </p>
          </button>
          <button id="6" onClick={() => handlOpenModal(true, 5)} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-6"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/certificat.png"}
            />
            <p className={style.about__title} style={{ marginTop: "8%" }}>Certificat</p>
          </button>
        </section>
        <section className={style.signup__container}>
          <p className={style.signup__title} style={{ paddingBottom: "20px" }}>
            <span className={style.signup__text}>
              Nous serons plus que ravis de vous compter parmis nous et
              contribuer à votre croissance numérique!
            </span>
            <br />
            Inscrivez-vous à l'un des nos programmes offerts et devenez le
            meilleur !
          </p>

          <Link to={ROUTES.SIGNUP} className={ style.customRoundedBtn }>
                    <div style={{ height: "100%", width: "100%" }}>
                      <div style={{ height: "30%" }}></div>
                        
                      <div style={{ height: "40%", display: "inline-flex" }}>
                        <span>Démarrez votre formation aujourd'hui !</span>
                      </div>

                      <div style={{ height: "30%" }}></div>
                    </div>
          </Link>

        </section>
        <section className={style.contact__container}>
          <div className={style.contact__map}>
            <GoogleMapFrame mapUrl={map} />
          </div>
          <div className={style.contact__information}>
            <h1>Contact</h1>
            <div>
              <span className={style.contact__icon}>
                <FontAwesomeIcon icon={faLocationPin} />
              </span>
              6, Tabora, Gombe, Kinshasa, RDC
            </div>
            <div>
              <span className={style.contact__icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              academie@elite.cd
            </div>
            <div>
              <span className={style.contact__icon}>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              +243 999 084 177
            </div>

            <div>
              <StaticImage
                alt={"brands"}
                objectFit={"contain"}
                className={style.contact__image}
                src={"../../../assets/images/linkedin.png"}
              />
              <p>
                <a href="https://www.linkedin.com/company/academie-des-elites/">
                  LinkedIn
                </a>
              </p>
            </div>
            <div>
              <StaticImage
                alt={"brands"}
                objectFit={"contain"}
                className={style.contact__image}
                src={"../../../assets/images/instagram.png"}
              />
              <p>
                <a href="https://www.instagram.com/invites/contact/?i=1m43wzwkzzm13&utm_content=qh7802h">
                  Instagram
                </a>
              </p>
            </div>
            <div>
              <StaticImage
                alt={"brands"}
                objectFit={"contain"}
                className={style.contact__image}
                src={"../../../assets/images/facebook.png"}
              />
              <p>
                {" "}
                <a href="https://www.facebook.com/elitescd/">Facebook</a>{" "}
              </p>
            </div>
            <div>
              <StaticImage
                alt={"brands"}
                objectFit={"contain"}
                className={style.contact__image}
                src={"../../../assets/images/twitter_icon.png"}
              />
              <p>
                <a href="https://twitter.com/AcademieElites?s=09">Twitter</a>
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  };
  return (
    <Page activeRoute={ROUTES.INDEX}>
      {(courses) => <InternalPage courses={courses} />}
    </Page>
  );
};

Home.propTypes = {
  carouselItems: T.array,
  courses: T.array,
};

export default Home;
