import React from 'react'
import { searchApp } from './searchApp.css'
export default function NotFount() {
    return (
        <div className='content mt-5' >
            <div className=" mt-3 flex justify-center" >
                <div className="text-center">
                    <img style={{ width: '6rem', margin: '0 auto',height:'6rem' }} src="https://cdn-icons-png.flaticon.com/512/5717/5717201.png" />
                    <p  >No User Found</p>
                    <h4 >“no data” isn't here !</h4>

                </div>
            </div>
        </div>
    )
}
