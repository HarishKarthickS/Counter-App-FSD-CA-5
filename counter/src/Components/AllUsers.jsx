import { useEffect, useState } from "react"
import axios from 'axios'

function AllUsers() {
    const [data,setData]=useState([])
    const [filter,Setfilter]=useState("All")
    useEffect(()=>{
        const getuser = async()=>{
            try{
                const response = await axios.get('http://localhost:3000/api/fetchall')
                setData(response.data)
                console.log(data)
            }
            catch(err){
                console.log(err)
            }
        }
        getuser()
    },[])
    const FilteredData = data.filter((item)=>{
        if(filter==="All"){
            return item
        }
        else if(item.hobby.includes(filter)){
            return item
        }
    })
  return (
    <>
    {(data.length>1)?
    <>
        <select type="text" placeholder="Type Id" onChange={(e)=>{Setfilter(e.target.value)}} >
                    <option value="Cooking and baking">Cooking and baking</option>
                    <option value="Reading">Reading</option>
                    <option value="Pets">Pets</option>
                    <option value="Video gaming">Video gaming</option>
                    <option value="Watching TV">Watching TV</option>
                    <option value="Sports">Sports</option>
                    <option value="Fitness">Fitness</option>
                    <option value="painting/drawing">painting/drawing</option>
                    <option value="Board games/card games">Board games/card games</option>
                    <option value="Gardening and plants">Gardening and plants</option>
        </select>
        <table>
            <thead>
                <th>Id</th>
                <th>Name</th>
                <th>Hobby</th>
            </thead>
            <tbody>  
                {FilteredData.map((item,index)=>{
                    return(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.hobby}</td>
                    </tr>)
                })}
            </tbody>
        </table></>:
        <p>No data found</p>
        }
    </>
  )
}

export default AllUsers