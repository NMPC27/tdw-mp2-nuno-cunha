import axios from "axios";

export function getPlayersPage(page) {
    return axios.get(`https://futdb.app/api/players?page=${page}`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'application/json'
            }
        })
}

export function getClubByID(id) {
    return axios.get(`https://futdb.app/api/clubs/${id}`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'application/json'
            }
        })
}

export function getLeagueByID(id) {
    return axios.get(`https://futdb.app/api/leagues/${id}`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'application/json'
            }
        })
}

export function getNationsByID(id) {
    return axios.get(`https://futdb.app/api/nations/${id}`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'application/json'
            }
        })
}