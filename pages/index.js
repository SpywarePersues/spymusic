import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import ContainerBlock from '../components/ContainerBlock'

export default function Home() {
  const databaseRef = collection(db, 'Songs')
    const [firedata, setFiredata] = UseState([])

    UseEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        await getDocs(databaseRef)
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }
  return (
    <ContainerBlock>
      <div className='my-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1'>
                {firedata.map((data) => {
                    return(
                        <a href={`/song/${data.id}`} key={data.id} className="glassmorph md:mx-10 mx-4 w-11/12 rounded-lg hover:scale-105 transition-scale duration-300 my-3 flex">
                            <img src={data.thumbnail} className="xl:w-1/12 md:w-2/12 w-3/12 lg:w-1/12 rounded-md" alt='' />
                            <h1 className='md:text-2xl text-xl font-bold my-2 mx-4'>{data.name}</h1>
                            <h1 className='my-4 mx-6 text-gray-300'>{data.category}</h1>
                            <h1 className='my-4 mx-6 text-gray-300'>{data.authors}</h1>
                        </a>
                    )
                })}
            </div>
    </ContainerBlock>
  )
}
