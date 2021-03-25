export default function todoReducer(state, action) {
  switch (action.type) {
    case "Add Todo":
      return [...state, action.todo];
    case "Delete Todo":
      let newArr = state.filter((val) => val.id !== action.id);
      return newArr;
    case "Change Completed":
      return state.map((val) => {
        if (action.id === val.id) {
          return { ...val, completed: !val.completed };
        }
        return val;
      });
    case "Clear Todos":
      return [];
    default:
      return state;
  }
}
