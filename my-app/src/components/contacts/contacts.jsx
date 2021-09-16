import React from 'react';
import contacts from './contacts.module.scss';
import Iframe from 'react-iframe';

function Contacts() {
  return(
    <div className={contacts.wrapper}>
      <div className={contacts.addres}>
        <h2 className={contacts.header}>Адрес</h2>
        <p className={contacts.text}>Санкт-Петербург,<br/> набережная реки Карповки, дом 5</p>
        <h2 className={contacts.header}>Режим работы</h2>
        <p className={contacts.text}>Ежедневно, с 10:00 до 21:00</p>
        <h2 className={contacts.header}>Телефон</h2>
        <a className={contacts.text} tabIndex="4" href="tel:88001112233">8 (800) 333-55-99</a>
        <h2 className={contacts.header}>E-mail</h2>
        <a href="mailto:info@avto-moto.ru" tabIndex="4" className={contacts.text}>info@avto-moto.ru</a>
      </div>
      <div className={contacts.cart}>
        <Iframe
          className={contacts.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.8301744005805!2d30.314303316154852!3d59.96814048188692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696315bcebbd7f3%3A0xe0d833dfef898281!2z0L3QsNCxLiBQ0LXQutC4INCa0LDRgNC_0L7QstC60LgsIDUsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTcwMjI!5e0!3m2!1sru!2sru!4v1631099967288!5m2!1sru!2sru" 
          width="431" 
          height="271" 
          allowfullscreen="fullscreen"
          loading="lazy"
          tabIndex="4"
        />
      </div>
    </div>
  );
}

export default Contacts;