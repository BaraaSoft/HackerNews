import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Breadcrumb, PageHeader, Avatar } from 'antd';
import { ThunderboltOutlined, FireOutlined, TrophyOutlined } from '@ant-design/icons';
import logo from '../assets/baraabytes.png'



const MenuDiv = styled(Menu)`
    margin-top:24;
    margin-bottom:24;
`




const AppMenu = (props) => {

    const [current, setCurrent] = useState('new')

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <MenuDiv onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="new" icon={<ThunderboltOutlined />}>New stories</Menu.Item>
            <Menu.Item key="top" icon={<FireOutlined />}>Top Stories</Menu.Item>
            <Menu.Item key="best" icon={<TrophyOutlined />}>Best Stories</Menu.Item>
        </MenuDiv>
    )
}

export default AppMenu