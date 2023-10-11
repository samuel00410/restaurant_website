import React, { useEffect, useState } from "react";
import BeanEater from "../images/Bean Eater-0.3s-217px.gif";
import "./styles/Loader.css";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 設定時間，3秒鐘後會把loader圖案取消顯示
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-container ${!isVisible ? "fade-out" : ""}`}>
      <img src={BeanEater} alt="" />
    </div>
  );
};

export default Loader;
