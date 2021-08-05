import React, { Component } from "react";
import MovieListItem from "./MovieListItem/MovieListItem";
import { LaptopListContainer } from "./LaptopListStyled";
import { connect } from "react-redux";

import { getAllAdvByCategoryOperation } from "../../redux/products/productsOperations";
import LoaderComponent from "../loader/Loader";
import {
  filteredProducts,
  loadingSelector,
} from "../../redux/products/productsSelectors";
import Filter from "../filter/Filter";

class LaptopList extends Component {
  componentDidMount() {
    this.props.getAllAdvByCategoryOperation("laptops");
  }

  render() {
    return (
      <>
        <Filter name='products' />
        <LaptopListContainer>
          {this.props.isLoading ? (
            <LoaderComponent />
          ) : (
            <>
              {this.props.laptops.map((laptop) => (
                <LaptopListItem
                  laptop={laptop}
                  key={laptop.id}
                  addToCart={this.props.addToCart}
                />
              ))}
            </>
          )}
        </LaptopListContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    laptops: filteredProducts(state, "laptops"),
    isLoading: loadingSelector(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAdvByCategoryOperation: (category) => {
      dispatch(getAllAdvByCategoryOperation(category));
    },
    addToCart: (payload) => dispatch(addToCart(payload)),
  };
};

// const mapDispatchToProps = { addToCart, getAllAdvByCategoryOperation };

export default connect(mapStateToProps, mapDispatchToProps)(LaptopList);