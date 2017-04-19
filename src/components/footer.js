import React, {Component} from 'react';
import ControlPanel from './control-panel';
import SendMessageContainer from '../containers/SendMessageContainer';

export default class ContentPage extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <footer className="main-footer">
                <div className="container">
                    <div className="pull-right hidden-xs">
                        <b>Version</b> 1.0.0
                    </div>
                    <strong>Copyright &copy; 2015-2017 <a href="http://recopr.com">ReCoPr.com</a>.</strong>
                    <br/>All
                    rights
                    reserved.
                </div>
                {/*<!-- /.container -->*/}
            </footer>
        );
    }

};

