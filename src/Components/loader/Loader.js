import React from "react";
import { LoaderStyled } from "./LoaderStyled";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderComponent = () => {
  return (
    <LoaderStyled>
      <Loader
        type='Circles'
        color='#819ff5'
        height={100}
        width={100}
        className='spinner'
      />
    </LoaderStyled>
  );
};

export default LoaderComponent;