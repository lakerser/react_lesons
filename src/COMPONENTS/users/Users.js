// import React from 'react';
// import classes from './users.module.css'
// import * as axios from 'axios'
// import userPhoto from '../../asets/imgages/img.png'
//
// const Users = (props) => {
//     let getUsers = () => {
//         if (props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users')
//                 .then(response => {
//                     props.setUsers(response.data.items)
//                 })
//
//         }
//     }
//
//
//     return (
//         <div>
//             {props.users.map(u =>
//                 <div key={u.id}>
// 					<span>
// 						<div>
// 							<img className={classes.userPhoto} src={u.photos.small ?? null ? u.photos.small : userPhoto}
//                                  alt=""/>
// 						</div>
// 						<div>
// 							{u.followed
//                                 ? <button onClick={() => {
//                                     axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
//                                         {
//                                             withCredentials: true,
//                                             headers: {
//                                                 'API-KEY': 'bab11685-09de-4903-ba37-ecdb0d3d7e50'
//                                             }
//                                         })
//                                         .then(response => {
//                                             if (response.data.resultCode == 0) {
//                                                 props.unfollow(u.id)
//                                             }
//
//                                         })
//                                 }}> unfollow</button>
//                                 : <button onClick={() => {
//                                     axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`, {},
//                                         {
//                                             withCredentials: true,
//                                             headers: {
//                                                 'API-KEY': 'bab11685-09de-4903-ba37-ecdb0d3d7e50'
//                                             }
//                                         })
//                                         .then(response => {
//                                             if (response.data.resultCode == 0) {
//                                                 props.follow(u.id)
//                                             }
//
//                                         })
//                                 }}> follow</button>
//                             }
// 						</div>
// 					</span>
//                     <span>
// 						<span>
// 							<div>{u.name}</div>
// 							<div>{u.status}</div>
// 						</span>
// 						<span>
// 							<div>{'u.location.country'}</div>
// 							<div>{'u.location.city'}</div>
// 						</span>
// 					</span>
//                 </div>)}
//         </div>
//     );
// };
//
// export default Users;