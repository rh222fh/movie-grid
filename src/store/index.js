import React from 'react';
import createContainer from 'constate';

export const { Context, Provider } = createContainer(() => {
  
});
export function useAppState() {
  const state = React.useContext(Context);
  return state;
}