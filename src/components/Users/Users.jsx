import React from 'react';
import styles from './Users.module.css';
import avatar1 from "../../Avatars/avatar1.png";
import avatar5 from "../../Avatars/avatar5.png";
import avatar3 from "../../Avatars/avatar3.png";

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: avatar1,
                    followed: false,
                    fullName: "Dmitry",
                    status: 'I am a boss',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: avatar5,
                    followed: true,
                    fullName: "Sasha",
                    status: 'I am a boss',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: avatar3,
                    followed: false,
                    fullName: "Andrew",
                    status: 'I am a boss',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                            : <button onClick={ () => {props.follow(u.id)} }>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;