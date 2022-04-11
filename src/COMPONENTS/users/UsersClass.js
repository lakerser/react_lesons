import React from 'react';

import userPhoto from '../../asets/imgages/img.png'
import classes from './users.module.css'


function Users(props) {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={() => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && classes.selectedPage}>{` ${p}`}</span>

                })}

                {/*<span>1 </span>*/}
                {/*<span className={classes.selectedPage}>2 </span>*/}
                {/*<span>3 </span>*/}
                {/*<span>4 </span>*/}
                {/*<span>5 </span>*/}
            </div>
            {
                props.users.map(u =>
                <div key={u.id}>
					<span>
						<div>
							<img className={classes.userPhoto} src={u.photos.small ?? null ? u.photos.small : userPhoto}
                                 alt=""/>
						</div>
						<div>
							{u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}> unfollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
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