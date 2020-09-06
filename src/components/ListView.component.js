import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Typography, Card, Divider, Button, Pagination } from 'antd';
import { EditOutlined, CommentOutlined, CalendarOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import ItemView from './ItemView.component';
import {
    fetchAllBestStories,
    fetchAllTopStories,
    fetchAllNewStories,
    fetchTopStories,
} from '../actions/stories.action';


const ContainerDiv = styled.div`

`;

const ListDiv = styled.div`
    display:flex;
`;



const ListView = (props) => {
    const {
        fetchAllBestStories,
        fetchAllTopStories,
        fetchAllNewStories,
        fetchTopStories,
        topStories
    } = props

    async function getTopStories() {
        await fetchAllTopStories()
        fetchTopStories(1)
    }
    async function getNewStories() {
        await fetchAllBestStories()
        fetchTopStories(1)
    }
    async function getBestStories() {
        await fetchAllBestStories()
        fetchTopStories(1)
    }






    useEffect(() => {
        getTopStories()


        console.log(">> comp >> TopStories:", topStories)
    }, [])
    return (
        <ContainerDiv className="row">
            <ListDiv>

            </ListDiv>
        </ContainerDiv>
    );
}

const mapStateToProps = ({ topStories }) => {
    return { topStories }
}

export default connect(mapStateToProps, {
    fetchAllBestStories,
    fetchAllTopStories,
    fetchAllNewStories,
    fetchTopStories,
})(ListView)