import React from 'react';
import styles from './header.module.scss';
import styles_nav from './navigation.module.scss';
import logo from '../../img/car-logo.svg';

function Header() {
  return(
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <a className={styles.logo} href="/#">
            <img src={logo} alt="car"></img>
            <div className={styles.case}>
              <span className={styles.text}>AVTO</span>
              <span className={styles.modificate}>MOTO</span>
            </div>
          </a>
          <nav className={styles_nav.nav}>
            <ul className={styles_nav.list}>
              <li className={styles_nav.item}>Автомобили</li>
              <li className={styles_nav.item}>Контакты</li>
              <li className={styles_nav.item}>Услуги</li>
              <li className={styles_nav.item}>Вакансии</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;