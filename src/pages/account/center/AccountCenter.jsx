import React,{Component} from 'react';
import { connect } from 'dva';
import { Avatar,Card,Col,Divider,Icon,Input,Row,Tag } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import styles from './AccountCenter.less';
import Articles from './Articles/Articles';
import avatar from '../../../assets/avatar3.jpg';
import { Link } from 'umi';

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
@connect(({loading,accountCenter})=>({
    currentUser:accountCenter.currentUser,
    currentUserLoading:loading.effects['accountCenter/fetchCurrent']
}))
class AccountCenter extends Component{
    input = undefined;

    constructor(props){
        super(props);
        this.state={
            // dataLoading:false,
            newTags: [],
            inputVisible: false,
            inputValue: '',
            tabKey: 'articles',
        }
    }

    componentDidMount(){
        const {dispatch} = this.props;
        dispatch({
            type:'accountCenter/fetchCurrent',
        });
        dispatch({
            type:'accountCenter/fetch'
        })
    }


    saveInputRef = input => {
        this.input = input;
      };
    
      handleInputChange = e => {
        this.setState({
          inputValue: e.target.value,
        });
      };
    
      handleInputConfirm = () => {
        const { state } = this;
        const { inputValue } = state;
        let { newTags } = state;
    
        if (inputValue && newTags.filter(tag => tag.label === inputValue).length === 0) {
          newTags = [
            ...newTags,
            {
              key: `new-${newTags.length}`,
              label: inputValue,
            },
          ];
        }
    
        this.setState({
          newTags,
          inputVisible: false,
          inputValue: '',
        });
      };

      showInput = () => {
        this.setState(
          {
            inputVisible: true,
          },
          () => this.input && this.input.focus(),
        );
      };

      onTabChange = key => {
        // If you need to sync state to url
        // const { match } = this.props;
        // router.push(`${match.url}/${key}`);
        this.setState({
          tabKey: key,
        });
      };

      renderChildrenByTabKey = tabKey => {
        if (tabKey === 'collection') {
        //   return <Projects />;
            return <Articles />;
        }
    
        // if (tabKey === 'applications') {
        // //   return <Applications />;
        // }
    
        if (tabKey === 'articles') {
            // console.log('articles')
          return <Articles />;
        }
    
        return null;
      };

    render(){
        // console.log(this.props);
        const { newTags, inputVisible, inputValue, tabKey } = this.state;
        const {currentUser,currentUserLoading} = this.props;
        const dataLoading = currentUserLoading || !(currentUser && Object.keys(currentUser).length);
        return (
            <GridContent>
                <Row gutter={24}>
                    <Col lg={7} md={24}>
                        <Card bordered={false} style={{marginBottom:24}} loading={dataLoading}>
                            {!dataLoading && (
                                <div>
                                    <div className={styles.avatarHolder}>
                                         <img src={avatar} alt=""/>
                                         <div className={styles.name}>{currentUser.name}</div>
                                        <div>本质是一个DD，在所有梦中沉浮</div>
                                    </div>
                                    {/* <div className={styles.detail}>
                                        <p>
                                            <i className={styles.title}/>
                                            {currentUser.title}
                                        </p>
                                        <p>
                                            <i className={styles.group}/>
                                            {currentUser.group}
                                        </p>
                                        <p>
                                            <i className={styles.address}/>
                                            {currentUser.geographic.province.label}
                                            {currentUser.geographic.city.label}
                                        </p>
                                    </div> */}
                                    <Divider dashed />
                                    <div className={styles.tags}>
                                        <div className={styles.tagsTile}>标签</div>
                                        {currentUser.tags.concat(newTags).map(item=>
                                            (<Tag key={item.key}>{item.label}</Tag>)
                                        )}
                                        {inputVisible && (
                                            <Input
                                                ref={ref => this.saveInputRef(ref)}
                                                type="text"
                                                size="small"
                                                style={{width:78,}}
                                                value={inputValue}
                                                onChange={this.handleInputChange}
                                                onBlur = {this.handleInputConfirm}
                                                onPressEnter={this.handleInputConfirm}
                                            />
                                        )}
                                        {!inputVisible && (
                                            <Tag
                                                onClick={this.showInput}
                                                style={{background:'#fff',borderStyle:'dashed'}}
                                            >
                                                <Icon type="plus" />
                                            </Tag>
                                        )}
                                    </div>
                                    {/* <Divider dashed style={{marginTop:16,}} /> */}
                                    {/* <div className={styles.team}>
                                        <div className={styles.teamTitle}>团队</div>
                                        <Row gutter={36}>
                                        {currentUser.notice &&
                                            currentUser.notice.map(item => (
                                            <Col key={item.id} lg={24} xl={12}>
                                                <Link to={item.href}>
                                                <Avatar size="small" src={item.logo} />
                                                {item.member}
                                                </Link>
                                            </Col>
                                            ))}
                                        </Row>
                                    </div> */}
                                </div>
                            )}
                        </Card>
                    </Col>
                    <Col lg={17} md={24}>
                        <Card className={styles.tabsCard}
                            bordered={false}
                            tabList={operationTablList}
                            activeTabKey={tabKey}
                            onTabChange={this.onTabChange}
                            >
                            {this.renderChildrenByTabKey(tabKey)}
                        </Card>
                    </Col>
                </Row>
            </GridContent>
        )
    }
}
export default AccountCenter;
