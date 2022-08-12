export const actionUpdateQuantity = (id: string, quantity: number) => {
  return {
    type: 'UPDATE_QUANTITY',
    payload: id,
    quantity,
  };
};

export const actionRemoveItem = (id: string) => {
  return {
    type: 'REMOVE_ITEM',
    payload: id,
  };
};


export const actionApplyShipping = (shipping) => {
  return {
    type: 'APPLY_SHIPPING',
    payload: shipping,
  };
};
