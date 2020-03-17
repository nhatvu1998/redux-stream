import streams from '../apis/streams';
import {SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, DELETE_STREAM, EDIT_STREAM, FETCH_STREAMS} from './types'
import history from '../history';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createStream = (formValues) => async (dispatch, getState) => {
  const {userId} = getState().auth;
  const reponse = await streams.post('./streams', {...formValues, userId});
  dispatch({type: CREATE_STREAM, payload: reponse.data}); 
  history.push('/');
}

export const fetchStreams = () => async (dispatch) => {
  const reponse = await streams.get('./streams');
  dispatch({type: FETCH_STREAMS, payload: reponse.data}); 
}

export const fetchStream = (id) => async (dispatch) => {
  const reponse = await streams.get(`./streams/${id}`);
  dispatch({type: FETCH_STREAM, payload: reponse.data}); 
}

export const editStream = (id, formValues) => async (dispatch) => {

  const reponse = await streams.patch(`./streams/${id}`, formValues);
  dispatch({type: EDIT_STREAM, payload: reponse.data}); 
  history.push('/');
}

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`./streams/${id}`);
  dispatch({type: DELETE_STREAM, payload: id}); 
}