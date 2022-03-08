export const add = (val) => {
  return {
    type: "add",
    payload: {
      id: new Date().getTime().toString(),
      data: val
    }
  };
};

export const remove = (id) => {
  return {
    type: "remove",
    id: id
  };
};

export const removeAll = () => {
  return {
    type: "remove_all"
  };
};
