import profileClasses from './Profile.module.css'

function Profile() {
    return <div className={profileClasses.content}>

        <div>
            <img src={'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg'}/>
        </div>
        <div>ava+desc</div>
        <div>my post
            <div>
                new post
            </div>
            <div className={profileClasses.item}>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    </div>
}

export default Profile;