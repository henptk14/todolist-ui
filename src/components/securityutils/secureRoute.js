import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const SecuredRoutes = ({ component: Component, ...otherProps }) => {
  const security = useSelector(state => state.security);

  return (
    <Route
      {...otherProps}
      render={props =>
        security.validToken ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default SecuredRoutes;
