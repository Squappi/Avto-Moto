import React, { useEffect, useState } from 'react';
import Contacts from '../contacts/contacts';
import Feature from '../feature/feature';
import Reviews from '../reviews/reviews';
import specifications from './specifications.module.scss';
import {Link} from 'react-router-dom';

function Specifications() {
  const [activeTab, setActiveTab] = useState('specification');

  function tabClick(evt) {
    if(evt.key === 'Tab') {
      evt.preventDefault();
      switch(activeTab) {
        case Tab.REVIEWS:
          setActiveTab(Tab.CONTACTS);
          break;
        case Tab.CONTACTS:
          setActiveTab(Tab.SPECIFICATION);
          break;
        default:
          setActiveTab(Tab.REVIEWS);
          break;
      }
    }
  } 

  useEffect(() => {
    window.onkeydown = tabClick;
  });

  const Tab = {
    SPECIFICATION: 'specification',
    REVIEWS: 'reviews',
    CONTACTS: 'contacts',
  };

  const renderSpecifications = () => (
    <Feature/>
  );

  const renderReviews = () => (
    <Reviews/>
  );

  const renderContacts = () => (
    <Contacts/>
  );

  const renderTab = (hooks) => {
    switch(hooks) {
      case Tab.REVIEWS:
        return renderReviews();
      case Tab.CONTACTS:
        return renderContacts();
      default:
        return renderSpecifications();
    }
  };

  

  return(
    <section>
      <div className={specifications.wrapper}>
        <div className={specifications.case}>
          <ul className={specifications.list}>
            <li className={`${specifications.button} ${activeTab === Tab.SPECIFICATION && specifications.button_active}`}>
              <Link 
                to='#'
                name={Tab.SPECIFICATION}
                onClick={(evt) => {
                  setActiveTab(evt.target.name);
                }}
                >
                Характеристики
              </Link>
            </li>
            <li className={`${specifications.button} ${activeTab === Tab.REVIEWS && specifications.button_active}`}>
              <Link to='#'
                name={Tab.REVIEWS}
                  onClick={(evt) => {
                    setActiveTab(evt.target.name);
                  }}
                >
                Отзывы
              </Link>
            </li>
            <li className={`${specifications.button} ${activeTab === Tab.CONTACTS && specifications.button_active}`}>
              <Link 
                to='#'
                name={Tab.CONTACTS}
                onClick={(evt) => {
                  setActiveTab(evt.target.name);
                }}
                >
                Контакты
              </Link>
            </li>
          </ul>
          {renderTab(activeTab)} 
        </div>
      </div>
    </section>
  );
}

export default Specifications;