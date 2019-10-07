import React from 'react';
import avatar from './img_avatar.png';
import s from './Post.module.css';

const Post = () => {
   return (
      <div className={s.item}>
         <img src={avatar} alt="avatar" />
         Post 1
         <div>
            <span>Like</span>
         </div>
      </div>
   )
}

export default Post;