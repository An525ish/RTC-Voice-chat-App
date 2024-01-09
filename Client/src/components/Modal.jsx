import Button from './Button'
import AuthCard from './AuthCard'
import api from '../utils/Api'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Modal = ({showModal, SetshowModal, roomType, setRoomType}) => {
    const [topic, setTopic] = useState('')
    const navigate = useNavigate()

    const createRoom = async () => {
        if(!topic) return;
        try {
        const {data} = await api('/api/addRoom', {topic, roomType})
        navigate(`/room/${data.room._id}`)
        SetshowModal(!showModal)
        setRoomType('open')
        } catch (error) {
            console.log(error)
            SetshowModal(!showModal)
            setRoomType('open')
        }
    }
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-white">
        <AuthCard className='w-[26rem] h-[22rem] relative'>
          <span className="absolute right-4 top-[-1.8rem] font-bold text-lg cursor-pointer" onClick={() => SetshowModal(!showModal)} >Close</span>
          <h3 className="text-lg font-semibold leading-6">Enter the topics to be discussed</h3>
          <input className="w-full outline-none rounded-3xl py-1 px-4 my-3 bg-[#262626] h-9" type="text" placeholder="E.g. : Use of AI/ML" onChange={(e)=>setTopic(e.target.value)} value={topic}/>
          <p className="text-lg font-semibold">Room type</p>
          <div className="flex justify-around my-4">
            <div className={`p-4 rounded-lg hover:bg-[#262626] ease-in-out cursor-pointer ${roomType==='open'? 'bg-[#262626]' : null}`} onClick={()=>setRoomType('open')}>
              <img src="" alt="" />
              🌍
              <p>Open</p>
            </div>
            <div className={`p-4 rounded-lg hover:bg-[#262626] ease-in-out cursor-pointer  ${roomType==='social'? 'bg-[#262626]' : null}`} onClick={()=>setRoomType('social')}>
              <img src="" alt="" />
              👯‍♀️
              <p>Social</p>
            </div>
            <div className={`p-4 rounded-lg hover:bg-[#262626] ease-in-out cursor-pointer  ${roomType==='closed'? 'bg-[#262626]' : null}`} onClick={()=>setRoomType('closed')}>
              <img src="" alt="" />
              🔒
              <p>Closed</p>
            </div>
          </div>
          <p className="text-lg font-semibold">Start a room, open to everyone</p>
          <Button className='bg-[#20BD5F] mx-auto my-4' onNext={createRoom}>Start a Room</Button>
        </AuthCard>
      </div>
  )
}

export default Modal