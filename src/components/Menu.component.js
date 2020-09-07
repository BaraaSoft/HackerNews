import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout, Menu, Breadcrumb, PageHeader, Avatar } from 'antd';
import { ThunderboltOutlined, FireOutlined, TrophyOutlined } from '@ant-design/icons';
import logo from '../assets/baraabytes.png'
import { MenuState } from '../actions/menuState';
import { connect } from 'react-redux';
import { setActiveMenu } from '../actions/menu.action';






const MenuDiv = styled(Menu)`
    margin-top:24;
    margin-bottom:24;
`;

const AppMenu = (props) => {
    const { setActiveMenu, activeMenu } = props
    const [current, setCurrent] = useState(activeMenu.active)

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
        setActiveMenu(e.key)
    };

    return (
        <MenuDiv onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key={MenuState.newStories} icon={<ThunderboltOutlined />}>New stories</Menu.Item>
            <Menu.Item key={MenuState.topStories} icon={<FireOutlined />}>Top Stories</Menu.Item>
            <Menu.Item key={MenuState.bestStories} icon={<TrophyOutlined />}>Best Stories</Menu.Item>
        </MenuDiv>
    )
}

const mapStateToProps = ({ activeMenu }) => {
    return { activeMenu }
}

export default connect(mapStateToProps, { setActiveMenu })(AppMenu)