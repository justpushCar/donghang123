import React, {Component} from 'react';
import Head from './head'
import Modal from '../components/bootstartp_modal.js'
import Immutable from 'immutable';
import {  hashHistory } from 'react-router'
import classNames from 'classnames';
import {fetchApiGetJson} from '../sagas/utils'
import {getCookie,setCookie} from '../sagas/utils.js'
export default class Login extends Component {
    constructor(props){
        super(props)
        if(getCookie('donghangName')){
            hashHistory.push('/');
        }
        this.state={
           show: 'flase',
           content:"",
           img:'http://www.dongh123.cn/api/vCode?w=140&h=48',
            codeInput:true
        }
    }
    componentDidMount() {

    }

    modal_close(){
        this.setState({
               show:"flase"
            })
    }
    blur(){

        if(!(/^1\d{10}$/.test(this.props.iphone)) && (this.props.iphone.length>0)){ 
            this.setState({
               show:"true" ,
               content:"请输入正确手机号码"
            })
         }
        if(this.props.password.length<6 && this.props.password.length>0){ 
            this.setState({
               show:"true" ,
               content:"密码不能少于6位数"
            })
         }
       if(this.props.repassword.length<6 && this.props.repassword.length>0){ 
            this.setState({
               show:"true" ,
               content:"密码不能少于6位数"
            })
         }
    }

    LinkTo(){
        hashHistory.push('/register');
    }
    chang_img(){
        this.setState({
            img:this.state.img+'&rand='+Math.random()
        })
    }
    doSubmit(){
       const phone=this.refs.phone.value
       const pwd=this.refs.pwd.value
       const code=this.refs.code.value
       const _this = this
        //  http://www.dongh123.cn/api/login vCode uLoginName uPassword
       fetchApiGetJson('http://www.dongh123.cn/api/login',`?vCode=${code}&uLoginName=${phone}&uPassword=${pwd}`)
            .then(data=>{
                console.log(data.resultStatus)
                if(data.resultStatus==="SUCCESS"){
                    setCookie('donghangName',phone,1)
                    hashHistory.push('/set')
                }else { 
                    _this.setState({
                        show:"true" ,
                        content:"用户名或密码错误",
                        codeInput:false
                    })
                }
            })
    }
    componentDidMount() {
      document.addEventListener('keyup',(e)=>{
        if(e.keyCode==13){
          this.doSubmit();
        }
      })
    }
    render() {
     
        return (
            <div >
                <Head/>
                <Modal  content={this.state.content} showModal={this.state.show} close={this.modal_close.bind(this)}/>
                <div className="home" style={{position:'relative',marginTop:'-50px',width:'600px'}}>
                <div className="login-box">
                    <div className="login-top">
                        <div className="t-account">账号密码登陆</div>
                        <div className="t-user" onClick={this.LinkTo}> 新用户注册</div>
                    </div>
                    <div className="lg-input">
                        <span className="lg-input-icon"><i className="fa fa-user fa-fw"></i></span>
                        <input className="la-input-control" type="user" placeholder="请输入账号" ref='phone'/>
                    </div>
                    <div className="lg-input">
                        <span className="lg-input-icon"><i className="fa fa-lock fa-fw "></i></span>
                        <input className="la-input-control" type="password" placeholder="请输入密码" ref='pwd'/>
                    </div>
                    <div className="lg-ver">
                        <input type="user"   className="ver-entry" placeholder='请输入验证码' ref='code'/>
                            <div className="ver-gain" style={{border:'none'}}><img onClick={this.chang_img.bind(this)} src={this.state.img}/> </div>
                    </div>
                    <div className="lg-land" onClick={this.doSubmit.bind(this)}>
                        <span>登陆</span>
                    </div>
                    <div className="lg-forget">忘记密码</div>
                </div>
                </div>
            </div>
        )
    }
        

 };
 