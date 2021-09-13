import React from 'react';
import footer from './foother.module.scss';

function Foother() {
  return(
    <footer>
      <section className={footer.clients}>
        <ul className={footer.list}>
          <li className={footer.item}><a href="/">Корпоративным клиентам</a></li>
          <li className={footer.item}><a href="/">Клиентам</a></li>
          <li className={footer.item}><a href="/">Аренда авто</a></li>
          <li className={footer.item}><a href="/">Каршеринг</a></li>
          <li className={footer.item}><a href="/">Как продать авто</a></li>
          <li className={footer.item}><a href="/">Trade-in</a></li>
          <li className={footer.item}><a href="/">Test drive</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Foother;