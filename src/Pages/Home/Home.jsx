import { motion } from 'framer-motion';
import React, { useState} from 'react';
import { HomeItems } from '../../Components/homeData';

function Home() {
  const imagePerPage = 4;
  const [next, setNext] = useState(imagePerPage);
  const size = Object.keys(HomeItems).length;
  const handleMoreImage = () => {
    setNext(next + imagePerPage);
  };

  return (
    <>
      {HomeItems.slice(0, next).map((item) => {
        if ((item.id % 2 === 0) === false) {
          return (
            <div className="gallery-item" key={item.id}>
              <img src={item?.imgSrc} alt="" />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: '0', opacity: 1 }}
                transition={{ type: 'linear', duration: 1, delay: 0.5 }}
                className="right-side"
              >
                <h3>{item?.type}</h3>
                <h1>{item?.title}</h1>
                <p>{item?.text}</p>
                <button>View Portfolio</button>
              </motion.div>
            </div>
          );
        } else {
          return (
            <div className="gallery-item-reverse" key={item.id}>
              <img src={item?.imgSrc} alt="" />
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ y: '0', opacity: 1 }}
                transition={{ type: 'linear', duration: 1, delay: 0.5 }}
                className="right-side"
              >
                <h3>{item?.type}</h3>
                <h1>{item?.title}</h1>
                <p>{item?.text}</p>
                <button>View Portfolio</button>
              </motion.div>
            </div>
          );
        }
      })}

      {next < size && (
        <button onClick={handleMoreImage} className="more-button">
          Load More
        </button>
      )}
    </>
  );
}

export default Home;
