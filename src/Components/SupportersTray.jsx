import React from "react";
import { motion } from "framer-motion";

const SupportersTray = (props) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex w-full flex-col gap-3">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.1732 13.5C33.9988 12.9618 33.6687 12.4875 33.2246 12.1371C32.7805 11.7866 32.2424 11.5758 31.6785 11.5313L23.7205 10.8886L20.6493 3.46219C20.4334 2.93732 20.0665 2.48844 19.595 2.17254C19.1235 1.85665 18.5688 1.68799 18.0013 1.68799C17.4338 1.68799 16.8791 1.85665 16.4076 2.17254C15.9361 2.48844 15.5692 2.93732 15.3533 3.46219L12.2849 10.89L4.32692 11.5313C3.76192 11.5779 3.22329 11.7904 2.77873 12.1422C2.33417 12.494 2.00351 12.9693 1.82829 13.5085C1.65308 14.0477 1.64113 14.6266 1.79396 15.1725C1.94678 15.7185 2.25756 16.207 2.68723 16.5769L8.75942 21.8138L6.90317 29.6466C6.76778 30.1988 6.79981 30.7789 6.99517 31.3128C7.19053 31.8468 7.5404 32.3106 8.0002 32.6451C8.46001 32.9796 9.00896 33.1697 9.57716 33.1911C10.1454 33.2126 10.7071 33.0645 11.1908 32.7656L18.0013 28.5736L24.8118 32.7656C25.2954 33.0625 25.8562 33.2091 26.4232 33.1871C26.9902 33.165 27.5379 32.9752 27.997 32.6417C28.4561 32.3082 28.8059 31.846 29.0021 31.3136C29.1984 30.7811 29.2322 30.2025 29.0994 29.6508L27.2432 21.818L33.3154 16.5811C33.7476 16.2104 34.0599 15.7195 34.2126 15.171C34.3654 14.6224 34.3516 14.0408 34.1732 13.5ZM24.2633 19.9266C24.0292 20.1284 23.855 20.3907 23.7598 20.6849C23.6645 20.979 23.6519 21.2936 23.7233 21.5944L25.536 29.25L18.8858 25.1606C18.6198 24.9969 18.3136 24.9102 18.0013 24.9102C17.689 24.9102 17.3827 24.9969 17.1168 25.1606L10.4666 29.25L12.2793 21.6C12.3507 21.2992 12.3381 20.9846 12.2428 20.6905C12.1476 20.3964 11.9734 20.1341 11.7393 19.9322L5.79504 14.7994L13.5857 14.1708C13.8957 14.1459 14.1928 14.0358 14.4442 13.8526C14.6956 13.6695 14.8915 13.4204 15.0102 13.133L18.0013 5.89079L20.9924 13.133C21.1111 13.4204 21.307 13.6695 21.5584 13.8526C21.8098 14.0358 22.1069 14.1459 22.4169 14.1708L30.2075 14.7994L24.2633 19.9266Z"
              fill="black"
              fillOpacity="0.5"
            />
          </svg>

          <div className="flex flex-col gap-2">
            <span className="text-xl font-semibold">Supporters club</span>
            <p className="text-lg font-medium text-gray-500">
              As a member, you contribute to the growth and success of our
              community while enjoying a range of benefits.
            </p>
          </div>
        </div>
        <div className="h-0.5 w-full bg-gray-100"></div>
        <div className="flex w-full flex-col gap-4 font-semibold text-gray-500">
          <div className="flex w-full items-start gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 5H17V4C17 3.45 16.55 3 16 3H8C7.45 3 7 3.45 7 4V5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C7.70625 13.6894 8.2002 14.3505 8.82916 14.8662C9.45813 15.3819 10.2032 15.7367 11 15.9V19H8C7.45 19 7 19.45 7 20C7 20.55 7.45 21 8 21H16C16.55 21 17 20.55 17 20C17 19.45 16.55 19 16 19H13V15.9C13.7968 15.7367 14.5419 15.3819 15.1708 14.8662C15.7998 14.3505 16.2937 13.6894 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z"
                fill="black"
                fillOpacity="0.5"
              />
            </svg>

            <p>Access exclusive events and updates.</p>
          </div>

          <div className="flex w-full items-start gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 7C17.9 7 17 7.9 17 9V11C17 12.1 17.9 13 19 13H21V15H17V17H21C22.1 17 23 16.1 23 15V13C23 11.9 22.1 11 21 11H19V9H23V7H19ZM9 7V17H13C14.1 17 15 16.1 15 15V9C15 7.9 14.1 7 13 7H9ZM11 9H13V15H11V9ZM3 7C1.9 7 1 7.9 1 9V17H3V13H5V17H7V9C7 7.9 6.1 7 5 7H3ZM3 9H5V11H3V9Z"
                fill="black"
                fillOpacity="0.5"
              />
            </svg>

            <p>Remove ads.</p>
          </div>
        </div>
        <div className="flex w-full gap-3 rounded-full text-lg font-semibold text-black">
          <motion.button
            className="flex-grow rounded-full bg-gray-100 p-2"
            onClick={() => props.setContent("settings")}
            whileTap={{ scale: 0.95 }}
          >
            Cancel
          </motion.button>
          <motion.button
            className="flex-grow rounded-full bg-orange-500 py-3"
            onClick={() => props.setContent("settings")}
            whileTap={{ scale: 0.95 }}
          >
            Join now
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default SupportersTray;
