import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'

const CardSection = ({ name, description, bulletPoints }) => {
  //picture,
  return (
    <div className='flex flex-col sm:flex-row items-center p-6 bg-white rounded-lg shadow-lg'>
      <div className='sm:w-1/3'>
        <FontAwesomeIcon icon={faRocket} width={150} height={150} />
        {/* <img className="w-full h-auto rounded-lg" src={picture} alt={name} /> */}
      </div>
      <div className='sm:w-2/3 sm:pl-6 mt-4 sm:mt-0'>
        <h3 className='text-2xl font-bold mb-4'>{name}</h3>
        <p className='mb-4'>{description}</p>
        <ul className='list-disc list-inside'>
          {bulletPoints.map((point, index) => (
            <li key={index} className='mb-2'>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CardSection
