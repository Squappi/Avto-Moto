import React from 'react';
import footer from './foother.module.scss';

function Foother() {
  return(
    <footer>
      <section className={footer.clients}>
        <ul className={footer.list}>
          <li className={footer.item}><a tabIndex="5" href="/">Корпоративным клиентам</a></li>
          <li className={footer.item}><a tabIndex="5" href="/">Клиентам</a></li>
          <li className={footer.item}><a tabIndex="5" href="/">Аренда авто</a></li>
          <li className={footer.item}><a tabIndex="5" href="/">Каршеринг</a></li>
          <li className={footer.item}><a tabIndex="5" href="/">Как продать авто</a></li>
          <li className={footer.item}><a tabIndex="5" href="/">Trade-in</a></li>
          <li className={footer.item}><a tabIndex="5" href="/">Test drive</a></li>
        </ul>
      </section>
    </footer>
  );
}

export default Foother;