import React from 'react';
import intro from './Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_2560x1440.jpg';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
   return (
      <div className={s.content}>
         <div>
            <img src={intro} alt="intro"></img>
         </div>
         <div className={s.descriptionBlock}>
            ava + description
         </div>
      </div>
   )
}

export default ProfileInfo;