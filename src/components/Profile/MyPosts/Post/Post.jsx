import React from 'react';
import avatar from './img_avatar.png';
import s from './Post.module.css';

const Post = (props) => {
   return (
      <div className={s.item}>
         <img src={avatar} alt="avatar" />
         {props.message}
         <div>
            <span>Likes {props.likes}</span>
         </div>
      </div>
   )
}

export default Post;