/**
 * Created by n on 2017/3/12.
 */

import React, {Component} from 'react';
import Head from './head'
import Modal from '../components/bootstartp_modal.js'
import Immutable from 'immutable';
import {  hashHistory } from 'react-router'
import classNames from 'classnames';
import {fetchApiGetJson} from '../sagas/utils'
import {getCookie,setCookie} from '../sagas/utils.js'
export default class Seting extends Component {
    constructor(props){
        super(props)
        if(getCookie('donghangName')===''){
            hashHistory.push('/login');
        }
        this.state={
            show: 'flase',
            content:"",
            img:'http://www.dongh123.cn/api/vCode?w=168&h=48',
            codeInput:true,
            set1Data:[],
            set1chose:''
        }
    this.getSet1=this.getSet1.bind(this);
    }
    getSet1(key){
       const _this = this;
     this.setState({
      set1chose:this.state.set1Data[key].industryName
     })
     //http://www.dongh123.cn/api/userIndustry/initUserUrlIndustry?industryName

    }
   set1submit(){
     fetchApiGetJson('http://www.dongh123.cn/api/userIndustry/initUserUrlIndustry?industryName='+this.state.set1chose,'')
              .then(data=>{
                // _this.setState({
                //      set1Data:data.attributes.list
                // })
                  hashHistory.push('/home');
                //console.log(data.attributes.list);
              })
   }
    componentWillMount(){
      const _this = this;
        //http://www.dongh123.cn/api/industry/listIndustry  一级行业接口
        //2级行业 http://www.dongh123.cn/api/industry/listSecIndustry?industryName=1
        // 3级接口 http://www.dongh123.cn/api/industry/listIndustryUrl?industryName=1&secondIndustryName=1
               fetchApiGetJson('http://www.dongh123.cn/api/industry/listIndustry','')
              .then(data=>{
                _this.setState({
                     set1Data:data.attributes.list
                })
                console.log(data.attributes.list);
              })
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {

    }


    render() {

     // let alldatas=this.state.alldata
     // console.log(alldatas);

     const {set1chose} = this.state;
     const set1submitClass = classNames( 'setSubmit',{disable:!set1chose});

        return (
            <div>
                <Head/>
                <div className="home">
                    <div className="all">
                        <div className="option_line">选择你的职业</div>
                        <div className='choses'>
                        {
                          this.state.set1Data.map((vlue,key)=>{

                             return <div className='li' key={key} >
                                      <input type='radio' id={`checkbox${key}`} name="set1" onChange={()=>this.getSet1(key)} />
                                      <label htmlFor={`checkbox${key}`} >{vlue.industryName}</label>
                                    </div>
                          })
                        }
                          <div className="cb"></div>
                        </div>
                        <div  className={set1submitClass} onClick={this.set1submit.bind(this)}>提交</div>

                    </div>
                    <div className="all">
                    </div>
                </div>
            </div>

    )
    }
};
