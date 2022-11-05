/* eslint-disable @next/next/no-img-element */
import React, { useEffect as UseEffect, useState as UseState } from 'react'
import ContainerBlock from '../../components/ContainerBlock'
import { useRouter as UseRouter } from 'next/router'
import { db } from '../../firebaseConfig'
import { collection, getDocs, doc, getDoc } from 'firebase/firestore'
import Link from 'next/link'
import ReactAudioPlayer from 'react-audio-player'

function productsScreen() {
    const router = UseRouter()
    const { id } = router.query;

    const databaseRef = collection(db, 'Authors')
    const [firedata, setFiredata] = UseState([])
    const [currentData, setCurrentData] = UseState({})

    UseEffect(() => {
        getData()
    }, [])

    const htmlJSX = (
        <div>
            <div className='glassmorph w-9/12 my-6 mx-10 rounded-lg p-4'>
                <img src={currentData.picture} className="w-10/12 mx-auto rounded-lg" />
            </div>
            <div className='glassmorph w-9/12 rounded-lg my-4 py-6 mx-10 px-6'>
            <h1 className=' mb-6 text-3xl md:text-5xl'>{currentData.name}</h1>
            <h1 className='mb-4 text-xl w-10/12 mt-6 text-gray-300'>{currentData.description}</h1>
            </div>
        </div>
    )

    const getData = async () => {
        await getDocs(databaseRef)
        .then((response) => {
            setFiredata(response.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }

    UseEffect(() =>{
        firedata.map((data) => {
            if(data.id == id){
                setCurrentData(data)
            }
        })


    
    }, [firedata])

    console.log(currentData)

    return (
        <ContainerBlock title={currentData.name}>
            {htmlJSX}
        </ContainerBlock>
    )
}

export default productsScreen