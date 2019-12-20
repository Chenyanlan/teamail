const titles = [
    '红茶',
    '绿茶',
    '黑茶',
    '黄茶',
    '乌龙茶',
    '白茶',
    '中国十大名茶',
    '龙井',
];
const avatars = [
    'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
    'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
    'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
    'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
    'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
    'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
    'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
    'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
];
const covers = [
    'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
    'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
    'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
    'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
];
const desc = [
    '那是一种内在的东西， 他们到达不了，也无法触及的',
    '希望是一个好东西，也许是最好的，好东西是不会消亡的',
    '生命就像一盒巧克力，结果往往出人意料',
    '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
    '那时候我只会想自己想要什么，从不想自己拥有什么',
];
const user = [
    'yanlan chen',
    'nishino',
    'nanase',
    'hirate',
    'yurina',
    'shilaishi',
    'mai',
    'habu',
    'mizuho',
    'techi',
];
function fakeList(count) {
    const list = [];
  
    for (let i = 0; i < count; i += 1) {
      list.push({
        id: `fake-list-${i}`,
        owner: user[i % 10],
        title: titles[i % 8],
        avatar: avatars[i % 8],
        cover: parseInt(`${i / 4}`, 10) % 2 === 0 ? covers[i % 4] : covers[3 - (i % 4)],
        status: ['active', 'exception', 'normal'][i % 3],
        percent: Math.ceil(Math.random() * 50) + 50,
        logo: avatars[i % 8],
        href: 'https://ant.design',
        updatedAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
        createdAt: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i).getTime(),
        subDescription: desc[i % 5],
        description:
          '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的组件会被抽离成一套标准规范。',
        activeUser: Math.ceil(Math.random() * 100000) + 100000,
        newUser: Math.ceil(Math.random() * 1000) + 1000,
        star: Math.ceil(Math.random() * 100) + 100,
        like: Math.ceil(Math.random() * 100) + 100,
        message: Math.ceil(Math.random() * 10) + 10,
        content:
          '段落示意：蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台 ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。',
        members: [
          {
            avatar: '../src/assets/avatar2.jpg',
            name: 'nishino',
            id: 'member1',
          },
          {
            avatar: '../src/assets/avatar1.jpeg',
            name: 'nanase',
            id: 'member2',
          },
          {
            avatar: '../src/assets/avatar3.jpg',
            name: 'mai',
            id: 'member3',
          },
        ],
      });
    }
  
    return list;
  }
  
function getFakeList(req, res) {
    const params = req.query;
    const count = params.count * 1 || 5;
    const result = fakeList(count);
    return res.json(result);
}
export default {
    'GET /api/fake_list':getFakeList,
    'GET /api/currentUser':{
        name:'yanlan chen',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
        userid: '00000001',
        email:'31501391@stu.zucc.edu.cn',
        // 签名
        signature:'我只是一个DD',
        title:'交互专家',
        group:'蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        tags:[
            {key:'0',label:'绿茶'},
            {key:'1',label:'红茶'},
            {key:'2',label:'黑茶'},
            {key:'3',label:'乌龙茶'},
        ],
        notice:[
            {
                id: 'xxx1',
                title: titles[0],
                logo: avatars[0],
                description: '那是一种内在的东西，他们到达不了，也无法触及的',
                updatedAt: new Date(),
                member: '科学搬砖组',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx2',
                title: titles[1],
                logo: avatars[1],
                description: '希望是一个好东西，也许是最好的，好东西是不会消亡的',
                updatedAt: new Date('2017-07-24'),
                member: '全组都是吴彦祖',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx3',
                title: titles[2],
                logo: avatars[2],
                description: '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
                updatedAt: new Date(),
                member: '中二少女团',
                href: '',
                memberLink: '',
            },
            {
                id: 'xxx4',
                title: titles[3],
                logo: avatars[3],
                description: '那时候我只会想自己想要什么，从不想自己拥有什么',
                updatedAt: new Date('2017-07-23'),
                member: '程序员日常',
                href: '',
                memberLink: '',
              },
              {
                id: 'xxx5',
                title: titles[4],
                logo: avatars[4],
                description: '凛冬将至',
                updatedAt: new Date('2017-07-23'),
                member: '高逼格设计天团',
                href: '',
                memberLink: '',
              },
              {
                id: 'xxx6',
                title: titles[5],
                logo: avatars[5],
                description: '生命就像一盒巧克力，结果往往出人意料',
                updatedAt: new Date('2017-07-23'),
                member: '骗你来学计算机',
                href: '',
                memberLink: '',
              },
        ],
        notifyCount:12,
        unreadCount:11,
        country:'China',
        geographic: {
            province: {
                label: '浙江省',
                key: '330000',
            },
            city: {
                label: '杭州市',
                key: '330100',
            },
        },
        address: '西湖区工专路 77 号',
        phone: '0752-268888888',
    }
}