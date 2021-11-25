import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Recipes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Biscotti.jpg'
              text='Biscotti, known also as cantucci, are Italian almond biscuits that originated in the Tuscan city of Prato.'
              label='Biscotti'
              path='/services'
            />
            <CardItem
              src='images/ChristmasFudge.jpg'
              text='Make a festive fudge with orange zest, dried fruit and spices for the Christmas season. It is ideal wrapped up as a gift – or a treat to yourself!'
              label='Christmas Fudge'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cookies.png'
              text='Cookies make the perfect rainy afternoon treat. From gooey American chocolate chip cookies to melty shortbread, we have got a biscuit selection to please everyone.'
              label='Cookies'
              path='/services'
            />
            <CardItem
              src='images/Gingerbread.jpg'
              text='This easy gingerbread recipe is great for baking with children, and it makes a lovely homemade Christmas present. Make gingerbread men or any other shape!'
              label='Gingerbread'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/PinwheelCookies.jpg'
              text='Your Christmas cookie game is about to be strong. These easy pinwheel cookies are beyond mesmerising but also so easy to make.'
              label='Pinwheel Cookies'
              path='/sign-up'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;