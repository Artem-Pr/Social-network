import React from 'react';
import intro from './Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_2560x1440.jpg';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
   return (
      <div className={s.content}>
         <div>
            <img src={intro} alt="intro"></img>
         </div>
         <div>
            ava + description
         </div>
         <MyPosts />
      </div>
   )
}

export default Profile;