import React, { useState } from 'react'
import { UilSearch } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Inputs = ( {setQuery, units, setUnits} ) => {

    const [city, setCity] = useState('');

    const handleSearchCity = () => {
        if(city !== '') setQuery({q: city})
    }

    const handleLocationClick = () => {
        if(navigator.geolocation) {
            toast.info('Fetching user location');
            navigator.geolocation.getCurrentPosition( (position) => {
                toast.success('Location fetched!');
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat, lon
                })
            })
        }
    }

    const handleUnitsChange = (e) => {
        const selectedUnit = e.currentTarget.name;
        if(units !== selectedUnit) setUnits(selectedUnit);
    };

  return (
    <div className='flex flex-row justify-center my-2 sm:my-6'>
        <div className='flex flex-row justify-center w-3/4 items-center space-x-4'>
            <input
                value={city}
                onChange={ (e) => setCity(e.currentTarget.value) }
                type='text'
                placeholder='Search...'
                className='text-xl text-slate-900 font-light p-2 w-full shadow-xl focus:outline-none
                    capitalize placeholder:lowercase ml-1 sm:ml-0'
            />
            <UilSearch
                size={25}
                className=' cursor-pointer transition ease-out hover:scale-125 ml-1'
                onClick={ handleSearchCity }
            />
            <UilLocationPoint
                size={25}
                className=' cursor-pointer transition ease-out hover:scale-125'
                onClick={ handleLocationClick }
            />
        </div>
        <div className='flex flex-row w-1/4 items-center justify-start'>
            <button
                name='metric'
                className='text-xl  font-light transition ease-out hover:scale-125
                    ml-2 sm:ml-10'
                onClick={handleUnitsChange}
            >
                °C
            </button>
            <p className=' mx-2 text-xl'>|</p>
            <button
                name='imperial'
                className='text-xl  font-light transition ease-out hover:scale-125 mr-1'
                onClick={handleUnitsChange}
            >
                °F
            </button>
        </div>
    </div>
  )
}
