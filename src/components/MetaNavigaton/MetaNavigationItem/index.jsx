import React from "react";
import styles from "./MetaNavigationItem.module.css";
import cn from "classnames";

const MetaNavigationItem = ({
  icon,
  activeIcon = icon,
  itemKey = false,
  activeItemKey,
  itemProps,
  btnProps,
  imgProps = false,
}) => {
  return (
    <div
      className={cn(
        styles.meta_navigation_item,
        !imgProps && itemKey === activeItemKey
          ? icon === activeIcon && styles.meta_navigation_item__icon___active
          : ""
      )}
      {...itemProps}
    >
      {!imgProps && (
        <div className={styles.meta_navigation_item__icon}>
          {itemKey === activeItemKey ? activeIcon : icon}
        </div>
      )}
      {imgProps && (
        <div
          className={cn(
            styles.meta_navigation_item__icon,
            styles.meta_navigation_item__icon_img,
            itemKey === activeItemKey &&
              styles.meta_navigation_item__icon_img___active
          )}
        >
          <img alt="alt" {...imgProps} />
        </div>
      )}

      <button className={styles.meta_navigation_item__btn} {...btnProps} />
    </div>
  );
};

export default MetaNavigationItem;
