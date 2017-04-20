import React, {Component} from 'react';
import {Modal,Button, form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
 export default class Addmode extends Component {
    constructor(props){
        super(props);
        let title=  this.props.title?this.props.title:"提示"
        let content=  this.props.content?this.props.content:""
        let showModal=  this.props.showModal=='true'?true:false
        this.state={
            showModal:showModal,
            title:title,
            content:content,
            value:'',
            value2:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.submit = this.submit,bind(this);
    }

    getValidationState() {
      const length = this.state.value.length;
      if (length > 10) return 'success';
      else if (length > 5) return 'warning';
      else if (length > 0) return 'error';
    }

    handleChange(value,e) {
      (value =='value') ? this.setState({ value: e.target.value})
      :this.setState({ value2: e.target.value});
    }
    submit(){
       let{value,value2}=this.state;
       alert(value);
       alert(value2);
    }

   close() {
    this.props.close()
    this.setState({ showModal: false });
   }
  open(e) {
    console.log(e)
    this.setState({ showModal: true });
  }
   componentWillReceiveProps(nextProps) {
        this.setState({
            showModal: nextProps.showModal=='true'?true:false,
            title:nextProps.title?nextProps.title:"提示",
            content:nextProps.content
        });
    }

    render() {
        let {modalObj}=this.props;
        return (
              <div>
        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
              <form>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>网站名称</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="网站名称"
                     onChange={(e)=>this.handleChange('value',e)}
                  />
                  <FormControl.Feedback />
                </FormGroup>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.getValidationState()}
                >
                  <ControlLabel>网站地址</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.value2}
                    placeholder="www.xxx.com"
                    onChange={(e)=>this.handleChange('value2',e)}
                  />
                  <FormControl.Feedback />
                </FormGroup>
              </form>
                <Button type="submit" onClick={this.submit}>
                  添加
                </Button>
           {modalObj.industryName}
           {modalObj.industryName2}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>关闭</Button>
          </Modal.Footer>
        </Modal>
      </div>
        )
    }


 };

