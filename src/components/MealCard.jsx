import React from 'react'

const MealCard = ({meal}) => {
  return (
    <div className='border border-orange-500 rounded-md'>
        <div className=''>
            <img src={meal.strMealThumb} alt="Meal is Loading..." className='w-full h-50 object-cover' />
        </div>
        <div className='p-4'>
            {meal.strMeal}
        </div>
    </div>
  )
}

export default MealCard