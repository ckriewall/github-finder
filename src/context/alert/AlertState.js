/* 
  ContextSTATE: defines initial state and actions.
  Results from actions are dispatched to the ContextREDUCER to change global state
*/

import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = props => {
  const initialState = null;

  // useReducer hook sends state and changes to REDUCER
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  /* DEFINE ACTIONS */

  // Set Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000); // hide alert after 5 seconds
  };

  /* END DEFINE ACTIONS */

  // Context PROVIDER exposes data and functions to the app.
  // This return allows Context providers to be wrapped around Routes in App.js
  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
