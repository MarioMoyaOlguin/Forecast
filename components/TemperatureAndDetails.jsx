import React from 'react'
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
} from '@iconscout/react-unicons'
import { formatToLocalTime, iconUrlFromCode } from '../services/weatherService'

export const TemperatureAndDetails = ( {weather: {
    details, icon, temp, temp_min, temp_max, sunrise, sunset, speed,
    humidity, feels_like, timezone
}} ) => {

    
  return (
    <div>

        <div className='flex justify-center items-center py-6 text-xl text-cyan-300 '>
            <p>{details}</p>
        </div>

        <div className='flex flex-row items-center justify-between  py-3'>
            <img 
                src={iconUrlFromCode(icon)}
                alt='weather'
                className='w-20'
            />
            <p className='text-5xl'>{`${temp.toFixed()}°`}</p>
            <div className='flex flex-col items-center space-y-2 font-light text-sm'>
                <div className='flex items-center'>
                    <UilTemperature size={18} className='mr-1' />
                    Feels like:
                    <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                </div>
                <div className='flex items-center'>
                    <UilTear size={18} className='mr-1' />
                    Humidity:
                    <span className='font-medium ml-1'>{`${humidity}%`}</span>
                </div>
                <div className='flex items-center'>
                    <UilWind size={18} className='mr-1' />
                    Wind:
                    <span className='font-medium ml-1'>{`${speed} km/h`}</span>
                </div>
            </div>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-center
             space-y-1 sm:space-y-0 pt-1 sm:pt-0 sm:mt-5 text-sm font-light'>

            <div className='flex flex-row w-full sm:w-fit'>
                <div className='w-1/2 sm:w-fit flex flex-row justify-center items-center'>
                    <div className='w-5'><UilSun size={20} /></div>
                    <span>Rise:</span>
                    <span className='font-medium ml-1 text-center'>
                        {formatToLocalTime(sunrise, timezone, 'hh:mm a')}
                    </span>
                    <p className='invisible sm:visible mx-2'>|</p>
                </div>

                <div className='w-1/2 sm:w-fit flex flex-row justify-center sm:justify-start items-center'>
                    <div className='w-5'><UilSunset size={20} /></div>
                    <span>Set:</span>
                    <span className='font-medium ml-1 text-center'>
                        {formatToLocalTime(sunset, timezone, 'hh:mm a')}    
                    </span>
                    <p className='invisible sm:visible mx-2'>|</p>
                </div>
            </div>

            <div className='flex flex-row w-full ml-0 sm:w-fit'>
                <div className='w-1/2 sm:w-fit flex flex-row justify-center items-center'>
                    <div className='w-5'><UilSun size={20} /></div>
                    <span>High:</span>
                    <span className='font-medium ml-1 text-center'>
                        {`${temp_max.toFixed()}°`}
                    </span>
                    <p className='invisible sm:visible mx-2'>|</p>
                </div>

                <div className='w-1/2 sm:w-fit flex flex-row justify-center items-center'>
                    <div className='w-5'><UilSun size={20} /></div>
                    <span>Low:</span>
                    <span className='font-medium ml-1 text-center'>
                        {`${temp_min.toFixed()}°`}
                    </span>
                </div>
            </div>

        </div>

    </div>
  )
}
