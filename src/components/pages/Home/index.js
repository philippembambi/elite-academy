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
import "preline"

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

        function handlMobilePopup(id) {
          setModalContentId(id)
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

          <div id="hs-slide-up-animation-modal" class="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
            <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-14 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
              <div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-100 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700" style={{ borderBlockEndColor: "#046059" }}>
                  <h3 class="font-bold" style={{ color: "black", textAlign: "center" }}>
                  { OverlayTitles[modalContentId] }
                  </h3>
                  <button type="button" class="hs-dropup-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-slide-up-animation-modal">
                    <span class="sr-only">Close</span>
                    <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"/>
                    </svg>
                  </button>
                </div>
                <div class="p-4 overflow-y-auto">
                  <p class="mt-1 text-gray-800 dark:text-gray-800" style={{ textAlign: "center" }}>
                    { OverlayContents[modalContentId] }
                  </p>
                </div>

                <div class="flex justify-between items-center py-3 px-4 border-b border-t dark:border-gray-700" style={{ borderBlockStartColor: "#046059" }}>
                  <strong style={{ color: "#046059"  }}>{ OverlayCountry[modalContentId] }</strong>
                  <button type="button" 
                          class="hs-dropup-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-white-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" 
                          data-hs-overlay="#hs-slide-up-animation-modal"
                          style={{ backgroundColor: "#046059", color: "white" }}
                          >
                    Fermer
                  </button>
                </div>

              </div>
            </div>
          </div>
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

        <section className={style.about__container_mobile}>
          {renderOverlayComponent(overlayIndex)}
          <button data-hs-overlay="#hs-slide-up-animation-modal" id="1" onClick={() => handlMobilePopup(0)} className={style.about__box}>
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

          <button data-hs-overlay="#hs-slide-up-animation-modal" id="2" onClick={() => handlMobilePopup(1)} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-2"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/qualify.png"}
            />
            <p className={style.about__title} style={{ marginTop: "8%" }}>Coach Qualifiés et pratiquants</p>
          </button>
          <button data-hs-overlay="#hs-slide-up-animation-modal" id="3" onClick={() => handlMobilePopup(2)} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-3"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/computer.png"}
            />
            <p className={style.about__title} style={{ marginTop: "8%" }}>Lab Creative (Canada)</p>
          </button>
          <button data-hs-overlay="#hs-slide-up-animation-modal" id="4" onClick={() => handlMobilePopup(3)} className={style.about__box}>
            <StaticImage
              alt="mentor"
              id="image-4"
              objectFit="contain"
              className={style.about__image}
              src={"../../../assets/images/pedagogie.png"}
            />
            <p className={style.about__title} style={{ marginTop: "8%" }}>Methode Harkness (USA)</p>
          </button>
          <button data-hs-overlay="#hs-slide-up-animation-modal" id="5" onClick={() => handlMobilePopup(4)} className={style.about__box}>
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
          <button data-hs-overlay="#hs-slide-up-animation-modal" id="6" onClick={() => handlMobilePopup(5)} className={style.about__box}>
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
