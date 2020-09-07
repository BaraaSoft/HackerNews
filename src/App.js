import React, { Fragment, useEffect } from 'react';
import { Layout, Breadcrumb, PageHeader, Avatar } from 'antd';
import ItemView from './components/ItemView.component';
import 'antd/dist/antd.css';
import './App.css'

import AppMenu from './components/Menu.component';
import ListView from './components/ListView.component'

const { Header, Content, Footer } = Layout;


function App() {

  return (
    <Fragment>
      <AppMenu />
      <div>
        <Content style={{ height: '90vh' }} className="row">
          <ListView />
        </Content>
      </div>
    </Fragment>
  );
}

export default App;
