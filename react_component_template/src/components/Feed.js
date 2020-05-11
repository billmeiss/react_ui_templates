import React from 'react';
import RecentActivityCard from './cards/RecentActivityCard';
import CreatePost from './CreatePost';

const Feed = () => {
    return(
        <div className="ui grid">
            <div className="four wide column">
                <RecentActivityCard />
            </div>
            <div className="twelve wide column">
                <CreatePost />
            </div>
        </div>
    );
}

export default Feed;