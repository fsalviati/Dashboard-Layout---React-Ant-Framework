import React from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import Title from 'antd/lib/typography/Title';
import Avatar from 'antd/lib/avatar/avatar';
import { MailOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header className='header'>
          <Avatar className='avatar' src='./avatar.png' />
          <Title style={{ color: 'white' }} level={3}>Dashboard</Title>
        </Header>
        <Layout>
          <Sider className='sider'>
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key='Dashboard'>
                Dashboard
              </Menu.Item>
              <SubMenu icon={<MailOutlined />}
                title={
                  <span>
                    <span>Section 1</span>
                  </span>
                }>
                <Menu.ItemGroup key='AboutUS' title='Country'>
                  <Menu.Item key='location1'>Sub-section 1</Menu.Item>
                  <Menu.Item key='location2'>Sub-section 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
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
