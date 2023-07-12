import React, { useState } from "react";
import { Heading } from "../common/Heading";
import { portfolio } from "../data/dummydata";

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))];
export const Portfolio = () => {
  const [list] = useState(portfolio);
  const [ setCategory] = useState(allCategory);
  console.log(setCategory);

  const handleItemClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <article>
        <div className='container'>
          <Heading title='Latest Project' />
          
          <div className='content grid3'>
            {list.map((item) => (
              <div
                className='box'
                data-aos='fade-up'
                onClick={() => handleItemClick(item.href)}
                key={item.id}
              >
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <div className='overlay' style={{ textAlign: 'center' }}>
                  <h3 style={{ marginBottom: '20px' }}>{item.title} </h3>
                  <span>{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};
