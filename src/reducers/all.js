require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');
// require('core-js');
import {Map} from 'immutable';
import * as c from '../constants'
import * as u from '../sagas/utils'


const all = (state = Map(), action) => {
    console.log("REDUCER:action:", JSON.stringify(action, null, 2));
    switch (action.type) {
        //init
        case c.INITIAL_STATE:
            console.log("initial_state:", JSON.stringify(action.payload, null, 2));
            return action.payload
        //弹出框的控制
        case c.DOmodal:
            return state.setIn(['modal', 'title'], action.payload.title)
                   .setIn(['modal', 'content'], action.payload.content)
        case c.ChangValue:
            if(action.payload.c==='iphone'){
               return state.setIn(['register','iphone'],action.payload.v)
            } 
             if(action.payload.c==='password'){
               return state.setIn(['register','password'],action.payload.v)
            }  
             if(action.payload.c==='repassword'){
               return state.setIn(['register','repassword'],action.payload.v)
            }
            if(action.payload.c==='code'){
               return state.setIn(['register','code'],action.payload.v)
            }  
            if(action.payload.c==='imgcode'){
               return state.setIn(['register','imgcode'],action.payload.v)
            }  

        case c.MessageResult:    
               return state.setIn(['register','MessageResult'],action.payload)
        case c.RegisterResult:    
               return state.setIn(['register','RegisterResult'],action.payload)   
        case c.SetLogin:
              u.setCookie("name",state.getIn(['register','iphone']),'')
              console.log('成功登陆')
              return state          

        //userhome
        case c.CHOSE_THE_PAGE:
            console.log(action.payload)
            return state.setIn(['config', 'active'], action.payload)
        //userhomeMessage
        case c.SELECT_SEARCH:
             return state.updateIn(['pages','message','search',0],value=>action.payload)
        case c.CHOSE_CHECK_BOX:
             return state.updateIn(['pages','message','filterDatas',action.payload,'checked'],value=>!value)
      







        

        default:
            return state
    }
    console.log("AFTER:action:", JSON.stringify(state.toJS(), null, 2));
}

export default all


