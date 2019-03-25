import axios from "axios";

// REDUX ACTIONS
export const getApps = (cb) => {
  return (dispatch) => {
    axios.get("/api/apps")
      .then( res => dispatch({ type: "APPS", apps: res.data, }))
      .then( cb )
  }
}

export const addApp = (app) => {
  return (dispatch) => {
    axios.post("/api/apps", { app })
      .then( res => dispatch({ type: "ADD_APP", app: res.data, }) )
  }
}

export const updateApp = (app) => {
  return (dispatch) => {
    axios.put(`/api/apps/${app.id}`, { app })
      .then( res => dispatch({ type: "UPDATE_APP", app: res.data, }))
  }
}

export const deleteApp = (id) => {
  return (dispatch) => {
    axios.delete(`/api/apps/${id}`)
      .then( () => dispatch({ type: "DELETE_APP", id, }))
  }
}

// REDUX REDUCER
export default (state = [], action) => {
  switch (action.type) {
    case "APPS":
      return action.apps
    case "ADD_APP":
      return [action.app, ...state]
    case "UPDATE_APP":
      return state.map(a => {
        if (a.id === action.app.id)
          return action.app
        return a
      })
    case "DELETE_APP":
      return state.filter(a => a.id !== action.id)
    default:
      return state;
  }
}

// store = {
//   apps: [],
// }
