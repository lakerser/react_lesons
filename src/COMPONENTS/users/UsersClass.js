import React from 'react';

import userPhoto from '../../asets/imgages/img.png'
import classes from './users.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../common/preloader/loader";


function Users(props) {
    // let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }
    let filteredUsers = props.users.filter(vl => {
        return vl.photos.large != null
    })

    console.log(filteredUsers)

    return (
        <div>
            <div>

                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && classes.selectedPage}>{` ${p}`}</span>

                })}
                {props.isLoading ? <Preloader/> : null}

            </div>
            {
                filteredUsers.map(u =>
                    <div key={u.id}>
					<span>
						<div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={classes.userPhoto}
                                     src={u.photos.small ?? null ? u.photos.small : userPhoto}
                                     alt=""/>
                            </NavLink>

						</div>
						<div>
							{u.followed
                                ?
                                <button
                                    disabled={props.followingInProgress.some(id => id === u.id)}
                                    onClick={() => {
                                        props.unfollowTC(u.id)
                                    }}> unfollow</button>
                                :
                                <button disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.followTC(u.id)
                                        }}> follow </button>
                            }
						</div>
					</span>
                        <span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>

						</span>
					</span>
                    </div>)}
        </div>
    );
}

export default Users;