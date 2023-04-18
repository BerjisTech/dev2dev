import React from 'react'
import { Attendants, Board, Chat, ScreenShare, Settings, Video } from '../../Components'

const Room = () => {
    return (
        <div className='w-screen h-screen bg-blue-800'>
            <div className='w-screen h-[90vh] bg-red-200 flex'>
                <div className='grow p-0 flex'>
                    <ScreenShare />
                    <Video />
                    <Board />
                </div>
                <div className='flex-grow-4 m-2 p-3 border-slate-400 rounded-lg border-1 bg-slate-200'>
                    <Chat />
                </div>
            </div>
            <div className='w-screen h-[10vh] bg-yellow-200 flex'>
                <Attendants />
                <Settings />
            </div>
        </div>
    )
}

export default Room