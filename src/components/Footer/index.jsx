import React, { memo } from 'react';
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={`${style.container} d-flex justify-content-center`}>
        footer
      </div>
    </footer>
  );
};

export default React.memo(Footer);
