import axios from 'axios'
import { addtofullinfo } from './Dataslice'

export const DataFile=async(dispatch)=>{
    try {

        const files = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(files.data)
        dispatch(addtofullinfo(files.data))

    } catch (err) {

        console.log(err)
        
    }
}