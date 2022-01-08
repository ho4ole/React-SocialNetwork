import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "3d30378c-a9e4-4495-aeb4-b14373996c47"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    userUnFollow(user) {
       return instance.delete (`follow/${user}`)

    },
    userFollow(user) {
       return instance.post(`follow/${user}`)

    },
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/`+ userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/`+ userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    },
}

export const authAPI = {
    me() {
      return  instance.get(`auth/me`)
    }
}


