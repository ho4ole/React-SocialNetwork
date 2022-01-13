import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    setToggleIsFollowing,
    unFollow
} from "../../redux/users-reducer";
import React from 'react';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsFetching, getIsFollowing,
    getPageSize,
    getTotalUsersCount,
    getUsersState
} from "../../redux/users-selectors";



class UsersContainer extends React.Component{


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        debugger
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unFollow}
                isFollowing={this.props.isFollowing}
                isAuth={this.props.isAuth}

            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state),
        isAuth: state.auth.isAuth

    }
}




export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        setToggleIsFollowing,
        getUsers}
)(UsersContainer))