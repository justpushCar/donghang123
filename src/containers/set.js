/**
 * Created by n on 2017/3/12.
 */
import {connect} from 'react-redux'
import Seting from '../components/set'

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
        }
    }
}

const seting = connect(
    mapStateToProps,
    mapDispatchToProps
)(Seting)

export default Seting
