import React, { useEffect, useState } from 'react';
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
    fetchStories
} from '../actions/stories.action';
import { MenuState } from '../actions/menuState';


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
    flex-direction:column;
    overflow:scroll;
`;


const renderStories = (stories = [], activeMenu, page) => {

    const first = Math.abs(page - 1) * 20
    const last = first + 20

    return stories.slice(first, last).map(story => {
        return (<ItemView
            id={story.id}
            category={activeMenu.active}
            title={story.title}
            by={story.by}
            url={story.url}
            time={story.time}
            descendants={story.descendants} />)
    })
}



const ListView = (props) => {
    const [page, setPage] = useState(1)
    const {
        fetchAllBestStories,
        fetchAllTopStories,
        fetchAllNewStories,
        fetchStories,
        stories,
        storiesIds,
        activeMenu
    } = props

    async function loadTopStories() {
        await fetchAllTopStories()
        fetchStories(1)
    }
    async function loadNewStories() {
        await fetchAllNewStories()
        fetchStories(1)
    }
    async function loadBestStories() {
        await fetchAllBestStories()
        fetchStories(1)
    }

    useEffect(() => {
        loadNewStories();
        loadTopStories();
        loadBestStories();
    }, [])

    const onChange = (page, pageSize) => {
        fetchStories(page)
        setPage(page)
    }
    return (
        <ContainerDiv className="row">
            <ListDiv>
                {renderStories(stories, activeMenu, page)}
            </ListDiv>
            <Pagination
                style={{ marginTop: '12px' }}
                size="default"
                defaultPageSize={20}
                defaultCurrent={1}
                total={storiesIds.length}
                onChange={onChange} />
        </ContainerDiv>
    );
}

const mapStateToProps = ({
    topStories, newStories, bestStories,
    topStoriesIds, bestStoriesIds, newStoriesIds,
    activeMenu }) => {

    let stories, storiesIds;

    switch (activeMenu.active) {
        case MenuState.newStories:
            stories = newStories
            storiesIds = newStoriesIds
            break;
        case MenuState.topStories:
            stories = topStories
            storiesIds = topStoriesIds
            break;
        case MenuState.bestStories:
            stories = bestStories
            storiesIds = bestStoriesIds
            break;

        default:
            stories = newStories
            storiesIds = newStoriesIds
            break;
    }
    return { stories, storiesIds, activeMenu }
}

export default connect(mapStateToProps, {
    fetchAllBestStories,
    fetchAllTopStories,
    fetchAllNewStories,
    fetchTopStories,
    fetchStories
})(ListView)