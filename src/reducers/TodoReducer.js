const initialState = {
  list: []
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add": {
      const { id, data } = action.payload;
      console.log("add", id, data);
      console.log(state);
      const ll = [
        ...state.list,
        {
          id: id,
          data: data
        }
      ];
      console.log(ll);
      //   state.list = ll;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data
          }
        ]
      };
    }

    case "remove": {
      const newList = state.list.filter((obj) => obj.id != action.id);

      return {
        ...state,
        list: newList
      };
    }

    case "remove_all": {
      return {
        ...state,
        list: []
      };
    }

    default:
      return state;
  }
};

console.log(initialState.list);

export default todoReducer;
