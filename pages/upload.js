import { collection, addDoc } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter as UseRouter } from 'next/router';
import React, { useState as UseState, useEffect as UseEffect } from 'react'
import ContainerBlock from '../components/ContainerBlock'
import { app, db } from "../firebaseConfig";

function upload() {
    const databaseRef = collection(db, 'Songs')
    const [name, setName] = UseState('')
    const [thumbnail, setThumbnail] = UseState('')
    const [song, setSong] = UseState('')
    const [authors, setAuthors] = UseState('')
    const [category, setCategory] = UseState('')
    const [token, setToken] = UseState("")
    const [author, setAuthor] = UseState("")
    const [authorPFP, setAuthorPFP] = UseState("")
    const router = UseRouter()

    UseEffect(() => {
        setToken(sessionStorage.getItem('Token'))
        setAuthor(sessionStorage.getItem('Name'))
        setAuthorPFP(sessionStorage.getItem('PFP'))
    }, [])

    const addData = () => {
        addDoc(databaseRef, {
            name: name,
            thumbnail: thumbnail,
            song: song,
            authors: authors,
            category: category,
            uploadedBy: author,
            uploaderPfp: authorPFP
        })
        .then(() => {
            alert('Song Added')
            setName('')
            setThumbnail('')
            setSong('')
            setAuthors('')
            setCategory('')
            router.push('/')
        })
    }

    return (
        <ContainerBlock title="Upload">
            {token ? (<div>
            <h1 className='text-5xl text-center pb-5 pt-5 text-gray-200 font-semibold'>Upload</h1>
            <h1 className='mx-6 text-xl mt-6'>Name</h1>
            <input required className='mx-6 rounded-md glassmorph my-2 w-11/12 h-12 p-4 text-gray-300 outline-none' onChange={event => setName(event.target.value)} />

            <h1 className='mx-6 text-xl mt-6'>Thumbnail URL</h1>
            <input required className='mx-6 rounded-md glassmorph my-2 w-11/12 h-12 p-4 text-gray-300 outline-none' onChange={event => setThumbnail(event.target.value)} />

            <h1 className='mx-6 text-xl mt-6'>Song URL <span className='text-blue-600 cursor-pointer'><Link href="https://mailboxdrive.com/upload/">(Kindly Use This to upload music.)</Link></span></h1>
            <input required className='mx-6 rounded-md glassmorph my-2 w-11/12 h-12 p-4 text-gray-300 outline-none' onChange={event => setSong(event.target.value)} />

            <h1 className='mx-6 text-xl mt-6'>Authors</h1>
            <input required className='mx-6 rounded-md glassmorph mt-2 mb-6 w-11/12 h-12 p-4 text-gray-300 outline-none' onChange={event => setAuthors(event.target.value)} />

            <h1 className='mx-6 text-xl mt-6'>Category</h1>
            <input required className='mx-6 rounded-md glassmorph mt-2 mb-6 w-11/12 h-12 p-4 text-gray-300 outline-none' onChange={event => setCategory(event.target.value)} />

            <button className="button px-4 py-3 rounded-md mb-4 mx-6 block" onClick={addData} >Upload</button>
            </div>) : (<div className='text-7xl text-center my-10 underline text-blue-600'><Link href={{pathname: '/login'}}>Login first to upload videos.</Link></div>)}
            
        </ContainerBlock>
    )
}

export default upload