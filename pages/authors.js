import ContainerBlock from '../components/ContainerBlock'
import { db } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect as UseEffect, useState as UseState } from 'react'

export default function authors() {
    const databaseRef = collection(db, 'Authors')
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
        <ContainerBlock title="Home">
            <div className='my-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
                {firedata.map((data) => {
                    return(
                        <a href={`/author/${data.id}`} key={data.id} className="glassmorph md:mx-10 mx-4 w-[18rem] lg:w-[18rem] xl:w-[21rem] rounded-lg hover:scale-105 transition-scale duration-300 my-6">
                            <img src={data.picture} className="w-[46rem] rounded-md" alt='' />
                            <h1 className='md:text-3xl text-2xl my-4 text-center font-bold'>{data.name}</h1>
                        </a>
                    )
                })}
            </div>
            </ContainerBlock>
    )
}
