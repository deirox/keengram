import React from "react";
import styles from "./MetaNavigation.module.css";
import MetaNavigationItem from "./MetaNavigationItem";
import MetaNavigationItems from "./MetaNavigationItems";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsInstagram } from "react-icons/bs";

const MetaNavigation = () => {
  return (
    <div className={styles.navigation__wrapper}>
      <picture>
        <source media="(max-width:1265px)" srcSet="/img/keengram.svg" />
        <img
          className={styles.navigation__logo}
          src="/img/logo.png"
          alt="logo"
        />
      </picture>
      <div className={styles.navigation__top}>
        <MetaNavigationItems />
      </div>
      {/* <div className={styles.navigation__bottom}>
        <MetaNavigationItem
          icon=<RxHamburgerMenu />
          btnProps={{
            children: "Ещё",
          }}
        />
      </div> */}
    </div>
  );
};

export default MetaNavigation;
