import React from 'react';

const CreatePost = () => {
    return (
        <form className="ui form">
            <div className="ui fluid card">
                <div className="content">
                    <div className="header">  
                        Create a post
                    </div>
                </div>
                <textarea placeholder="What's on your mind?" rows="20"></textarea>
                <div className="extra content">
                    <button class="ui teal right floated button">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default CreatePost;