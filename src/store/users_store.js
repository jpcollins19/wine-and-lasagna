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

const _deleteUser = (user) => {
  return { type: DELETE_USER, user };
};

export const loadUsers = () => {
  return async (dispatch) => {
    let users = (await axios.get("/api/users")).data;

    let order = 2;

    users = users.map((u) => {
      const obj = {
        id: u.id,
        email: u.email,
        password: u.password,
        name: u.name,
        isAdmin: u.isAdmin,
        stage: u.stage,
      };

      const isUserJoe = u.isAdmin;

      isUserJoe ? (obj.order = 1) : (obj.order = order++);

      for (let i = 1; i <= 8; i++) {
        obj[`wine${i}`] = {
          score: u[`score${i}`],
          notes: u[`notes${i}`],
        };
      }

      return obj;
    });

    users.sort((a, b) => a.order - b.order);

    dispatch(_loadUsers(users));
  };
};

export const updateUser = (user, history) => {
  return async (dispatch) => {
    user = (await axios.put(`/api/users/${user.id}`, user)).data;

    history.push("/home");
  };
};

export const addUser = (user, history) => {
  return async (dispatch) => {
    user = (await axios.post("/api/add/user", user)).data;
    dispatch(_addUser(user));
    history.push("/account_created");
  };
};

export const deleteUser = (user, history) => {
  return async (dispatch) => {
    await axios.delete(`/api/users/${user.id}`);
    dispatch(_deleteUser(user));
    history.push("/home");
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
