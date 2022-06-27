export const actionsChat = (listUsers) => {
  return {
    type: 'GET_ALL_USER',
    payload: listUsers,
  };
};
