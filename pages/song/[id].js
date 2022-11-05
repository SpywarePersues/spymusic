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

    const databaseRef = collection(db, 'Songs')
    const [firedata, setFiredata] = UseState([])
    const [currentData, setCurrentData] = UseState({})

    UseEffect(() => {
        getData()
    }, [])

    const htmlJSX = (
        <div>
            <div className='glassmorph mx-10 my-4 p-6 w-9/12 rounded-lg'>
                <img src={currentData.thumbnail} className="md:w-9/12 mx-auto rounded-lg mt-6" />
                <div className='mx-auto block w-7/12 rounded-lg my-4 '>
                <ReactAudioPlayer  src="https://cdn.discordapp.com/attachments/910730837996224584/1038304622026170418/y2mate.com_-_Excuses_AP_Dhillon_Gurinder_Gill_Intense.mp3" controls className='w-full bg-transparent my-4 mb-6 opacity-90 rounded-lg'></ReactAudioPlayer>
                </div>
            </div>
            <div className='glassmorph w-9/12 rounded-lg my-4 py-6 mx-10 px-6'>
            <h1 className=' mb-6 text-3xl md:text-5xl'>{currentData.name}</h1>
            <h1 className='mb-4 text-xl w-10/12 mt-6 text-gray-300'>{currentData.category}</h1>
            <h1 className='text-3xl w-10/12 mb-6 text-gray-100'>{currentData.authors}</h1>
            <div className='flex lg:w-2/12 md:w-4/12 w-7/12 mt-4'>
                <img src={currentData.uploaderPfp} className="w-3/12 h-2/6 mb-8 rounded-full mt-2" />
                <h1 className='my-4 text-center md:text-xl px-4 font-semibold'>{currentData.uploadedBy}</h1>
            </div>
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