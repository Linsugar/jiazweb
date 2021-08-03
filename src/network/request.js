import axios from 'axios'
export default function request(config){
    const instace1 = axios.create({
        timeout: 5000
    })

    return instace1(config)
}
