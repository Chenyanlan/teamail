import React,{Component} from 'react';
import { connect } from 'dva';
import { Avatar,Card,Col,Divider,Icon,Input,Row,Button } from 'antd';
import { GridContent } from '@ant-design/pro-layout';
import styles from './AccountCenter.less';
import Articles from './Articles/Articles';
import ModifyArticle from '../../../components/FormComponents/ModifyArticle';
import { Link } from 'umi';

const operationTablList = [
    {
        key: 'articles',
        tab: (
            <span>
                文章
            </span>
        ),
    },
    {
        key: 'collection',
        tab: (
            <span>
                收藏
            </span>
        ),
    },
]
@connect(({ loading, accountCenter }) => ({
    currentUser: accountCenter.currentUser,
    currentUserLoading: loading.effects['accountCenter/fetchCurrent'],
}))
class AccountCenter extends Component {
    input = undefined;

    constructor(props) {
        super(props);
        this.state={
            // dataLoading:false,
            newTags: [],
            inputVisible: false,
            inputValue: '',
            tabKey: 'articles',
            visible: false,
            article: {},
        }
    }

    componentDidMount() {
        const userId = localStorage.getItem('userId');
        console.log(userId);
        const { dispatch } = this.props;
        dispatch({
            type: 'accountCenter/fetchCurrent',
            payload: {
                userId,
            },
        });
        dispatch({
            type: 'accountCenter/fetch',
            payload: {
                articleAuthorId: localStorage.getItem('userId'),
            }
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
            return <Articles />;
        }

        if (tabKey === 'articles') {
          return <Articles />;
        }
        return null;
      };

      showModal = () => {
        this.setState({ visible: true });
      };
    
      handleCancel = () => {
        this.setState({ visible: false });
      };
    
      handleCreate = () => {
        const { form } = this.formRef.props;
        const { dispatch } = this.props;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }
    
          console.log('Received values of form: ', values);
          values.articleAuthorId = localStorage.getItem('userId');
          dispatch({
              type: 'accountCenter/addArticle',
              payload: values,
          })
          form.resetFields();
          this.setState({ visible: false });
        });
      };
    
      saveFormRef = formRef => {
        this.formRef = formRef;
      };

    render() {
        // console.log(this.props);
        const { newTags, inputVisible, inputValue, tabKey } = this.state;
        const {currentUser, currentUserLoading } = this.props;
        console.log(currentUser);
        const dataLoading = currentUserLoading || !(currentUser && Object.keys(currentUser).length);
        return (
            <GridContent>
                <Row gutter={24}>
                    <Col lg={7} md={24}>
                        <Card bordered={false} style={{marginBottom:24}} loading={dataLoading}>
                            {!dataLoading && (
                                <div>
                                    <div className={styles.avatarHolder}>
                                         <img src={currentUser.userAvatar} alt=""/>
                                         <div className={styles.name}>{currentUser.userName}</div>
                                         <Divider dashed />
                                        <div>签名：{currentUser.userSignature}</div>
                                    </div>
                                    <Divider dashed />
                                    <div className={styles.detail}>
                                        <p>
                                            <i className={styles.title}/>
                                            {currentUser.userAuthority}
                                        </p>
                                        <p>
                                            <i className={styles.group}/>
                                            {currentUser.userTel}
                                        </p>
                                        <p>
                                            <i className={styles.address}/>
                                            {currentUser.userPlace}
                                        </p>
                                    </div>
                                    <Divider dashed />
                                    <Button onClick={this.showModal} className={styles.add} type="primary" icon="plus">
                                    写文章
                                    </Button>
                                    {/* <Divider dashed />
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
                                                style={{ width: 78 }}
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
                                    </div> */}
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
                <ModifyArticle
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    article = {this.state.article}
                />
            </GridContent>
        )
    }
}
export default AccountCenter;
