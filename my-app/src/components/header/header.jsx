import React from 'react';
import styles from './header.module.scss';
import styles_nav from './navigation.module.scss';
import logo from '../../img/car-logo.svg';

function Header() {
  return(
    <>
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <div className={styles.logo} href="/#">
            <img src={logo} alt="car"></img>
          </div>
          <nav className={styles_nav.nav}>
            <ul className={styles_nav.list}>
              <li className={styles_nav.item}><a tabIndex="1" href="/">Автомобили</a></li>
              <li className={styles_nav.item}><a tabIndex="1" href="/">Контакты</a></li>
              <li className={styles_nav.item}><a tabIndex="1" href="/">Услуги</a></li>
              <li className={styles_nav.item}><a tabIndex="1" href="/">Вакансии</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;