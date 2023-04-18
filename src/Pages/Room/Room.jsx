import React from 'react'
import { Attendants, Board, Chat, ScreenShare, Settings, Video } from '../../Components'

const Room = () => {
    return (
        <div className='w-screen h-screen bg-blue-800'>
            <div className='w-screen h-[90vh] bg-red-200 flex'>
                <div className='grow p-0 flex'>
                    <ScreenShare />
                    <Video />
                </div>
                <div className='flex-grow-4 m-2 p-5 border-slate-400 rounded-lg border-1'>
                    <Chat />
                    <Board />
                </div>
            </div>
            <div className='w-screen h-[10vh] bg-yellow-200'>
                <Settings />
                <Attendants />
            </div>
        </div>
    )
}

export default Room