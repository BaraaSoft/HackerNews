import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Typography, Card, Divider, Button } from 'antd';
import { EditOutlined, CommentOutlined, CalendarOutlined, DoubleRightOutlined } from '@ant-design/icons';
import moment from 'moment'

const { Title, Text } = Typography;

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
    background-color:red;
    border-radius:10px;

    box-shadow: 173px 16px 86px -23px rgba(227,20,100,1);
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



const formatedTime = (unixTime) => {
    // 1598994172
    let datetime = moment.unix()
    return datetime.calendar()
}


const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
];


const ItemView = ((props) => {

    return (
        <ContainerDiv>
            <IndicatorDiv />
            <Card>
                <Title level={3} ellipsis strong>My YC app: Dropbox - Throw away your USB </Title>
                <BarDiv>
                    <BarItem>
                        <EditOutlined style={{ color: '#a9a9a9', padding: '4px' }} />
                        <AuthorDiv strong ellipsis>By Baraa</AuthorDiv>
                        <BarDivider />
                    </BarItem>
                    <BarItem>
                        <CommentOutlined style={{ color: '#a9a9a9', padding: '4px' }} />
                        <AuthorDiv strong>25</AuthorDiv>
                        <BarDivider />
                    </BarItem>
                    <BarItem>
                        <CalendarOutlined style={{ color: '#a9a9a9', padding: '4px' }} />
                        <AuthorDiv strong>2020/9/1</AuthorDiv>
                        <BarDivider />
                    </BarItem>
                    <BarItem style={{ flex: 1 }}>
                        <Button
                            type="primary"
                            // icon={<DoubleRightOutlined />}
                            type="ghost"
                            onClick={() => this.enterLoading(1)}
                            block
                        >
                            Read More
                        </Button>
                    </BarItem>

                </BarDiv>
            </Card>
        </ContainerDiv>
    )
})


export default ItemView