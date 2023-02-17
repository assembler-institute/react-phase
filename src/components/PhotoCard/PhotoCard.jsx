import React from 'react';
import PropTypes from 'prop-types';

const PhotoCard = ({ productImage, name, date }) => {
  return (
    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
      <figure className="effect-ming tm-video-item">
        <img src={productImage} alt={name} className="img-fluid" />
        <figcaption className="d-flex align-items-center justify-content-center">
          <h2 className="photo__title--black">{name}</h2>
          <a href="photo-detail.html">View more</a>
        </figcaption>
      </figure>
      <div className="d-flex justify-content-between tm-text-gray">
        <span className="tm-text-gray-light">{date}</span>
      </div>
    </div>
  );
};

PhotoCard.propTypes = {
  productImage: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

PhotoCard.defaultProps = {
  name: 'ASUS',
};

export default PhotoCard;
