import profileInfoClasses from './ProfileInfo.module.css'

function ProfileInfo() {
    return <div>
        <div>
            <img src={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'}/>
        </div>
        <div className={profileInfoClasses.descriptionBlock}>
            ava+desc
        </div>
    </div>
}

export default ProfileInfo;