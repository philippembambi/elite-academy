import { GatsbyImage, getImage } from "gatsby-plugin-image";
import T from "prop-types";
import * as React from "react";
import { ButtonLink } from "../../../Button";
import * as style from "./CourseItem.module.scss";
import { Link } from "gatsby";

const CourseItem = ({
  title,
  timeline,
  price,
  descTitle,
  description,
  slug,
  outcomes,
  outlined,
  image,
  icon1,
}) => {
  const classNameVariation = outlined ? "__outlined" : "";

  return (

    <div className={style.wrapper}>
     
      <div className={ style.ImgCard }>        
        <div className={ style.leftImgCard }>
        </div>

        <div className={ style.centerImgCard }>
          <GatsbyImage
            fluid={icon1.childImageSharp.fluid}
            objectFit={"contain"}
            alt={`${title} image`}
            className={style.item__image}
            image={getImage(icon1)}
          />
        </div>
          
        <div className={ style.rightImgCard }>
        </div>
      </div>

      <div className={style["item" + classNameVariation]} style={{ width: '100%' }}>
        
        <div className={style.header}>
          <h3 className={style["headertitle" + classNameVariation]}>{title}</h3>
        </div>

        <div className={style.body}>

          <div className={style.sup_body}>
            <h3 className={style.bodytitle}>{descTitle}</h3>
            <p className={style.outcomes}>{description}</p>
          </div>

          <div className={style.sub_body}>
            <p className={style.text_bold}>
              Durée: <span className={style.text_regular}>{timeline}</span>
            </p>
            <p className={style.text_bold}>
              Prix: <span className={style.text_regular}>{price}$/mois</span>
            </p>
          </div>

        </div>
        
        <div className={style.btn_container}>
          {outlined ? (

            <Link to={ `/courses/${slug}` } className={  style.customPrimaryBtn }>       
              <div style={{ height: "100%", width: "100%" }}>
                      <div style={{ height: "30%" }}></div>
                        
                      <div className="" style={{ paddingLeft: "20%", height: "40%", display: "inline-flex"  }}>
                        <span>En savoir plus</span>
                      </div>

                      <div style={{ height: "30%" }}></div>
              </div>
            </Link>

          ) : (
            <Link to={ `/courses/${slug}` } className={  style.customOutlinedBtn }>       
              <div style={{ height: "100%", width: "100%" }}>
                      <div style={{ height: "30%" }}></div>
                        
                      <div className="" style={{ paddingLeft: "20%", height: "40%", display: "inline-flex"  }}>
                        <span>En savoir plus</span>
                      </div>

                      <div style={{ height: "30%" }}></div>
              </div>
            </Link>

          )}
        </div>


      </div>

    </div>
  );
};

CourseItem.propTypes = {
  title: T.string.isRequired,
  timeline: T.string,
  descTitle: T.string.isRequired,
  outcomes: T.arrayOf(T.string),
  outlined: T.bool,
};

export default CourseItem;
