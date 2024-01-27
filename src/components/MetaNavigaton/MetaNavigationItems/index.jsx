import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HiHome, HiOutlineHome } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiFillCompass, AiOutlineCompass } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { MdAddBox, MdOutlineAddBox } from "react-icons/md";
import { FaComments, FaRegComments, FaHeart, FaRegHeart } from "react-icons/fa";

import MetaNavigationItem from "../MetaNavigationItem";
import styles from "./MetaNavigationItems.module.css";
import { useUserStore } from "../../../store/useUserStore";
import ModalBody from "../../ModalBody";
import { useModalStore } from "../../../store/useModalStore";
import CreatePostModal from "../../CreatePostModal";

const MetaNavigationItems = () => {
  const { nickname, avatarUrl } = useUserStore(
    (state) => state.authorizedUserData
  );
  const navigate = useNavigate();
  const [itemActive, setItemActive] = useState(1);
  const imgProps = { src: avatarUrl, alt: avatarUrl };

  const isCreatePostModalOpen = useModalStore(
    (state) => state.isCreatePostModalOpen
  );
  const setIsCreatePostModalOpen = useModalStore(
    (state) => state.setIsCreatePostModalOpen
  );
  let location = useLocation();
  let params = useParams();
  // console.log("location: ", location);
  // console.log("params: ", params);

  useEffect(() => {
    switch (location.pathname) {
      case `/${params.userNickname}`:
        setItemActive(8);
        break;
      default:
        setItemActive(1);
    }
  }, []);
  const metaNavItems = [
    {
      itemId: 1,
      icon: <HiOutlineHome />,
      activeIcon: <HiHome />,
      btnProps: {
        children: "Гланая",
      },
      itemProps: {
        onClick: () => {
          navigate("/");
          setItemActive(1);
        },
      },
    },
    // {
    //   itemId: 2,
    //   icon: <HiMagnifyingGlass />,
    //   btnProps: {
    //     children: "Поисковой запрос",
    //   },
    //   itemProps: {
    //     onClick: () => {
    //       navigate("/");
    //       setItemActive(2);
    //     },
    //   },
    // },
    // // {
    //   itemId: 3,
    //   icon: <AiOutlineCompass />,
    //   activeIcon: <AiFillCompass />,
    //   btnProps: {
    //     children: "Интересное",
    //   },
    //   itemProps: {
    //     onClick: () => {
    //       navigate("/");
    //       setItemActive(3);
    //     },
    //   },
    // },
    // {
    //   itemId: 4,
    //   icon: <BiMoviePlay />,
    //   btnProps: {
    //     children: "Reels",
    //   },
    //   itemProps: {
    //     onClick: () => {
    //       navigate("reels");
    //       setItemActive(4);
    //     },
    //   },
    // },
    // {
    //   itemId: 5,
    //   icon: <FaRegComments />,
    //   activeIcon: <FaComments />,
    //   btnProps: {
    //     children: "Сообщения",
    //   },
    //   itemProps: {
    //     onClick: () => {
    //       navigate("/");
    //       setItemActive(5);
    //     },
    //   },
    // },
    // {
    //   itemId: 6,
    //   icon: <FaRegHeart />,
    //   activeIcon: <FaHeart />,
    //   btnProps: {
    //     children: "Уведомления",
    //   },
    //   itemProps: {
    //     onClick: () => {
    //       navigate("/");
    //       setItemActive(6);
    //     },
    //   },
    // },
    {
      itemId: 7,
      icon: <MdOutlineAddBox />,
      activeIcon: <MdAddBox />,
      btnProps: {
        children: "Создать",
      },
      itemProps: {
        onClick: () => {
          // navigate("/");
          setIsCreatePostModalOpen(true);
        },
      },
    },
    {
      itemId: 8,
      imgProps: imgProps,
      btnProps: {
        children: "Профиль",
      },
      itemProps: {
        onClick: () => {
          navigate(nickname);
          setItemActive(8);
        },
      },
    },
  ];
  return (
    <nav className={styles.navigation__items}>
      {metaNavItems.map((metaNavItem, index) => {
        return (
          <MetaNavigationItem
            {...metaNavItem}
            key={index}
            itemKey={metaNavItem.itemId}
            activeItemKey={itemActive}
          />
        );
      })}
      <CreatePostModal />
    </nav>
  );
};

export default MetaNavigationItems;
