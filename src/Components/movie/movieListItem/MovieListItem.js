import React from "react";
import PropTypes from "prop-types";
import { ListItemContainer } from "./LaptopListItemStyled";
import { withRouter } from "react-router-dom";

const MovieListItem = ({ laptop }) => {

  return (
    <ListItemContainer>
      <div className='content'>
        <div className='imageWrapper'>
          <img src={laptop.image} alt={laptop.name} className='listItemImage' />
        </div>
        <h3 className='listItemTitle'>{laptop.name}</h3>
        <p className='priceTitle'>
          {laptop.isSale ? (
            <>
              <span className='withSalePrice'>{laptop.price - 1000}</span>{" "}
              <span className='withoutSalePrice'>{laptop.price}</span>
            </>
          ) : (
            <span className='withoutSalePrice'>{laptop.price}</span>
          )}
          {" UAH"}
        </p>
      </div>
    </ListItemContainer>
  );
};

export default withRouter(LaptopListItem);

LaptopListItem.propTypes = {
  laptop: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    isSale: PropTypes.bool,
    description: PropTypes.string,
    price: PropTypes.any,
  }),
};