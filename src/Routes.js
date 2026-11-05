import { useState } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { findJoe } from "./store";
import { useSelector } from "react-redux";
import Loading from "./components/misc/Loading";
import Pre_Sign_In_Page from "./components/preSignIn/Pre_Sign_In_Page";
import Sign_In_Page from "./components/userAccount/signIn/Sign_In_Page";
import Create_Account_Page from "./components/userAccount/createAccount/Create_Account_Page";
import Action_Confirmation from "./components/userAccount/Action_Confirmation";
import Rank_Wines from "./components/rank_wines/Rank_Wines";
import Single_Wine_Rank from "./components/rank_wines/single_wine_rank/Single_Wine_Rank";
import Admin from "./components/admin/Admin";
import Results from "./components/results/Results";
import Single_Result from "./components/results/single_result_page/Single_Result";
import NoMatch from "./components/misc/No_Match";

const Routes = () => {
  const user = useSelector((state) => state.auth);

  const joe = findJoe(useSelector((state) => state.users));

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  const nonUserRoutes = [
    { path: "/", component: Pre_Sign_In_Page },
    { path: "/sign_in", component: Sign_In_Page },
    { path: "/create_account", component: Create_Account_Page },
    {
      path: "/account_created",
      component: Action_Confirmation,
    },
  ];

  return loading ? (
    <Loading />
  ) : (
    <Switch>
      {!user?.id &&
        nonUserRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            exact
            component={route.component}
          />
        ))}

      {user?.id && (
        <Route exact path="/">
          <Redirect to={`/${joe.stage === 0 ? "rank_wines" : "results"}`} />
        </Route>
      )}

      <Route exact path="/rank_wines">
        {!user?.id ? <Redirect to="/" /> : <Rank_Wines />}
      </Route>

      <Route path="/rank/:id">
        {!user?.id ? <Redirect to="/" /> : <Single_Wine_Rank />}
      </Route>

      {user?.isAdmin && (
        <Route exact path="/admin/users">
          {!user?.id ? <Redirect to="/" /> : <Admin />}
        </Route>
      )}

      {user?.isAdmin && (
        <Route exact path="/admin/wines">
          {!user?.id ? <Redirect to="/" /> : <Admin />}
        </Route>
      )}

      <Route exact path="/results">
        {!user?.id ? <Redirect to="/" /> : <Results />}
      </Route>

      <Route path="/results/:id">
        {!user?.id ? <Redirect to="/" /> : <Single_Result />}
      </Route>

      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default withRouter(Routes);
