import React from 'react'

const CrustSelection = ({ crust, setCrust }) => {
  return (
    <div className='flex justify-center items-center lg:justify-start'>
      {/* Crust */}
      <div className='flex gap-x-12 mb-8 font-medium'>
        <label className='flex items-center gap-x-2 cursor-pointer'>
          <input
            name='crust'
            value='traditional'
            checked={crust === 'traditional'}
            onChange={(e) => setCrust(e.target.value)}
            type="radio"
            className='appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary checked:border-secondary cursor-pointer'
          />
          Traditional
        </label>
        <label className='flex items-center gap-x-2 cursor-pointer'>
          <input
            name='crust'
            value='thin'
            checked={crust === 'thin'}
            onChange={(e) => setCrust(e.target.value)}
            type="radio"
            className='appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary checked:border-secondary cursor-pointer'
          />
          Thin
        </label>
      </div>
    </div>
  )
}

export default CrustSelection