import {connect} from 'react-redux'
import { do_register,chang_value,getcode, SetLogin} from '../actions'
import Register from '../components/register'

const mapStateToProps = (state) => {
    return {
        iphone: state.all.getIn(['register','iphone']),
        password: state.all.getIn(['register','password']),
        repassword: state.all.getIn(['register','repassword']),
        imgcode: state.all.getIn(['register','imgcode']),
        code: state.all.getIn(['register','code']),
        MessageResult: state.all.getIn(['register','MessageResult']),
        RegisterResult: state.all.getIn(['register','RegisterResult']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickregister: (e) => {
            dispatch(do_register("2222299999999999"));
        },
         changevalue:(value,c) => {
            let a={}
            a.v=value
            a.c=c
            dispatch(chang_value(a));
        },
        getcode:()=>{
            dispatch(getcode());
        },
        SetLogin:()=>{
            dispatch(SetLogin())
        }
    }
}

const register = connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)

export default register
