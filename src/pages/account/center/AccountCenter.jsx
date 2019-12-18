import React,{Component} from 'react';
import { Avatar,Card,Col,Divider,Icon,Input,Row,Tag } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import styles from './AccountCenter.less';

const operationTablList = [
    {
        key:'articles',
        tab:(
            <span>
                文章{' '}
                <span
                    style={{fontSize:14}}
                >
                    (8)
                </span>
            </span>
        ),
    },
    {
        key:'collection',
        tab:(
            <span>
                收藏{' '}
                <span
                    style={{fontSize:14}}
                >
                    (8)
                </span>
            </span>
        ),
    },
    // {
    //     key:'articles',
    //     tab:(
    //         <span>
    //             文章{' '}
    //             <span
    //                 style={{fontSize:14}}
    //             >
    //                 (8)
    //             </span>
    //         </span>
    //     ),
    // },
]
class AccountCenter extends Component{
    constructor(props){
        super(props);
        this.state={
            dataLoading:false,
        }
    }

    render(){
        console.log(this.props);
        const {dataLoading} = this.state;
        return (
            <GridContent>
                <Row gutter={24}>
                    <Col lg={7} md={24}>
                        <Card bordered={false} style={{marginBottom:24}} loading={dataLoading}>
                            <div className={styles.avatarHolder}>
                                {/* <img src={} alt=""/> */}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </GridContent>
        )
    }
}
export default AccountCenter;
