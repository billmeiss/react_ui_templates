import React from 'react';

const RecentActivityCard = () => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">
                    Recent Activity
                </div>
            </div>
            <div className="content">
                <div className="ui feed">
                    <div className="event">
                        <div className="label">
                                <i aria-hidden className="teal users circular inverted icon"></i>
                        </div>
                        <div className="content">
                            <div className="date">
                                1 day ago
                            </div>
                            <div className="summary">
                                You set an upcoming appointment with <a>Donald Reagan </a> 
                                at 8:30 am
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentActivityCard;