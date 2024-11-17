
export const setMaxDate = () => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  };