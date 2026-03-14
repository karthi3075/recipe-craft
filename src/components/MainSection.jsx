import React, { useEffect, useState } from 'react'
import { useTheme } from '../context/useTheme'
import axios from 'axios';
import MealCard from './MealCard';
import { DetailedCard } from './DetailedCard';

const MainSection = () => {
    const { dark } = useTheme();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast");
            setData(response.data.meals || [])
        }
        catch (error) {
            console.log("error", error)
        }
        finally {
            setLoading(false)
        }
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            setData(response.data.meals || [])
        }
        catch (error) {
            console.log("error:", error);
        }
        finally {
            setLoading(false);
        }
    }   

    return (
        <div className={`text-center min-h-screen pt-5 ${dark ? "text-white bg-black" : "text-black bg-white"}`}>
            <h1 className='text-3xl'><span className='text-orange-600'>The</span> Receipe Craft</h1>
            <p className='text-sm mt-2'>Search Your Favourite Meal</p>
            <div className='mt-8 relative w-80 md:w-100 mx-auto'>
                <input type="text" value={search} placeholder='Search Recipeee' onChange={(e) => setSearch(e.target.value)} name="search" className='border border-orange-500 focus:outline-none p-1 px-3 pr-20 rounded-full w-80 md:w-100' />
                <button className='bg-orange-600 rounded-r-full cursor-pointer p-1 absolute right-0 bottom-0 top-0 px-3' onClick={handleSearch}>Search</button>
            </div>

            <div className='mt-16 p-6'>
                {loading && <p>Loading...</p>}

                {(data.length == 0 && !loading) && <p>No Recipe Found</p>}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {!loading &&
                        data.map((meal) => (
                            <MealCard key={meal.idMeal} meal={meal}/>
                        ))
                    }
                </div>
            </div>
                {/* {showModel &&
                    <div className='absolute fixed top-0 bg-opacity-100 bg-gray-200'>
                        <div className='flex justify-center w-screen h-screen'>
                            <DetailedCard mealData={mealData} setShowModel={setShowModel} />
                        </div>
                    </div>
                } */}
        </div>
    )
}

export default MainSection