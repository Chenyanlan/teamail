import React, { Component } from 'react';
import { Form, Upload, message, Button, Icon } from 'antd';

class UploadAvatar extends Component {

    render(){
        return (
            <Fragment>
                <div className={styles.avatar_title}>
                    <FormattedMessage id="accountsettings.basic.avatar" defaultMessage="Avatar" />
                </div>
                <div className={styles.avatar}>
                    <img src={avatar} alt="avatar" />
                </div>
                <Upload {...props}>
                    <div className={styles.button_view}>
                    <Button icon="upload">
                        <FormattedMessage
                        id="accountsettings.basic.change-avatar"
                        defaultMessage="Change avatar"
                        />
                    </Button>
                    </div>
                </Upload>
            </Fragment> 
        )
    } 
    
    
}

export default UploadAvatar;
