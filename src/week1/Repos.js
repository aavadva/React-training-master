import React from 'react';
import {RepoCards} from "./RepoCards";


export const Repos = (props) => {
    return (
        <div className="row">
            {props.data.map((d) => {
                return (
                <RepoCards
                    name = {d.name}
                    link = {d.git_url}
                    userName = {d.owner.login}
                    starsCount = {d.stargazers_count}
                    watcherCount = {d.watchers_count}
                    description = {d.description}
                    topics = {d.topics}
                />
                );
            })}
        </div>
    );
};

