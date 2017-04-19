import {createAction} from 'redux-actions';
import * as c from '../constants'

export const clickLogin = createAction(c.CLICK_LOGIN);
export const loginSuccess = createAction(c.LOGIN_SUCCESS);
export const loginFailed = createAction(c.LOGIN_FAILED);

export const clickLogout = createAction(c.CLICK_LOGOUT);

export const changeLoginUsername = createAction(c.CHANGE_LOGIN_USERNAME);
export const changeLoginPassword = createAction(c.CHANGE_LOGIN_PASSWORD);

export const industrySelect2Change = createAction(c.INDUSTRY_SELECT2_CHANGE);

export const clickContentTabLink = createAction(c.CLICK_CONTENT_TAB_LINK);


export const sendMessageSendtoSelectChange = createAction(c.SEND_MESSAGE_SENDTO_SELECT_CHANGE);
export const sendMessageSendtoContentChange = createAction(c.SEND_MESSAGE_SENDTO_CONTENT_CHANGE);
export const sendMessageSendtoFileChange = createAction(c.SEND_MESSAGE_SENDTO_FILE_CHANGE);
export const sendMessageSendtoFileDelete = createAction(c.SEND_MESSAGE_SENDTO_FILE_DELETE);
export const sendMessageFileUploadProgessChange = createAction(c.SEND_MESSAGE_FILE_UPLOAD_PROGESS_CHANGE);


export const sendMessageSubmit = createAction(c.SEND_MESSAGE_SUBMIT);
//userhome
export const choseThePage =createAction(c.CHOSE_THE_PAGE);
//userHomeMessage
export const selectSearch =createAction(c.SELECT_SEARCH);
export const choseCheckBox =createAction(c.CHOSE_CHECK_BOX);

//donghang



//弹出框
export const do_modal =createAction(c.DOmodal);
export const getcode =createAction(c.Getcode);
export const MessageResult =createAction(c.MessageResult);
export const do_register =createAction(c.DOregister);
export const chang_value =createAction(c.ChangValue);
export const RegisterResult =createAction(c.RegisterResult);
export const SetLogin =createAction(c.SetLogin);