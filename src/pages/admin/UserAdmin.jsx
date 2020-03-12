import React, { Component } from 'react';
import { Table, Divider, Input, Button, Icon, notification, Popconfirm, message } from 'antd';
import Highlighter from 'react-highlight-words';
import ModiftUser from '../../components/FormComponents/ModifyUser';
import { connect } from 'dva';

@connect(({ user }) => ({
    user,
  }))
class UserAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchedColumn: '',
            visible: false,
            user: {},
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'user/userLists',
        })
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
                搜索
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              重置
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text =>
          (this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text.toString()}
            />
          ) : (
            text
          )),
      });

      handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };

      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };

      showModal = (text) => {
        this.setState({ visible: true, user: text });
      };

      handleCancel = () => {
        this.setState({ visible: false });
      };

      handleCreate = () => {
        const { form } = this.formRef.props;
        console.log(this.state.user);
        const { user } = this.state;
        form.validateFields((err, values) => {
          if (err) {
            return;
          }

          console.log('Received values of form: ', values);
          values.userId = user.userId;
          console.log(values);
          console.log(this.props);
          const { dispatch, user: { result } } = this.props;
          dispatch({
              type: 'user/modifyUser',
              payload: values,
          })
          if (result.success === true) {
            notification.success({
                message: '成功',
                description:
                  '用户密码和权限修改成功',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });
              this.getData();
          } else {
            notification.error({
                message: '失败',
                description:
                  '用户密码和权限修改失败',
                onClick: () => {
                  console.log('Notification Clicked!');
                },
              });
              this.getData();
          }
          this.getData();
          form.resetFields();
          this.setState({ visible: false });
        });
      };

      saveFormRef = formRef => {
        this.formRef = formRef;
      };

      confirm=(text, e) => {
        console.log(e);
        console.log(text);
        const { dispatch, user: { result } } = this.props;
        dispatch({
            type: 'user/removeUser',
            payload: {
                userId: text.userId,
            },
          })
        this.getData();
        message.success('删除成功');
      }

      cancel=(e) => {
        console.log(e);
        message.error('已取消。');
      }

    render() {
        console.log(this.props);
        const { user: { userList } } = this.props;
        const columns = [
            {
              title: '用户ID',
              dataIndex: 'userId',
              key: 'userId',
            },
            {
              title: '昵称',
              dataIndex: 'userName',
              key: 'userName',
              ...this.getColumnSearchProps('userName'),
            },
            {
              title: '密码',
              dataIndex: 'userPassword',
              key: 'userPassword',
            },
            {
              title: '用户权限',
              key: 'userAuthority',
              dataIndex: 'userAuthority',
              filters: [
                {
                  text: 'admin',
                  value: 'admin',
                },
                {
                  text: 'user',
                  value: 'user',
                },
              ],
              filterMultiple: false,
              onFilter: (value, record) => record.userAuthority.indexOf(value) === 0,
            },
            {
              title: '操作',
              key: 'action',
              render: (text, record) => {
                  return (
                    <span>
                        <a onClick={this.showModal.bind(this, text)}>修改</a>
                        <Divider type="vertical" />
                        <Popconfirm
                            title="你确定删除该用户?"
                            // eslint-disable-next-line react/jsx-no-bind
                            onConfirm={this.confirm.bind(this, text)}
                            onCancel={this.cancel}
                            okText="是"
                            cancelText="否"
                        >
                            <a>删除</a>
                        </Popconfirm>
                    </span>
                  )
              },
            },
          ];
        return (
            <div>
                <Table columns={columns} dataSource={userList} />
                <ModiftUser
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        )
    }
}

export default UserAdmin;
