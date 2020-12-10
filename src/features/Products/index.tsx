import React from "react";
import { Route, Switch, useRouteMatch, withRouter } from "react-router-dom";
import Products from "./Dashboard";
import ProductItem from "./Details";

const ProductPage: React.FC = () => {
  const match = useRouteMatch()
  console.log(match);
  
  return (
    <Switch>
      <Route path={`${match.url}/detail/:productID`} component={ProductItem} />
      <Route path={`${match.url}`} component={Products} />
    </Switch>
  );
};



export default withRouter(ProductPage);
