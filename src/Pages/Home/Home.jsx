import React, { useState } from 'react';
import { HomeItems, ItemValue } from '../../Components/homeData';

function Home() {
  return (
    <>
      {HomeItems.map((item) => {
        if ((item.id % 2 === 0) === false) {
          return (
            <div className="gallery-item" key={item.id}>
              <img src={item.imgSrc} alt="" />
              <div className="right-side">
                <h3>{item.type}</h3>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <button>View Portfolio</button>
              </div>
            </div>
          );
        } else {
          return (
            <div className="gallery-item-reverse" key={item.id}>
              <img src={item.imgSrc} alt="" />
              <div className="right-side">
                <h3>{item.type}</h3>
                <h1>{item.title}</h1>
                <p>{item.text}</p>
                <button>View Portfolio</button>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default Home;
