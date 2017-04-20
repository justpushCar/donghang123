import React, {Component} from 'react';
import {Modal,Button} from 'react-bootstrap';
 export default class BootstarpModal extends Component {
    constructor(props){
        super(props);
        let title=  this.props.title?this.props.title:"提示"
        let content=  this.props.content?this.props.content:""
        let showModal=  this.props.showModal=='true'?true:false
        this.state={
            showModal:showModal,
            title:title,
            content:content
        }
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
           {modalObj.}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close.bind(this)}>关闭</Button>
          </Modal.Footer>
        </Modal>
      </div>
        )
    }


 };

