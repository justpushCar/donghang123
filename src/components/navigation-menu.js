import React, {Component} from 'react';


export default class NavigationMenu extends Component {

    componentDidMount() {
    }

    render() {
        return (

            <aside className="main-sidebar">
                {/* sidebar: style can be found in sidebar.less */}
                <section className="sidebar">
                    {/* Sidebar user panel */}
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
                        </div>
                        <div className="pull-left info">
                            <p>{this.props.admin.get('nickname')}</p>
                            <a href="#"><i className="fa fa-circle text-success"></i>{this.props.admin.get('mobile')}
                            </a>
                        </div>
                    </div>
                    {/* search form */}
                    <div className="sidebar-form">
                        <div className="input-group">
                            <input type="text" name="q" className="form-control" placeholder="搜索..."/>
                            <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i
                                        className="fa fa-search"></i></button>
                                  </span>
                        </div>
                    </div>
                    {/* /.search form */}
                    {/* sidebar menu: : style can be found in sidebar.less */}
                    <ul className="sidebar-menu">
                        <li className="header">用户菜单</li>
                        <li className="active treeview">
                            <a href="#">
                                <i className="fa fa-envelope"></i>
                                <span>
                                           消息管理
                                        </span>
                                <i className="fa fa-angle-left pull-right"></i>
                            </a>
                            <ul className="treeview-menu">
                                <li className="active"><a href="＃"><i className="fa fa-circle-o"></i>发送消息</a>
                                </li>
                                <li><a href="＃"><i className="fa fa-circle-o"></i>已发消息</a></li>
                            </ul>
                        </li>
                        <li><a href="#"><i className="fa fa-edit text-aqua"></i> <span>用户信息</span></a></li>
                    </ul>
                </section>
                {/* /.sidebar */}
            </aside>
        );
    }

};

