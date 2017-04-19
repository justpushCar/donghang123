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
export default class Home extends Component {
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
            alldata:{}
        }

    }
    componentWillMount(){
      const _this=this;
      let getall={};
        //http://www.dongh123.cn/api/industry/listIndustry  一级行业接口
        //2级行业 http://www.dongh123.cn/api/industry/listSecIndustry?industryName=1
        // 3级接口 http://www.dongh123.cn/api/industry/listIndustryUrl?industryName=1&secondIndustryName=1 
               fetchApiGetJson('http://www.dongh123.cn/api/industry/listIndustry','')
              .then(data=>{
                console.log(data.resultStatus)
                data.attributes.list.map((index)=>{
                    getall[index.industryName]=[]
                    fetchApiGetJson('http://www.dongh123.cn/api/industry/listIndustry',`?industryName=${index.industryName}`)
                    .then(data2=>{
                          data2.attributes.list.map((index2)=>{
                              console.log(index2.industryName)
                              fetchApiGetJson('http://www.dongh123.cn/api/industry/listIndustryUrl',
                                `?industryName=${index.industryName}&secondIndustryName=${index2.industryName}`)
                              .then(data3=>{
                                 console.log(data3)
                                 getall[index.industryName].push(data3.attributes.list);
                                 _this.setState({
                                    alldata:getall
                                 })
                                
                              })


                          })
                    })



                })
             
              })
    }
    componentDidMount() {
      
    }
    componentWillReceiveProps(nextProps) {

    }


    render() {

     let alldatas=this.state.alldata
     console.log(alldatas);
        return (
            <div>
                <Head/>
                <div className="home">
                    <div className="all">
                    {
                        alldatas.map((index)=>{
                          return (
                                   <div className="produ">sdfas</div>
                                 
                                  )
                        })
                    }
                        <div className="produ">产品</div>
                        <div className="line"></div>
                        <div>
                            <div className="ne">行业咨讯</div>
                            <div className="ne-ws">新浪微博</div>
                            <div className="ne-ws">中华新闻网</div>
                            <div className="ne-ws">美国之音新闻</div>
                            <div className="ne-ws">虎嗅网</div>
                            <div className="ne-ws">36KR</div>
                            <div className="ne-ws">腾讯新闻</div>
                            <div className="ne-ws">腾讯新闻</div>
                            <div className="ne-ws">腾讯新闻</div>
                        </div>
                        <div className="fl"></div>
                        <div>
                            <div className="ne">行业咨讯</div>
                            <div className="ne-ws">新浪微博</div>
                            <div className="ne-ws">中华新闻网</div>
                            <div className="ne-ws">美国之音新闻</div>
                            <div className="ne-ws">虎嗅网</div>
                            <div className="ne-ws">36KR</div>
                            <div className="ne-ws">腾讯新闻</div>
                        </div>
                        <div className="fl"></div>
                        <div>
                            <div className="ne">行业咨讯</div>
                            <div className="ne-ws">新浪微博</div>
                            <div className="ne-ws">中华新闻网</div>
                            <div className="ne-ws">美国之音新闻</div>
                            <div className="ne-ws">虎嗅网</div>
                            <div className="ne-ws">36KR</div>
                            <div className="ne-ws">腾讯新闻</div>
                        </div>
                       
                    </div>

                </div>
            </div>

    )
    }


};
