import React from "react";
import { useState } from "react";
import SettingsTray from "./SettingsTray";
import InviteTray from "./InviteTray";
import SupportersTray from "./SupportersTray";
import GiftTray from "./GiftTray";
import { motion, useMotionValue } from "framer-motion";

const Tray = (props) => {
  const [content, setContent] = useState("settings");
  const trayContent = {
    settings: <SettingsTray setContent={setContent} />,
    invite: <InviteTray setContent={setContent} />,
    supporters: <SupportersTray setContent={setContent} />,
    gift: <GiftTray setContent={setContent} />,
  };

  const dragY = useMotionValue(0);

  const trayDragClose = () => {
    if (dragY.get() > 100) {
      props.setIsTrayOpen(false);
    }
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
        className="absolute inset-x-0 bottom-4 z-20 mx-auto max-w-[380px] overflow-hidden bg-white px-6 pb-6 pt-5 active:cursor-grabbing"
        onContextMenuCapture={(e) => e.preventDefault()}
        onDragEnd={trayDragClose}
        style={{ borderRadius: 32, y: dragY }}
        initial={{ y: 330 }}
        animate={{ y: 0 }}
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={{ top: 0.15, bottom: 0.65 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
        exit={{ y: 650 }}
        layout
      >
        <div className="flex w-full items-center justify-center">
          <div
            className="h-[5px] w-[50px] cursor-grab bg-gray-300 active:cursor-grabbing"
            layout
            id="drag-bar"
            style={{ borderRadius: 100 }}
          ></div>
        </div>
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
