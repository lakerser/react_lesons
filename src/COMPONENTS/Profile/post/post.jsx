import React, {} from 'react';
import po from './post.module.css'

const Post = (props) => {
    return (<div className={po.component}>
            <div className={po.img}><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7hmwMVuaep863aiRN6IPBvTCbIRGpyhG4bQ&usqp=CAU"
                alt=""/>
                {props.text} <br/> <span className={po.like}>like = {props.like}</span></div>

        </div>


    );


}

export default Post;