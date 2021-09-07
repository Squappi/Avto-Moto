import React from 'react';
import contacts from './contacts.module.scss';

function Contacts() {
  return(
    <div className={contacts.wrapper}>
      <div className={contacts.addres}>
        <h2 className={contacts.header}>Адрес</h2>
        <p className={contacts.text}>Санкт-Петербург, набережная реки Карповки, дом 5</p>
        <h2 className={contacts.header}>Режим работы</h2>
        <p className={contacts.text}>Ежедневно, с 10:00 до 21:00</p>
        <h2 className={contacts.header}>Телефон</h2>
        <p className={contacts.text}>8 (800) 333-55-99</p>
        <h2 className={contacts.header}>E-mail</h2>
        <p className={contacts.text}>info@avto-moto.ru</p>
      </div>
      <div className={contacts.cart}>
        
      </div>
    </div>
  );
}

export default Contacts;