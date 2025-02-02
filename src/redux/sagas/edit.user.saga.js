import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchEditUser(action) {
  console.log('wsdsf')
  try {
    
   const response = yield axios ({
        method: 'GET',
        url: 'api/user/edituser'
    })
console.log('spam++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++', action.payload)
    yield put({ type: 'SET_EDIT_USER', payload: response.data });
  } catch (error) {
    console.log('Edit User get request failed', error);
  }
}


function* userEditSaga() {
  yield takeLatest('FETCH_EDIT_USER', fetchEditUser);
}

export default userEditSaga;
