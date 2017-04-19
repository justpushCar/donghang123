import Select2 from 'react-select2-wrapper';
import React, {Component} from 'react';
import FileUpload from 'react-fileupload';


export default class SendMessage extends Component {

    componentDidUpdate() {
    }

    handleSelectChange = (e) => {
        var options = e.target.options;
        var value = [];
        for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
                value.push(options[i].value);
                console.log('selected:', options[i].value);
            }
        }
        this.props.onSendtoSelectChange(value);
    }

    handleContentChange = (e) => {
        console.log("this.refs.textarea.value", this.refs.contentTextarea.value);
        this.props.onSendtoContentChange(this.refs.contentTextarea.value);
    }

    handleUploadProgress(progress) {
        if (progress.total != 0) {
            this.props.onUploadProgressChange('已上传' + (progress.loaded / progress.total).toFixed(2) * 100 + '%');
            console.log('已上传' + (progress.loaded / progress.total).toFixed(2) * 100 + '%');
        }
    }

    handleUploadSuccess(resp) {
        console.log('upload success:' + resp.filename + ":" + resp.uploadedFilename);
        this.props.onSendtoFileChange(resp);
    }

    handleFileDelete() {
        console.log('file delete');
        this.props.onSendtoFileDelete();
    }

    handleMessageSubmit = (e) => {
        e.preventDefault();
        this.props.onSendMessageSubmit();
    }

    render() {
        return (
            <div className="box box-info">
                <div className="box-header ui-sortable-handle" style={{cursor: "move"}}>
                    <i className="fa fa-envelope"></i>

                    <h3 className="box-title">发送消息</h3>
                    <div className="pull-right box-tools">
                    </div>
                </div>
                <div className="box-body">
                    <div className="form-group">
                        <label for="sendto">请输入要发送的人员列表（请输入手机号、姓名或单位名称查找要发送给的人员，可以发给多人）</label>
                        <Select2 id="sendtoSelect" name="sendto"
                                 multiple
                                 value={this.props.selectValue}
                                 ref="sendtoMobiles"
                                 data={this.props.sendtoData}
                                 options={{placeholder: "输入手机或姓名",}}
                                 style={{width: "100%"}}
                                 onChange={this.handleSelectChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="content">请输入要发送的内容</label>
                        <textarea className="form-control" rows="3" id="content" name="content"
                                  placeholder="发送内容..."
                                  defaultValue={this.props.sendtoContent}
                                  ref="contentTextarea"
                                  onChange={this.handleContentChange}></textarea>
                    </div>
                    <div class="form-group"
                         style={{color: 'red', display: this.props.fileDelete}}
                         onClick={this.handleFileDelete.bind(this)}>
                        点击删除所选文件
                    </div>
                    <div className="form-group">
                        <FileUpload options={{
                            baseUrl: '/upload',
                            param: {fid: 0},
                            chooseAndUpload: true,
                            beforeUpload: function (files, mill) {
                                if (typeof files == 'string') return true
                                if (files[0].size < 1024 * 1024 * 10) {
                                    files[0].mill = mill
                                    return true
                                }
                                alert("上传最大文件不超过10M。");
                                return false
                            },
                            doUpload: function (files, mill) {
                                console.log('you just uploaded', typeof files == 'string' ? files : files[0].name)
                            },
                            uploading: this.handleUploadProgress.bind(this),
                            uploadSuccess: this.handleUploadSuccess.bind(this),
                            uploadError: function (err) {
                                alert("uploadError:" + err.message)
                            }
                        }}>
                            <label className="form-control" style={{
                                width: "100%",
                                height: "40px",
                                borderWidth: "2px",
                                borderColor: "#666",
                                borderStyle: "dashed",
                                borderRadius: "5px"
                            }} ref="chooseAndUpload">{this.props.sendFilename}
                            </label>
                        </FileUpload>
                    </div>
                </div>
                <div
                    className="box-footer clearfix">
                    < button type="submit" className="btn btn-primary" onClick={this.handleMessageSubmit}>
                        发送
                    </ button >
                </ div >
            </ div >
        )
    }

}
