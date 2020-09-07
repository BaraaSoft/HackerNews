import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Typography, Card, Divider, Button, Badge } from 'antd';
import { EditOutlined, CommentOutlined, CalendarOutlined, ThunderboltOutlined } from '@ant-design/icons';
import moment from 'moment'

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
`



const AuthorDiv = styled(Text)`
    display:block;
    color: #a9a9a9;
    padding:0px 8px;
`;

const CategoryDiv = styled.div`
    background-color:red;
    color: white;
    max-width:140px;
    padding:2px 16px;
    border-radius:20px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:600;
    margin-bottom:16px;
`;

const formatedTime = (unixTime) => {
    //1598994172
    let datetime = moment.unix()
    return datetime.calendar()
}


const ItemView = ({ category, title, by, url, time, descendants }) => {

    return (
        <ContainerDiv>
            <IndicatorDiv />
            <Card style={{ width: '720px' }} >
                <CategoryDiv className="shadow1">
                    <ThunderboltOutlined style={{ color: 'white', padding: '4px 4px' }} />
                    {category}
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
                        <AuthorDiv strong>{moment(time).calendar()}</AuthorDiv>
                    </BarItem>
                    <BarItem style={{ flex: 1 }}>
                        <Button
                            type="primary"
                            // icon={<DoubleRightOutlined />}
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