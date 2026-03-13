import React from 'react'
import { Link } from 'react-router-dom'

const MealCard = ({meal}) => {
  return (
    <div className='border border-orange-500 rounded-md hover:scale-105 bg-gray-600 duration-200'>
        <div className=''>
            <img src={meal.strMealThumb} alt="Meal is Loading..." className='w-full h-50 object-cover' />
        </div>
       <div className='p-4'>
            <h2>{meal.strMeal}</h2>
            <button className='w-full mt-3 cursor-pointer hover:bg-orange-300 duration-300 rounded p-1 border border-orange-500'><Link to={meal.idMeal}>View Recipe</Link></button>
        </div>
    </div>
  )
}

export default MealCard