import { useState } from "react"
import axios from 'axios';
import './Adduser.css'

function AddUser() {
    const [id,setId]=useState("");
    const [username,setUsername]=useState("");
    const [hobby,setHobby]=useState("Cooking and baking");
    const submit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/api/adduser',{
            id:id,
            username:username,
            hobby:hobby
        }).then(
            (res)=>{console.log(res.data)
                alert("Successfully Added User")
                window.location.reload()
            }
            
        )
        .catch((err)=>{console.log(err)
            alert(`Error : ${err}`)
          }
        )
    }
    
  return (
    <>
    <form onSubmit={submit}>
        <div className="input">
            <div>
                <h2>Id :</h2>
            </div>
            <div>
                <input type="text" placeholder="Type Id" onChange={(e)=>{setId(e.target.value)}} />
            </div>
        </div>
        <div className="input">
            <div>
                <h2>Name :</h2>
            </div>
            <div>
                <input type="text" placeholder="Type Name" onChange={(e)=>{setUsername(e.target.value)}} />
            </div>
        </div>
        <div className="input">
            <div>
                <h2>Hobby :</h2>
            </div>
            <div>
                <select type="text" placeholder="Type Id" onChange={(e)=>{setHobby(e.target.value)}} >
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
            </div>
        </div>
        <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default AddUser