import axios from "axios";

export function getPlayersPage(page) {
    return axios.get(`https://futdb.app/api/players?page=${page}`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'application/json'
            }
        })
}

export function getPlayerInfoByID(id) {
    return axios.get(`https://futdb.app/api/players/${id}`, {
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

export function getPlayerImgByID(id) {
    return fetch(`https://futdb.app/api/players/${id}/image`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'image/png'
            }
        })
        .then(response => response.blob()) // parse the response as JSON
        .then(blob => URL.createObjectURL(blob)) // update the state accordingly
}

export function getClubImgByID(id) {
    return fetch(`https://futdb.app/api/clubs/${id}/image`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'image/png'
            }
        })
        .then(response => response.blob()) // parse the response as JSON
        .then(blob => URL.createObjectURL(blob)) // update the state accordingly
}

export function getLeagueImgByID(id) {
    return fetch(`https://futdb.app/api/leagues/${id}/image`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'image/png'
            }
        })
        .then(response => response.blob()) // parse the response as JSON
        .then(blob => URL.createObjectURL(blob)) // update the state accordingly
}

export function getNationsImgByID(id) {
    return fetch(`https://futdb.app/api/nations/${id}/image`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'image/png'
            }
        })
        .then(response => response.blob()) // parse the response as JSON
        .then(blob => URL.createObjectURL(blob)) // update the state accordingly
}