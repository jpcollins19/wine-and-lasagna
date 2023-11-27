import axios from "axios";

const LOAD_USERS = "LOAD_USERS";
const ADD_USER = "ADD_USER";
const DELETE_USER = "DELETE_USER";

const _loadUsers = (users) => {
  return { type: LOAD_USERS, users };
};

const _addUser = (user) => {
  return { type: ADD_USER, user };
};

export const loadUsers = () => {
  return async (dispatch) => {
    let users = (await axios.get("/api/users")).data;

    users = users.map((u) => {
      const obj = {
        id: u.id,
        email: u.email,
        password: u.password,
        name: u.name,
        admin: u.admin,
        stage: u.stage,
      };

      for (let i = 1; i <= 8; i++) {
        obj[`wine${i}`] = {
          score: u[`score${i}`],
          notes: u[`notes${i}`],
        };
      }

      return obj;
    });
    dispatch(_loadUsers(users));
  };
};

export const updateUser = (user) => {
  console.log("byah-user", user);
  return async (dispatch) => {
    user = (await axios.put(`/api/users/${user.id}`, user)).data;
  };
};

export const addUser = (user, history) => {
  return async (dispatch) => {
    user = (await axios.post("/api/add/user", user)).data;
    dispatch(_addUser(user));
    history.push("/account_created");
  };
};

export const users = (state = [], action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.users;
    case ADD_USER:
      return [...state, action.user];
    case DELETE_USER:
      return [...state].filter((user) => user.id !== action.user.id);
    default:
      return state;
  }
};
