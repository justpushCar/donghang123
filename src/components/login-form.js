import React, {Component} from 'react';

const LoginForm = ({login, onChangeLoginUsername, onChangeLoginPassword, onClickLogin}) => (
    <div className="login-page" id={login.get('id')} style={(() => {
        if (login.get('active') == true) {
            return {
                display: 'block',
                minHeight: "1000px",
                marginTop: '-120px',
                paddingTop: "200px",
                marginBottom: '-20px',
                paddingBottom: "300px"
            };
        } else {
            return {
                display: 'none',
                minHeight: "1000px",
                marginTop: '-120px',
                paddingTop: "200px",
                marginBottom: '-20px',
                paddingBottom: "300px"
            };
        }
    })()}
    >
        <div className="login-box">
            <div className="login-logo">
                <a href="＃"><span className="logo-lg"><img src="dist/img/tong.png" style={{
                    width: "45px",
                    height: "45px", marginBottom: "10px"
                }}/><b>警务消息一键通</b></span></a>
            </div>
            <div className="login-box-body">
                <p className="login-box-msg">输入手机号和密码登录系统</p>
                <form>
                    <div className="form-group has-feedback">
                        <input type="text" className="form-control" name="username" placeholder="一键通注册手机号码"
                               onChange={ (event) =>onChangeLoginUsername(event.target.value)}/>
                        <span className="glyphicon glyphicon-phone form-control-feedback"></span>
                    </div>
                    <div className="form-group has-feedback">
                        <input type="password" className="form-control" name="password" placeholder="一键通密码"
                               onChange={ (event) =>onChangeLoginPassword(event.target.value)}/>
                        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                    </div>
                    <div className="row">
                        <div className="col-xs-8">
                        </div>
                        <div className="col-xs-4">
                            <button type="submit" className="btn btn-primary btn-block btn-flat" onClick={e => {
                                e.preventDefault();
                                return (onClickLogin())
                            }}>登录
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>


);

export default LoginForm