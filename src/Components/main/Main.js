import React, { Suspense } from "react";
import { MainContainer } from "./MainStyled";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

import { isAuth } from "../../redux/auth/authSelectors";
import { connect } from "react-redux";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import LoaderComponent from "../loader/Loader";

// const Main = () => {
//   return (
//     <MainContainer>
//       <Suspense fallback={<LoaderComponent />}>

//       </Suspense>
//     </MainContainer>
//   );
// };



// export default connect(mapStateToProps)(Main);