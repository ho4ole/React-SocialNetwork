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



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                toggleFollowing = {this.props.setToggleIsFollowing}
                isFollowing={this.props.isFollowing}

            />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing

    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    setToggleIsFollowing,
    getUsers
})(UsersContainer);