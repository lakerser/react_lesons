import React from 'react';

import userPhoto from '../../asets/imgages/img.png'
import classes from './users.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../common/preloader/loader";
import * as axios from "axios";


function Users(props) {
    let pageCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    }
    let filteredUsers = props.users.filter(vl=>{
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


                {/*<span>1 </span>*/}
                {/*<span className={classes.selectedPage}>2 </span>*/}
                {/*<span>3 </span>*/}
                {/*<span>4 </span>*/}
                {/*<span>5 </span>*/}
            </div>
            {
                filteredUsers.map(u =>
                <div key={u.id}>
					<span>
						<div>
                            <NavLink to={'/profile/'+u.id} >
                                <img className={classes.userPhoto} src={u.photos.small ?? null ? u.photos.small : userPhoto}
                                     alt=""/>
                            </NavLink>

						</div>
						<div>
							{u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                                        {withCredentials:true,
                                            headers: {
                                                'API-KEY': 'bab11685-09de-4903-ba37-ecdb0d3d7e50'
                                            }
                                        })
                                        .then(response=>{
                                            console.log(response)



                                        })
                                    props.unfollow(u.id)

                                }}> unfollow</button>
                                : <button onClick={() => {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,{},
                                        {withCredentials:true,
                                            headers: {
                                                'API-KEY': 'bab11685-09de-4903-ba37-ecdb0d3d7e50'
                                            }
                                        })
                                        .then(response=>{
                                            console.log(response.data.resultCode)



                                        })
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