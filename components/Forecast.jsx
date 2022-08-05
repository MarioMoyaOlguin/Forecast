import React from 'react'
import { iconUrlFromCode } from '../services/weatherService';

export const Forecast = ({title, items}) => {


  return (

    <div>

        <div>
            <div className='flex items-center justify-start'>
                <p className='font font-medium uppercase'>{title}</p>
            </div>
            <hr className='my-2' />

            <div className='flex flex-row items-center justify-around gap-x-2'>
                {
                    items.map( item => (
                        <div
                            className='flex flex-col items-center justify-center bg-white/30 w-20
                                p-1 h-32'
                            key={Math.random().toString(36)}
                        >
                            <p className='font-light text-sm text-center'>{item.title}</p>
                            <img 
                                src={iconUrlFromCode(item.icon)}
                                alt='weather'
                                className='w-12 my-1'
                            />
                            <p className='font-medium'>{`${item.temp.toFixed()}°`}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
