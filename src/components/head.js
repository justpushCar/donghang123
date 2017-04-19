import React, {Component} from 'react';
import {delAllCookie} from '../sagas/utils.js'
import {  hashHistory,Link } from 'react-router'
import  classNames from 'classnames'
import {getCookie} from '../sagas/utils.js'
import {fetchApiGetJson} from '../sagas/utils'
export default class Head extends Component {
    constructor(props){
        super(props)
       // if(getCookie('donghangName')){
            this.state={
                show:true
            }
        this.getSet1=this.getSet1.bind(this);     
    }

    componentDidMount() {
        if(!getCookie('donghangName')){
            this.setState({
                show:true
            })
        }
    }
    quit(){
        delAllCookie()
        hashHistory.push('/login')
    }
    linkTo(){
        hashHistory.push('/')
    }
    getSet1(index){
        let {set1list,homeinit}=this.props
         fetchApiGetJson('http://www.dongh123.cn/api/userIndustry/listUserIndustry?industryName='+set1list[index].industryName,'')
              .then(data=>{
                  homeinit();
              })
    }

    render() {
        let {set1list, page, industry1value}=this.props
        console.log( 'home========》',page, set1list,industry1value);
        return (
            <div className="head">
                <div className="head_content">
                    <img onClick={this.linkTo} src="./dist/img/donghangloge.png" className="logo"/>
                    <Link to="/home"><div className='my_option'>我的懂行</div></Link>
                    <div className={classNames({my_set:true,dn:!this.state.show})}  >
                        <span>设置</span>
                        <div>
                            <Link to="/set2"><li>个性设置</li></Link>
                            <li>修改密码</li>
                            <li onClick={this.quit}>退出</li>
                        </div>
                    </div>
                    { (page == 'home')?
                      (
                        <div className={classNames({my_set:true,dn:!this.state.show})}  >
                          <span>{industry1value}</span>
                          <div className='set1'>
                           {
                              set1list.map((vlue,key)=>{
                                  
                                 return <div className='li' key={key} >
                                          <input type='radio' id={`checkbox${key}`} name="set1" onChange={()=>this.getSet1(key)} />
                                          <label htmlFor={`checkbox${key}`} >{vlue.industryName}</label>
                                        </div>
                              })
                           }
                          </div>
                        </div>
                        ):null
                    }
                </div>
            </div>
        );
    }

};

