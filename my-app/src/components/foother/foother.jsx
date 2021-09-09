import React from 'react';
import footer from './foother.module.scss';

function Foother() {
  return(
    <footer>
      <section className={footer.clients}>
        <ul className={footer.list}>
          <li className={footer.item}>Корпоративным клиентам</li>
          <li className={footer.item}>Клиентам</li>
          <li className={footer.item}>Аренда авто</li>
          <li className={footer.item}>Каршеринг</li>
          <li className={footer.item}>Как продать авто</li>
          <li className={footer.item}>Trade-in</li>
          <li className={footer.item}>Test drive</li>
        </ul>
      </section>
    </footer>
  );
}

export default Foother;