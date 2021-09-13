import React, { useEffect, useState } from 'react';
import Contacts from '../contacts/contacts';
import Feature from '../feature/feature';
import Reviews from '../reviews/reviews';
import specifications from './specifications.module.scss';
import {Link} from 'react-router-dom';

function Specifications() {
  const [activeTab, setActiveTab] = useState('specification');

  function tabClick(evt) {
    switch(evt.target.name) {
      case Tab.REVIEWS:
        setActiveTab(Tab.REVIEWS);
        break;
      case Tab.CONTACTS:
        setActiveTab(Tab.CONTACTS);
        break;
      default:
        setActiveTab(Tab.SPECIFICATION);
        break;
    }
  }

  useEffect(() => {
    // window.onkeydown = tabClick;
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
            <li className={`${specifications.button} ${activeTab === Tab.SPECIFICATION && specifications.button_active}`}
             id={Tab.SPECIFICATION}
             >
              <Link 
                to='#'
                tabIndex="0"
                onFocus={tabClick}
                name={Tab.SPECIFICATION}
                onClick={(evt) => {
                  setActiveTab(evt.target.name);
                }}
                >
                Характеристики
              </Link>
            </li>
            <li className={`${specifications.button} ${activeTab === Tab.REVIEWS && specifications.button_active}`}
             id={Tab.REVIEWS}
             >
              <Link to='#'
              onFocus={tabClick}
              tabIndex="0" 
                name={Tab.REVIEWS}
                  onClick={(evt) => {
                    setActiveTab(evt.target.name);
                  }}
                >
                Отзывы
              </Link>
            </li>
            <li className={`${specifications.button} ${activeTab === Tab.CONTACTS && specifications.button_active}`}
              id={Tab.CONTACTS}
              >
              <Link 
                to='#'
                tabIndex="0" 
                onFocus={tabClick}
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