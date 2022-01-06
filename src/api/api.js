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
       return instance.delete (`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
            {
                withCredentials: true,
                headers: {
                    "API-KEY": "3d30378c-a9e4-4495-aeb4-b14373996c47"
                }
            }
        )
    },
    userFollow(user) {
       return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
            {}, {withCredentials: true,
                headers: {
                    "API-KEY": "3d30378c-a9e4-4495-aeb4-b14373996c47"
                }})
    }
}
