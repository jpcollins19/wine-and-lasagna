import { useEffect, useState } from "react";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { me, findJoe } from "./store";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./components/Misc/Loading";
import Pre_Sign_In_Page from "./components/PreSignIn/Pre_Sign_In_Page";
import Sign_In_Page from "./components/UserAccount/SignIn/Sign_In_Page";
import Create_Account_Page from "./components/UserAccount/CreateAccount/Create_Account_Page";
import Action_Confirmation from "./components/UserAccount/Action_Confirmation";
import Rank_Wines from "./components/rank_wines/Rank_Wines";
import Single_Wine_Page from "./components/single_wine_page/Single_Wine_Page";
import Admin from "./components/admin/Admin";
import Results from "./components/results/Results";
import NoMatch from "./components/Misc/No_Match";

const Routes = () => {
  const dispatch = useDispatch();

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
    // {
    //   path: "/pw_reset_confirmation",
    //   component: Action_Confirmation,
    // },
    // {
    //   path: "/forgot_pw_confirmation",
    //   component: Action_Confirmation,
    // },
    // { path: "/rules", component: Rules_Page },
    // { path: "/forgot_pw", component: Forgot_PW_Page },
    // { path: "/reset_pw/:id", component: Reset_PW_Page },
  ];

  return loading ? (
    <Loading />
  ) : (
    <Switch>
      {nonUserRoutes.map((route, idx) => (
        <Route key={idx} path={route.path} exact component={route.component} />
      ))}

      {user?.id && (
        <Route exact path="/">
          <Redirect to={`/${joe.stage === 0 ? "rank_wines" : "home"}`} />
        </Route>
      )}

      <Route path="/rank_wines">
        {!user?.id ? <Redirect to="/" /> : <Rank_Wines />}
      </Route>

      <Route path="/rank/:id">
        {!user?.id ? <Redirect to="/" /> : <Single_Wine_Page />}
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

      <Route path="/results">
        {!user?.id ? <Redirect to="/" /> : <Results />}
      </Route>

      {/* 

      {user?.admin && (
        <Route path="/admin/groups">
          {!user?.id ? <Redirect to="/" /> : <Group_Admin_Page />}
        </Route>
      )} */}

      {/* {user?.admin && (
        <Route path="/admin/ko">
          {!user?.id ? <Redirect to="/" /> : <KO_Admin_Page />}
        </Route>
      )} */}

      {/* {user?.admin && (
        <Route path="/admin/ko-depricated">
          {!user?.id ? <Redirect to="/" /> : <Team_Admin_Page_D />}
        </Route>
      )}

      {joe?.tourneyStage === 1 && user?.id && (
        <Route path="/my_picks_edit_group">
          {!user?.id ? <Redirect to="/" /> : <My_Picks_Unlocked_Page />}
        </Route>
      )}

      {joe?.tourneyStage === 4 && user?.id && (
        <Route path="/my_picks_edit_ko">
          {!user?.id ? <Redirect to="/" /> : <My_Picks_Unlocked_Page />}
        </Route>
      )}



      <Route path="/my_picks">
        {!user?.id ? <Redirect to="/" /> : <My_Picks_Locked_Page />}
      </Route>

      <Route path="/pool_picks/:id">
        {!user?.id ? <Redirect to="/" /> : <Pool_Picks_Page />}
      </Route>

      <Route path="/group_details">
        {!user?.id ? <Redirect to="/" /> : <Group_Details_Page />}
      </Route>

      <Route path="/my_profile">
        {!user?.id ? <Redirect to="/" /> : <User_Profile_Page_L />}
      </Route>

      <Route path="/edit_profile_name">
        {!user?.id ? <Redirect to="/" /> : <User_Profile_Page_UL />}
      </Route>

      <Route path="/edit_profile_password">
        {!user?.id ? <Redirect to="/" /> : <User_Profile_Page_UL />}
      </Route>

      <Route path="/edit_profile_email_notifications">
        {!user?.id ? <Redirect to="/" /> : <User_Profile_Page_UL />}
      </Route> */}

      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  );
};

export default withRouter(Routes);
