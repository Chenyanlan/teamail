import React, { Component } from 'react';
import { FormattedMessage } from 'umi-plugin-react/locale';
import Link from 'umi/link';
import RegistrationForm from '../../../components/FormComponents/RegistrationForm';
import styles from './style.less';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={styles.main}>
                <RegistrationForm />
                <div className={styles.other}>
                <Link className={styles.register} to="/user/login">
                <FormattedMessage id="user-login.register.sign-in" />
                </Link>
            </div>
            </div>
        )
    }
}

export default Register;
