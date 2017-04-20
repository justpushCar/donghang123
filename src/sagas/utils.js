import axios from 'axios';
import {  hashHistory } from 'react-router'
export function fetchApiGetText(path, params) {
    return axios.get(path + params).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.log(error);
    });
}
export function fetchApiGetJson(path, params) {
    return axios.get(path + params)
    .then(function (response) {
        if(response.data.resultStatus == "NEED_LOGIN"){
            delAllCookie()
            hashHistory.push('/login');
        }else{
              return response.data;
        }

    }).catch(function (error) {
        console.log(error);
    });
}
export function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())
}

export function getCookie(c_name) {
    if (document.cookie.length > 0) {
        let c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            let c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ''
}
export function delAllCookie()
{
    var keys=document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie=keys[i]+'=0;expires=' + new Date( 0).toUTCString()
    }
}

// var eb = new EventBus('http://127.0.0.1:9090/eventbus/');
// eb.onopen = function () {
//     eb.registerHandler('some-address5', function (error, message) {
//         console.log('received a message: ' + JSON.stringify(message));
//     });
// }
//
// function * accountProjectAddSubmit(eb) {
//     while (true) {
//         if (yield take(c.ACCOUNT_PROJECT_ADD_SUBMIT)) {
//             if (eb.state != EventBus.OPEN) {
//                 console.log('reconnect eb');
//                 eb = yield call(connect);
//                 yield fork(read, eb);
//             }
//             yield eb.send('some-address5', {name: yield select(s.getAccountProjectAddName)});
//         }
//
//     }
// }
// function * clickEvent() {
//     while (true) {
//         const action = yield take(c.CLICK_EVENT);
//         console.log("clickEvent", action.payload);
//         const token = yield select(s.getToken);
//         const result = yield call(u.fetchApiGetText, '/eventdetails/', '?id=' + action.payload + '&jwt=' + token);
//         const JS = JSON.parse(decodeURIComponent(result.replace(/\+/g, " ")));
//         yield put({type: c.SET_EVENTDETAILS, payload: Immutable.fromJS(JS)})
//     }
// }
