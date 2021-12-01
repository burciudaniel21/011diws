import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className="description-container">
      <h2 className="company-description"><span className="title">GetBaking</span> wants to help you find your passion for baking. The site presents you with a blog of recipes from sources such as BBC Food with easy to follow directions and descriptive information.</h2> 
      <h2 className="company-description">Do you have any great recipe you would like to share with others? Use the Create Blog feature and share it with the others.</h2>
      </div> 
      <h1 className='popularRecipes'>Check out these <span className='popular'>POPULAR </span>recipes!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Biscotti.jpg'
              text='Biscotti, known also as cantucci, are Italian almond biscuits that originated in the Tuscan city of Prato.'
              label='Biscotti'
              path='/blogs/1'
            />
            <CardItem
              src='images/ChristmasFudge.jpg'
              text='Make a festive fudge with orange zest, dried fruit and spices for the Christmas season. It is ideal wrapped up as a gift – or a treat to yourself!'
              label='Christmas Fudge'
              path='/blogs/2'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/cookies.png'
              text='Cookies make the perfect rainy afternoon treat. From gooey American chocolate chip cookies to melty shortbread, we have got a biscuit selection to please everyone.'
              label='Cookies'
              path='/blogs/3'
            />
            <CardItem
              src='images/Gingerbread.jpg'
              text='This easy gingerbread recipe is great for baking with children, and it makes a lovely homemade Christmas present. Make gingerbread men or any other shape!'
              label='Gingerbread'
              path='/blogs/4'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/PinwheelCookies.jpg'
              text='Your Christmas cookie game is about to be strong. These easy pinwheel cookies are beyond mesmerising but also so easy to make.'
              label='Pinwheel Cookies'
              path='/blogs/5'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;