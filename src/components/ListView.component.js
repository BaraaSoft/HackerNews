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
    height:90vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

const ListDiv = styled.div`
    flex:1;
    display:flex;
`;



const ListView = (props) => {
    const {
        fetchAllBestStories,
        fetchAllTopStories,
        fetchAllNewStories,
        fetchTopStories,
        topStoriesIds,
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
        getTopStories();
    }, [])

    const onChange = (page, pageSize) => {
        fetchTopStories(page)
        console.log(">>page", page)
    }


    return (
        <ContainerDiv className="row">
            <ListDiv>

            </ListDiv>
            <Pagination
                size="default"
                defaultPageSize={20}
                defaultCurrent={1}
                total={topStoriesIds.length}
                onChange={onChange} />
        </ContainerDiv>
    );
}

const mapStateToProps = ({ topStories, topStoriesIds }) => {
    return { topStories, topStoriesIds }
}

export default connect(mapStateToProps, {
    fetchAllBestStories,
    fetchAllTopStories,
    fetchAllNewStories,
    fetchTopStories,
})(ListView)