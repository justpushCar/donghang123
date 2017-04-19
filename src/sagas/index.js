import 'babel-polyfill';
import {select, take, put, call, fork} from 'redux-saga-ie8/effects';
import Immutable from 'immutable';
import * as c from '../constants'
import * as s from '../reducers/selectors'
import * as u from './utils'

let url="http://www.dongh123.cn/api/reg"; //zhuce
let imgurl="http://www.dongh123.cn/api/smsVcode" //获取短信
let registerurl="http://www.dongh123.cn/api/reg" //smsVcode  uLoginName uPassword
function * sendMessageSubmit() {
    while (true) {
        yield take(c.Getcode) 
              const iphone = yield select(s.registerIphone);
              const imgcode = yield select(s.registerImgode);
    
        const sendmessage = yield call(u.fetchApiGetText, imgurl, `?mobile=${iphone}&vCode=${imgcode}`);
        if (sendmessage) {
              sendmessage.tickt=Math.random()
              yield put({type: c.MessageResult, payload: Immutable.fromJS(sendmessage)});
        } 

    }
}
 
function * registerSubmit() {
    while (true) {
        yield take(c.DOregister) 
        const iphone = yield select(s.registerIphone);
        const password = yield select(s.registerPassword);
        const code = yield select(s.registerCode);
        const sendmessage = yield call(u.fetchApiGetText, registerurl, `?smsVcode=${code}&uLoginName=${iphone}&uPassword=${password}`);
        if (sendmessage) {
              sendmessage.tickt=Math.random()
              yield put({type: c.RegisterResult, payload: Immutable.fromJS(sendmessage)});
        }

    }
}
export function *root() {
    yield fork(sendMessageSubmit);
    yield fork(registerSubmit);
    yield put({type: c.INITIAL_STATE, payload: Immutable.fromJS(initalState)});
}

const initalState = {
        register:{iphone:"",password:"",repassword:"",imgcode:"",code:"",MessageResult:"",RegisterResult:""},
        modal:{title:"提示",content:"",showModal:"false"}
};

