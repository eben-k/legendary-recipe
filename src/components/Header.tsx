import React from "react";
import "./Header.scss";

type HeaderProps = { text: string };

const Header = ({ text }: HeaderProps) => {
  return (
    <header className="header">
      <h1 className="header__text">{text}</h1>
    </header>
  );
};

export default Header;
