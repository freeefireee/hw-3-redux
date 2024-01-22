export const updateRandomNumber = (isAddition) => {
    const randomNumber = Math.floor(Math.random() * 51);
    const value = isAddition ? randomNumber : -randomNumber;
  
    return {
      type: 'UPDATE_RANDOM_NUMBER',
      payload: value,
    };
  };
  