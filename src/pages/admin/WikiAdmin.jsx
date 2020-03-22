import React, { Component } from 'react'
import { Table, message ,Popconfirm} from 'antd';
import { connect } from 'dva';
import CollectionCreateForm from '../../components/FormComponents/ModifyWikiDetail';
import WikiDetails from './WikiDetails';

@connect(({ wikiAdmin }) => ({
    wikiAdmin,
  }))
 class WikiAdmin extends Component {

     constructor(props) {
         super(props);
         this.state = {
            visible: false,
            wikiDetail: {},
         }
     }

     componentDidMount() {
        this.getData();
     }

     getData = () => {
        const { dispatch } = this.props;
        dispatch({
            type: 'wikiAdmin/getWikiIndex',
        });
        // dispatch({
        //     type: 'wikiAdmin/wikiAdminById',
        //     payload: {
        //         detailId: 12,
        //     },
        // });
     }

     showModal = (record) => {
      this.setState({ visible: true, wikiDetail: record,});
    };

    handleCancel = () => {
      this.setState({ visible: false });
    };

    handleCreate = () => {
      const { dispatch } = this.props;
      const { wikiDetail } = this.state;
      console.log(wikiDetail);
      const { form } = this.formRef.props;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        console.log('Received values of form: ', values);
        values.wikiId = wikiDetail.wikiId;
        console.log(values);
        dispatch({
            type: 'wikiAdmin/addWikiDetail',
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
        console.log(this.props);
        const columns = [
            {
              title: '百科ID',
              dataIndex: 'wikiId',
              key: 'wikiId',
            },
            {
              title: '内容',
              dataIndex: 'wikiTitle',
              key: 'wikiTitle',
            },
            {
              title: '操作',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a onClick={this.showModal.bind(this, record)}>添加</a>
                </span>
              ),
            },
        ]
        const { wikiAdmin: { wikiIndex } } = this.props;
        const dataSource = JSON.stringify(wikiIndex) === '{}' ? [] : wikiIndex.list;
        return (
            <div>
                <Table
                  columns={columns}
                  dataSource={dataSource}
                  expandedRowRender={record =>{
                    console.log(record);
                    return (
                      <WikiDetails record={record} />
                    )
                  }}
                  />
                 <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                    data={{}}
                />
            </div>
        )
    }
}
export default WikiAdmin;
