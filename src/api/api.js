import axios from "axios";

const instance = axios.create(
    {
        withCredentials: true,
        headers: {'API-KEY': 'bab11685-09de-4903-ba37-ecdb0d3d7e50'},
        baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    }
)
export const userAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followAPI(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollowAPI(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }


}
export const HeaderAPI = {
    me() {
        return instance.get('auth/me')
            .then(response => {
                return response.data
            })
    }
}
export const ProfileAPI = {
    getUserProfile(profileId) {
        return instance.get(`profile/${profileId}`)
            .then(response => {
                return response.data
            })
    },
    getStatus(userId) {
        debugger
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                debugger
                return response.data
            })
    },
    updateStatus(status){
        debugger
        return instance.put(`profile/status/`,{status:status})
                .then(response => {
                    debugger
                    return response.data
                })


    }
}

