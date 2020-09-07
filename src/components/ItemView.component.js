import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Typography, Card, Divider, Button, Badge } from 'antd';
import { EditOutlined, CommentOutlined, CalendarOutlined, ThunderboltOutlined, FireOutlined, TrophyOutlined } from '@ant-design/icons';
import moment from 'moment'
import { MenuState } from '../actions/menuState';

const { Title, Text } = Typography;

const getColor = () => {
    const colors = [

        '#f39c12',
        'red',
        'yellow',

        'orange',
        '#16a085',
        '#34495e',

        '#c0392b',
        '#2ecc71',
        '#8e44ad',

        'magenta',
        '#2c3e50',
        'gold',
        '#d35400',
    ];
    const randomColorIndex = Math.floor(Math.random() * 13)
    return colors[randomColorIndex]
}


const ContainerDiv = styled.div`
    display:flex;
    flex-direction:row;

    justify-content:stretch;
    align-items:stretch;
    margin: 8px 8px;
    min-height:160px;
    min-width:1140px;
`;

const IndicatorDiv = styled.div`
    align-self: stretch;
    width:3px;
    background-color:${() => getColor()};
    border-radius:10px;
    box-shadow: 173px 16px 86px -23px ${() => getColor()};
`;

const BarDiv = styled.div`
    display:flex;
    flex-direction:row;
`;

const BarItem = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding: 0px 8px;
`;

const BarDivider = styled.div`
    width: 1px;
    height: 24px;
    background-color: #d9d9d9;
    margin: 0px 4px;
`;



const AuthorDiv = styled(Text)`
    display:block;
    color: #a9a9a9;
    padding:0px 8px;
`;

const CategoryDiv = styled.div`
    background-color:${(({ catColor }) => catColor)};
    color: white;
    max-width: 140px;
    padding: 2px 16px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    margin-bottom: 16px;
`;

const formatedTime = (unixTime) => {
    let datetime = moment.unix(unixTime)
    return datetime.calendar()
}

const formateCategory = (cat) => {
    switch (cat) {
        case MenuState.newStories:
            return "New stories";
        case MenuState.topStories:
            return "Top stories";
        case MenuState.bestStories:
            return "Best stories"
        default:
            return ""
    }
}

const formateCategoryIcon = (cat) => {
    switch (cat) {
        case MenuState.newStories:
            return (<ThunderboltOutlined style={{ color: 'white', padding: '4px 4px' }} />)
        case MenuState.topStories:
            return (<FireOutlined style={{ color: 'white', padding: '4px 4px' }} />)
        case MenuState.bestStories:
            return (<TrophyOutlined style={{ color: 'white', padding: '4px 4px' }} />)
        default:
            return ""
    }
}

const formateCategoryColor = (cat) => {
    switch (cat) {
        case MenuState.newStories:
            return '#F0002A'
        case MenuState.topStories:
            return '#ff9500'
        case MenuState.bestStories:
            return '#5856d6'
        default:
            return ""
    }
}

const ItemView = ({ category, title, by, url, time, descendants, id }) => {

    return (
        <ContainerDiv key={id}>
            <IndicatorDiv />
            <Card style={{ width: '1140px' }} >
                <CategoryDiv className="shadow1" catColor={formateCategoryColor(category)}>
                    {formateCategoryIcon(category)}
                    {formateCategory(category)}
                </CategoryDiv>
                <Title level={3} ellipsis strong>{title}</Title>
                <BarDiv>
                    <BarItem>
                        <EditOutlined style={{ color: '#a9a9a9', padding: '4px' }} />
                        <AuthorDiv strong ellipsis>By {by}</AuthorDiv>
                        <BarDivider />
                    </BarItem>
                    <BarItem>
                        <CommentOutlined style={{ color: '#a9a9a9', padding: '4px' }} />
                        <AuthorDiv strong>{descendants}</AuthorDiv>
                        <BarDivider />
                    </BarItem>
                    <BarItem>
                        <CalendarOutlined style={{ color: '#a9a9a9', padding: '4px' }} />
                        <AuthorDiv strong>{formatedTime(time)}</AuthorDiv>
                    </BarItem>
                    <BarItem style={{ flex: 1 }} >
                    </BarItem>
                    <BarItem style={{ width: '200px' }}>
                        <Button
                            type="primary"
                            type="ghost"
                            onClick={() => window.open(url, "_blank")}
                            block>
                            Read More
                        </Button>
                    </BarItem>
                </BarDiv>
            </Card>
        </ContainerDiv>
    )
}


export default ItemView