import dayjs from 'dayjs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import reportWebVitals from './reportWebVitals';

if(!localStorage.getItem('history') || [...JSON.parse(localStorage.getItem('history'))].length === 0) {
  localStorage.setItem('history', JSON.stringify([{
    name: 'Борис Иванов',
    dignity: 'мощность, внешний вид',
    limitations: 'Слабые тормозные колодки (пришлось заменить)',
    comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
    rating: 3,
    date: dayjs(),
  },
  {
    name: 'Марсель Исмагилов',
    dignity: 'Cтиль, комфорт, управляемость',
    limitations: 'Дорогой ремонт и обслуживание',
    comment: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
    rating: 3,
    date: dayjs(),
  }]));
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
