import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { UseTheme } from '../context/useTheme';

export const DetailedCard = () => {

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const { dark } = UseTheme()
    const { id } = useParams()

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            setData(response.data.meals[0])
        }
        catch (error) {
            console.log("error:", error)
        }
        finally {
            setLoading(false);
        }
    }


    return (
        <div className={`min-h-screen ${dark ? "text-white bg-black" : "text-black bg-white"} flex justify-center pt-10 pb-5`}>
            {loading ? "Loading..." :
                <div className='border border-orange-400  text-justify rounded w-[80vw] h-fit'>
                    <div>
                        <img src={data.strMealThumb} alt="" className='h-50 w-full object-cover' />
                    </div>
                    <div className='p-3'>
                        <h2 className='text-center font-bold mb-3'>{data.strMeal}</h2>
                        <h2>{data.strInstructions}</h2>
                    </div>
                    <div className='flex justify-end p-3 gap-4'>
                        <button className='border border-blue-500 rounded p-1 px-5 hover:bg-blue-500 cursor-pointer' ><Link to={"/"}>Back</Link></button>
                        <a href={data.strYoutube} className='border border-red-500 rounded p-1  px-5 hover:bg-red-500 cursor-pointer'>Watch Youtube</a>
                    </div>
                </div>
            }
        </div>
    )
}
