import React, { Fragment } from 'react';
import { Layout, Breadcrumb, PageHeader, Avatar } from 'antd';
import ItemView from './components/ItemView.component';
import 'antd/dist/antd.css';
import './App.css'

import AppMenu from './components/Menu.component';

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Fragment>
      <AppMenu />
      <div>
        <Content className="row">
          <ItemView />
          <ItemView />
        </Content>
      </div>
    </Fragment>
  );
}

export default App;
