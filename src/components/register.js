import React, {Component} from 'react';
import Head from './head'
import Modal from '../components/bootstartp_modal.js'
import Immutable from 'immutable';
import {  hashHistory } from 'react-router'
import classNames from 'classnames';
import {getCookie,setCookie} from '../sagas/utils.js'
export default class Register extends Component {
    constructor(props){
        super(props)
        if(getCookie('donghangName')){
            hashHistory.push('/');
        }
        this.state={
           show: 'flase',
           content:"",
           img:'http://www.dongh123.cn/api/vCode?w=128&h=48',
            codeInput:true
        }
    }
    componentDidMount() {
    	console.log(this.props)
    }
    componentWillReceiveProps(nextProps) {
         console.log(nextProps.RegisterResult)
        if(!Immutable.is(nextProps.MessageResult, this.props.MessageResult)){
            if(nextProps.MessageResult){
                if(nextProps.MessageResult.get('resultStatus')=="SUCCESS"){
                    this.setState({
                    show:"true" ,
                    content:"验证码已发送到手机",
                        codeInput:false
                    })
                }
                if(nextProps.MessageResult.get('resultCode')=="0001"){
                   this.setState({
                       show:"true" ,
                       content:"图形验证码错误"
                    })
                }
            }
        }
         if(!Immutable.is(nextProps.RegisterResult, this.props.RegisterResult)){
              if(nextProps.RegisterResult){
                if(nextProps.RegisterResult.get('resultStatus')=="SUCCESS"){
                    setCookie('donghangName',this.props.iphone,1)
                    hashHistory.push('/set')
                }
                if(nextProps.RegisterResult.get('resultCode')=="0001"){
                   this.setState({
                       show:"true" ,
                       content:"图形验证码错误"
                    })
                }
                if(nextProps.RegisterResult.get('resultCode')=="0007"){
                   this.setState({
                       show:"true" ,
                       content:"用户已存在"
                    })
                }
            }
         }
    }
    modal_close(){
        this.setState({
               show:"flase"
            })
    }
    blur(){
        this.props.SetLogin()
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
    getcode(){
        console.log(getCookie('name'))
          if(this.props.iphone=='' || this.props.password=='' ||  this.props.repassword=='' || this.props.imgcode=='' ){
               this.setState({
                 show:"true" ,
                content:"手机号或密码或验证码不能为空"
               })
          }
          else{
              if(!(/^1\d{10}$/.test(this.props.iphone)) && (this.props.iphone.length>0)){
                  this.setState({
                     show:"true" ,
                     content:"请输入正确手机号码"
                  })
               }
            if(this.props.password!= this.props.repassword ){
               this.setState({
                 show:"true" ,
                content:"两次密码不一致"
               }) }else{
                this.props.getcode()
               }
          }
    }
    onClickregister(){
          if(this.props.iphone=='' || this.props.password=='' ||  this.props.repassword=='' || this.props.code=='' || this.props.imgcode==''){
               this.setState({
                 show:"true" ,
                content:"手机号或密码或验证码不能为空"
               })
          }
          else{
              if(!(/^1\d{10}$/.test(this.props.iphone)) && (this.props.iphone.length>0)){
                    this.setState({
                       show:"true" ,
                       content:"请输入正确手机号码"
                    })
               }
              if(this.props.password!= this.props.repassword ){
                 this.setState({
                   show:"true" ,
                  content:"两次密码不一致"
                 })
              }else{
                this.props.onClickregister()
              }

          }
    }
    chang_img(){
           this.setState({
                  img:this.state.img+'&rand='+Math.random()
               })
          setCookie('donghangName','yusai',1)
        console.log(getCookie('name'))
        console.log(getCookie('donghangName'))
    }
    render() {

        return (
              <div>
                 <Head/>
                 <div className="allcontent">
                     <div className="option_line">
                          注册懂行123让导航更简单
                     </div>
                     <div className="register_box">
                         加入懂行 <br/>加入懂行一小步，迈开成功一大步
                         <div className="input_box">
                              <i className="fa fa-mobile fa-2x pull-left"></i>
                              <input type="text" className="iphone" onBlur={this.blur.bind(this)}
                              onChange={(e)=>this.props.changevalue(e.target.value,'iphone')} placeholder="手机号码(仅支持中国大陆)"/>
                         </div>
                         <div className="input_box">
                              <i className="fa fa-lock fa-2x pull-left"></i>
                              <input type="password" className="password1" placeholder="密码" onBlur={this.blur.bind(this)}
                               onChange={(e)=>this.props.changevalue(e.target.value,'password')} /><br/>
                         </div>
                         <div className="input_box">
                              <i className="fa fa-lock fa-2x pull-left"></i>
                              <input type="password" className="password2" placeholder="确认密码" onBlur={this.blur.bind(this)}
                              onChange={(e)=>this.props.changevalue(e.target.value,'repassword')} /><br/>
                         </div>
                         <div className="v_code">
                              <img src={this.state.img} onClick={this.chang_img.bind(this)}/>
                             <input className="code_input"  type='text' placeholder="图形验证码"  onChange={(e)=>this.props.changevalue(e.target.value,'imgcode')} />
                             <div className="cb"></div>
                         </div>
                         <div>

                             <input className={classNames({code_input:true,dn:this.state.codeInput}) }  type='text' placeholder="请输入短信验证码"  onChange={(e)=>this.props.changevalue(e.target.value,'code')} />
                             <div className={classNames({dn:!this.state.codeInput,send_codeFill:this.state.codeInput})} onClick={()=>this.getcode()} >获短信取验证码</div>
                             <div className="cb"></div>
                         </div>

                         <div  onClick={(e)=>this.onClickregister(e)} className="su_bmit" >
                         提交</div>
                     </div>
                       <Modal  content={this.state.content} showModal={this.state.show} close={this.modal_close.bind(this)}/>
                 </div>

              </div>

        )
    }


 };

