/**
 * Created by n on 2017/3/12.
 */
//http://www.dongh123.cn/api/industry/listIndustry  一级行业接口
//2级行业 http://www.dongh123.cn/api/industry/listSecIndustry?industryName=1
// 3级接口 http://www.dongh123.cn/api/industry/listIndustryUrl?industryName=1&secondIndustryName=1


import React, {Component} from 'react';
import Head from './head'
import Modal from '../components/bootstartp_modal.js'
import {  hashHistory } from 'react-router'
import classNames from 'classnames';
import {fetchApiGetJson} from '../sagas/utils'
import {getCookie,setCookie} from '../sagas/utils.js'
export default class Seting2 extends Component {
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
            setData:[],
            set1chose:'',
            set1ji:'',
            industry1value:''  //选择的一级行业
        }
        this.del=this.del.bind(this);
        this.getalldata=this.getalldata.bind(this);
        this.add =this.add.bind(this);
    }
       init(industryName =''){
               const _this = this;
               //http://www.dongh123.cn/api/industry/listIndustry  一级行业接口
              //2级行业 http://www.dongh123.cn/api/industry/listSecIndustry?industryName=1
              // 3级接口 http://www.dongh123.cn/api/industry/listIndustryUrl?industryName=1&secondIndustryName=1
               fetchApiGetJson('http://www.dongh123.cn/api/userIndustry/listUserIndustry?industryName='+industryName,'')
              .then(data=>{
                 console.log('dadta==============>',data.attributes.userIndustry.industryName);
                _this.setState({
                     setData:data.attributes.list[0],
                     industry1value:data.attributes.userIndustry.industryName
                })

              })
    }
    getalldata(){
        const _this = this;
        fetchApiGetJson('http://www.dongh123.cn/api/userIndustry/listUserIndustry','')
              .then(data=>{
                _this.setState({
                     setData:data.attributes.list[0],
                     set1ji:data.attributes.userIndustry.industryName
                })
              })
    }
    componentWillMount(){
         this.getalldata()
    }
    componentDidMount() {

    }
    componentWillReceiveProps(nextProps) {

    }
   del(id){
    let sure = window.confirm("确认删除");
    if(sure){
      fetchApiGetJson('http://www.dongh123.cn/api/userIndustry/delUserUrlIndustry?uIndustryId='+id,'')
              .then(data=>{
                 console.log('del======>',data);
                 if(data.resultStatus==="SUCCESS"){
                    this.getalldata()
                 }
              })
    }
   }
   add(index){
     alert(index);
   }

    render() {
      let { setData, set1ji} = this.state;
      console.log(set1ji);
      setData = setData[set1ji];
      let all= [];

      let getline = (lineobj) =>{
          let line = [];
          console.log('=>>>>>',lineobj)
          lineobj.三级行业.forEach((lineVal,lineKey)=>{
            line.push(
                         <div className="ne-ws">
                           <a style={{color:"#000"}} href={"http://"+lineVal.urlAddress}>{lineVal.urlName}</a>
                           <i onClick={()=>this.del(lineVal.uIndustryId)}
                           style={{cursor:"pointer",color:"#000"}} className="fa fa-close  fa-fw"></i>
                         </div>
                       )

          })
          //  line.push(<div className="fl"></div>)
          return line
      }
      let getElement = () =>{
        for (let index in setData){
          console.log('sssssss===ssss', setData[index]);
             all.push(
                    <div className="allset2" key={index}>
                        <div className="produ produ2">{index}</div>
                        <div
                         onClick={()=>this.add(index)}
                         className="add">添加</div>
                        <div className='fl'></div>
                        <div className="line2"></div>
                        <div>
                        <div className="one-block">
                        {getline(setData[index])}
                        </div>
                        </div>
                        <div className="fl"></div>

                    </div>
              )

        }
          return all
      }
      // let alldatas=this.state.alldata
      // console.log(alldatas);se
        return (
            <div>
                <Head/>
                {getElement()}
                <div style={{height:"200px"}}></div>
            </div>
    )
  }
};
