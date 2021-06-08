import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Tree } from 'antd';
import Title from 'antd/lib/typography/Title';
import Avatar from 'antd/lib/avatar/avatar';
import {
  MailOutlined,
  UsergroupAddOutlined,
  DownloadOutlined,
  CloudDownloadOutlined,
  DownOutlined,
  FrownOutlined,
  FrownFilled,
  MenuFoldOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

const treeData = [
  {
    title: '',
    key: '0-0',
    children: [
      {
        title: 'Leaf 1',
        key: '0-0-0',
      },
      {
        title: 'Leaf 2',
        key: '0-0-1',
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className='header'>
          <Avatar className='avatar' src='./avatar.png' />
          <Title style={{ color: 'white' }} level={3}>Dashboard</Title>
        </Header>
        <Layout>
          <Sider className='sider' breakpoint="sm" collapsedWidth="150" >
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard' breakpoint="sm">
                Dashboard
              </Menu.Item>
              <SubMenu icon={<MailOutlined />}
                title={
                  <span>
                    <span>Main Section</span>
                  </span>
                }>
                <Menu.ItemGroup key='section1' title='Section 1'>
                  <Menu.Item key='sub1Section1' breakpoint="sm" icon={<UsergroupAddOutlined />}><span className="menuStyle">Sub-section 1</span></Menu.Item>
                  <Menu.Item key='sub1Section2' breakpoint="sm" icon={<DownloadOutlined />}><span className="menuStyle">Sub-section 2</span></Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu icon={<CloudDownloadOutlined />}
                title={
                  <span>
                    <span>Second Section</span>
                  </span>
                }>
                <Menu.ItemGroup key='section2' title='Section 2'>
                  <Menu.Item key='sub2Section1' breakpoint="sm" icon={<UsergroupAddOutlined />}><span className="menuStyle">Sub-section 1</span></Menu.Item>
                  <Menu.Item key='sub2Section2' breakpoint="sm" icon={<DownloadOutlined />}><span className="menuStyle">Sub-section 2</span></Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Tree
                  showIcon
                  defaultSelectedKeys={['0-0-0']}
                  switcherIcon={<MenuFoldOutlined style={{ fontSize: '22px' }} />}
                  treeData={treeData}
                />

              </Breadcrumb>
              <div className="site-layout-content">Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design Footer</Footer>
          </Layout>
        </Layout>
      </Layout>
    </div >
  );
}

export default App;
