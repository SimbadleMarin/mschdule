import axios from 'axios'

const defaultHeader = {
    'Accept': '*/*',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.122 Safari/537.36',
}

export default class UpdateSerivce {

    static checkUpdates() {
        axios.defaults.withCredentials = true;
        return axios({
            url: 'https://mschedule.seedbed.xyz/version.json',
            method: 'GET',
            headers:defaultHeader
        })
    }
}





