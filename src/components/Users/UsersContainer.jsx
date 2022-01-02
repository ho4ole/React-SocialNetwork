import {connect} from "react-redux";
import {createRenderer} from "react-dom/test-utils";
import {
    follow,
    setCurrentPage,
    setCurrentUsersTotalCount,
    setIsFetching,
    setUser,
    unFollow
} from "../../redux/users-reducer";
import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                this.props.setUser(response.data.items);
                this.props.setCurrentUsersTotalCount(response.data.totalCount);
            });

    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setIsFetching(false);
                console.log(response.data.items)
                this.props.setUser(response.data.items);
            });
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
        isFetching: state.usersPage.isFetching

    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUser,
    setCurrentPage,
    setCurrentUsersTotalCount,
    setIsFetching
})(UsersContainer);