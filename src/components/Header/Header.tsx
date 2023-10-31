import React, { FC } from 'react';
import './Header.scss';

interface HeaderProps {
  test?: string;
}

export const HeaderComponent: FC<HeaderProps> = () => {

  return (
    <div className="header__container">
      <h1>Advertisements</h1>
      <div className="header__favorites">

        <span className="header__favorites-counter">
            some number
        </span>
      </div>
    </div>
  );
};
