import React from "react";
import { Heading } from "../common/Heading";
import { blog } from "../data/dummydata";

export const Blog = () => {
  const handleImageClick = (link) => {
    window.open(link, ""); // Open the link in a new tab/window
  };

  return (
    <>
      <section className='blog'>
        <div className='container'>
          <Heading title='My Work' />
          <div className='content grid3'>
            {blog.map((item) => (
              <div
                className='box'
                data-aos='flip-left'
                onClick={() => handleImageClick(item.href)}
                key={item.id}
              >
                <div className='img' data-aos='fade-up'>
                  <img src={item.cover} alt='' data-aos='fade-down' />
                </div>
                <div className='text' >
                  <h3 data-aos='fade-right'>{item.title}</h3>
                  <p data-aos='fade-up-right'>{item.desc}</p>
                  <div className='date' style={{ color: "#e0a80d" }}>
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
