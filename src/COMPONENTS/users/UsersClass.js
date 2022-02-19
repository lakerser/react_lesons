import React from 'react';
import  axios from 'axios'

import userPhoto from '../../asets/imgages/img.png'
import classes from './users.module.css'

class Users extends React.Component {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`)
			.then(response => {
				this.props.setUsers(response.data.items)
			})
	}

	render() {
		let pageCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
		let pages = []
		for (let i =1; i <= pageCount; i++)
		{
			pages.push(i)
		}
		return (
			<div>
				<div>
					{pages.map(p =>{
						return	<span   className={this.props.currentPage === p && classes.selectedPage}>{p}</span>

					})}

					{/*<span>1 </span>*/}
					{/*<span className={classes.selectedPage}>2 </span>*/}
					{/*<span>3 </span>*/}
					{/*<span>4 </span>*/}
					{/*<span>5 </span>*/}
				</div>
				{this.props.users.map(u =>
					<div key={u.id}>
					<span>
						<div>
							<img className={classes.userPhoto} src={u.photos.small ?? null ? u.photos.small : userPhoto}
								 alt=""/>
						</div>
						<div>
							{u.followed
								? <button onClick={() => {
									this.props.unFollow(u.id)
								}}> unfollow</button>
								: <button onClick={() => {
									this.props.follow(u.id)
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
							<div>{'u.location.country'}</div>
							<div>{'u.location.city'}</div>
						</span>
					</span>
					</div>)}
			</div>
		);
	}
}

export default Users;