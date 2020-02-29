export const findIndex = (array, value) => {
  if (array == null) 
      return void 0;
    if (value == null) 
      return array[0];
    if (value < 0)
      return [value];
    return array.slice(0, value);
  }




