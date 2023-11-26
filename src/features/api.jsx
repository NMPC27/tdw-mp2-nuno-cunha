import axios from "axios";

export function getPlayersPage(page) {
    let result = axios.get(`https://futdb.app/api/players?page=${page}`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'application/json'
            }
        })

        result.then(
        (response) => {
            

            let tmp = response.data.items

            tmp.forEach(element => {
                getNationsByID(element.nation).then(
                    (res) => {
                        element.nation = res.data.nation.name
                    }
                )
                getLeagueByID(element.league).then(
                    (res) => {
                        element.league = res.data.league.name
                    }
                )
                getClubByID(element.club).then(
                    (res) => {
                        element.club = res.data.club.name
                    }
                )
            })

            console.log(tmp)

            return tmp
        }
    )

    return result   
}

function getClubByID(id) {
    return axios.get(`https://futdb.app/api/clubs/${id}`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'application/json'
            }
        })
}

function getLeagueByID(id) {
    return axios.get(`https://futdb.app/api/leagues/${id}`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'application/json'
            }
        })
}

function getNationsByID(id) {
    return axios.get(`https://futdb.app/api/nations/${id}`, {
            headers: {
                'X-AUTH-TOKEN': import.meta.env.VITE_API_KEY,
                'accept': 'application/json'
            }
        })
}