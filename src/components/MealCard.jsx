import React from 'react'
import { Link } from 'react-router-dom'

const MealCard = ({meal}) => {
  return (
    <div className='border border-orange-500 rounded-md hover:scale-105 bg-gray-300 duration-200'>
        <div className=''>
            <img src={meal.strMealThumb} alt="Meal is Loading..." className='w-full h-50 object-cover' />
        </div>
       <div className='p-4'>
            <h2>{meal.strMeal}</h2>
            <Link to={meal.idMeal}>
              <button className='w-full mt-3 cursor-pointer hover:bg-orange-300 duration-300 rounded p-1 border border-orange-500'>View Recipe</button>
            </Link>
        </div>
    </div>
  )
}

export default MealCard
