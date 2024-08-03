import React from "react";
import { useState } from "react";
import SettingsTray from "./SettingsTray";
import InviteTray from "./InviteTray";
import SupportersTray from "./SupportersTray";
import GiftTray from "./GiftTray";
import { motion } from "framer-motion";

const Tray = (props) => {
  const [content, setContent] = useState("settings");
  const trayContent = {
    settings: <SettingsTray setContent={setContent} />,
    invite: <InviteTray setContent={setContent} />,
    supporters: <SupportersTray setContent={setContent} />,
    gift: <GiftTray setContent={setContent} />,
  };
  return (
    <>
      <motion.div
        className="absolute inset-0 bg-midnight-950/50"
        onClick={() => props.setIsTrayOpen(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>
      <motion.div
        className="w-380px absolute inset-x-0 bottom-4 z-20 mx-auto overflow-hidden bg-white px-6 pb-6 pt-5"
        style={{ borderRadius: 32 }}
        initial={{ y: 330 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
        exit={{ y: 600 }}
        layout
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          key={content}
          layout="size"
        >
          {trayContent[content]}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Tray;
