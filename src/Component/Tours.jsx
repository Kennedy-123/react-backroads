import React from 'react';
import Title from './Title';
import { Article } from '../data';

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {Article.map((tours) => {
          const { id, image, date, title, text, location, durtion, cost } = tours;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={image} class="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{durtion} days</p>
                  <p>from {cost}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Tours;
