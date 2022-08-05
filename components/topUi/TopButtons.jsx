import React from 'react'

export const TopButtons = ({setQuery}) => {

    const cities = [
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Paris'
        },
        {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 4,
            title: 'Sydney'
        },
        {
            id: 5,
            title: 'Toronto'
        }
    ];

  return (
    <div className='flex items-center justify-around pt-2 sm:pt-0'>
        {
            cities.map( (city) => (
                <button
                    key={city.id}
                    className='text-sm sm:text-lg font-medium'
                    onClick={ () => setQuery({q: city.title}) }
                >
                    {city.title}
                </button>
            ))
        }
    </div>
  )
}
