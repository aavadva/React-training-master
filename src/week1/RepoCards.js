import React from 'react';

export const RepoCards = (props) => {
    return (
        <div className="card" style={{width: 18 +'rem', margin: 20}}>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <a href={props.link} className="btn btn-primary">Git repo</a>
                <h5 className="card-text">UserName: {props.userName}</h5>
                <p className="card-text">{props.starsCount} Stars</p>
                <p className="card-text">{props.watcherCount} Watchers</p>
                <p className="card-text">{props.description} Stars</p>
                <p className="card-text">{props.topics} Watchers</p>
            </div>
        </div>
    );
};


