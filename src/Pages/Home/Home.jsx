import React, { useState } from 'react';
import { HomeItems } from '../../Components/homeData';

function Home() {
  const imagePerPage = 4;
  const [next, setNext] = useState(imagePerPage);

  const handleMoreImage = () => {
    setNext(next + imagePerPage);
  };

  const size = Object.keys(HomeItems).length;
  console.log(size);
  return (
    <>
      <div className='home'>
        {HomeItems.slice(0, next).map((item) => {
          if ((item.id % 2 === 0) === false) {
            return (
              <div className="gallery-item" key={item.id}>
                <img src={item?.imgSrc} alt="" />
                <div className="right-side">
                  <h3>{item?.type}</h3>
                  <h1>{item?.title}</h1>
                  <p>{item?.text}</p>
                  <button>View Portfolio</button>
                </div>
              </div>
            );
          } else {
            return (
              <div className="gallery-item-reverse" key={item.id}>
                <img src={item?.imgSrc} alt="" />
                <div className="right-side">
                  <h3>{item?.type}</h3>
                  <h1>{item?.title}</h1>
                  <p>{item?.text}</p>
                  <button>View Portfolio</button>
                </div>
              </div>
            );
          }
        })}

        {next < size && (
          <button onClick={handleMoreImage} className="more-button">
            Load More
          </button>
        )}
      </div>
    </>
  );
}

export default Home;
