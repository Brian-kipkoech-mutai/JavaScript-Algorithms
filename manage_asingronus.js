const manage_asingronus = () => {
  return (dispatch) => {
    dispatch(requesting_data());
    setTimeout(() => {
      let data = {
        userss: ['Jeff', 'William', 'Alice']
      };
      dispatch(received_data(data));

    }, 2500);
  };
};
