import React from "react";
debugger
let UserElement = (props) => {
    return (<div>
            <div key={props.id}>
                <span>
                    <div>
                       {/* <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>*/}
                    </div>
                   {/* <div>
                        {props.user.followed
                            ? <button onClick={() => {
                                props.unfollow(props.user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(props.user.id)
                            }}>Follow</button>}

                    </div>*/}
                </span>
                <span>
                    <span>
                        <div>{props.name}</div>
                    </span>
                    <span>
                        <div>Moscow</div>
                        <div>Russia</div>
                    </span>
                </span>
            </div>)
        }
    </div>)
}

export default UserElement;