import React from 'react';
import intro from './Evening_Forests_Mountains_Firewatch_Campo_Santo_549147_2560x1440.jpg';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.content}>
            <div>
                <img src={intro} alt="intro"></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;