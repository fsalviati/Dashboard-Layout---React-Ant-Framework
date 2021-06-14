import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  ScheduleOutlined,
  ContainerOutlined,
  FileTextOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import FileManager from './components/FileManager';
import Approvals from './components/Approvals';
import EmployeeReport from './components/EmployeeReport';
import AttendanceReport from './components/AttendanceReport';

const { Footer, Sider, Content } = Layout;


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <Router>
      <div className="App">
        <Layout className='layout-main-container'>
          <Layout>

            {/* Navbar Section */}
            <Sider className='sider' breakpoint="sm" collapsedWidth="100" collapsible collapsed={isMenuOpen} >
              <Menu
                mode="inline"
              >
                <Menu.Item className='menuHeader' key='Dashboard' breakpoint="sm">
                  Reesby.
                </Menu.Item>
                <Menu.Item key="1" icon={<ScheduleOutlined style={{ color: 'rgb(4, 14, 70)' }} />}>
                  <Link to="/approvals">Approvals</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<ContainerOutlined style={{ color: 'rgb(48, 112, 185)' }} />}>
                  <Link to="/employee-report">Employee Report</Link>
                </Menu.Item>
                <Menu.Item key="3" icon={<ContainerOutlined style={{ color: 'rgb(194, 80, 175)' }} />}>
                  <Link to="/attendance-report">Attendance Report</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<FileTextOutlined style={{ color: 'rgb(194, 80, 175)' }} />}>
                  <Link to="/file-manager">File Manager</Link>
                </Menu.Item>
              </Menu>
            </Sider>

            {/* Content Section */}
            <Layout className='layout-components-section-container'>
              <Content>
                <Breadcrumb className='breadcrumb-section'>
                  {isMenuOpen ? (
                    <MenuUnfoldOutlined style={{ fontSize: '22px', color: 'white' }} onClick={() => { setIsMenuOpen(!isMenuOpen) }} />
                  ) : (
                    <MenuFoldOutlined style={{ fontSize: '22px', color: 'white' }} onClick={() => { setIsMenuOpen(!isMenuOpen) }} />
                  )}
                </Breadcrumb>

                <div className='header-content-section'>
                  {/* Switch Title */}
                  <Switch>
                    <Route exact path="/approvals">
                      <h1>Approvals</h1>
                    </Route>
                    <Route exact path="/employee-report">
                      <h1>Employee Report</h1>
                    </Route>
                    <Route exact path="/attendance-report">
                      <h1>Attendance Report</h1>
                    </Route>
                    <Route exact path="/file-manager">
                      <h1>File Manager</h1>
                    </Route>
                  </Switch>
                </div>

                <div className="container-layout-content">
                  <Switch>
                    <Route exact path="/approvals">
                      <Approvals />
                    </Route>
                    <Route exact path="/employee-report">
                      <EmployeeReport />
                    </Route>
                    <Route exact path="/attendance-report">
                      <AttendanceReport />
                    </Route>
                    <Route exact path="/file-manager">
                      <FileManager />
                    </Route>
                  </Switch>
                </div>
              </Content>

              {/* Footer Section */}
              <Footer style={{ textAlign: 'left' }}>© 2021 <span style={{ fontWeight: 'bolder' }}>Reesby Technologies</span></Footer>
            </Layout>
          </Layout>
        </Layout>
      </div >
    </Router >
  );
}

export default App;
