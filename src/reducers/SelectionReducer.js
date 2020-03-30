export default (state = null, action) => {
  switch (action.type) {
    case "selected_library":
      return action.payload; //carga el valor de payload (id) en el state
    default:
      return state;
  }
};
