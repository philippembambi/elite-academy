import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as style from "./Maintenance.module.scss";
import MaintenanceGif from "../../../assets/images/maintenance-panel.gif";
const MantenancePage = () => {
  return (
    <main className={style.container}>
      <div className={style.panel}>
        <StaticImage
          objectFit={"cover"}
          className={style.maintenance_logo}
          alt={"logo"}
          src="../../../assets/images/website-maintenance.png"
        />
        <h1 className={style.heading}>Site en construction</h1>
        <div className={style.content}>
          <p className={style.paragraph}>
            Désolé le site est en construction, revenez plus tard
          </p>
        </div>
      </div>
      <div className={style.maintenance_gif}>
        <img
          className={style.maintenance_img}
          alt={"logo"}
          src={MaintenanceGif}
        />
        <p className={style.paragraph}>© elite.cd 2022</p>
      </div>
    </main>
  );
};

export default MantenancePage;
