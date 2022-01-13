import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import photo from "../../Users/photo.jpg"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    debugger

    if(!props.profile) {
        return <Preloader/>
    }
    return (

        <div>
           {/* <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || photo} className={s.mainPhoto}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
            <div>
               {/* <span>{props.profile.aboutMe}</span>*/}
            </div>

        </div>
    )
}

export default ProfileInfo;