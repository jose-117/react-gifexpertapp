import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { useState, useEffect } from "react/cjs/react.development";
//import { gerGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";


export const GifGrid = ({category}) => {

    const {data: img ,loading} = useFetchGifs(category);
    //console.log(data);
   /* const [images, setImages] = useState([]);
    
    useEffect (()=>{
        gerGifs(category)
        .then(setImages);
    }, [category])*/

    /*const gerGifs = async() =>{
        
        const url = `https://api.giphy.com/v1/gifs/search?api_key=p6I01kULIi6EhIzkcdLtinEkHvNqNLJ8&q=${encodeURI(category)}&limit=5`;
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setImages(gifs);
        //console.log(images);
    }
    //gerGifs();*/

    return (
        <>
        <h3 className = "animate__animated animate__bounce">{category}</h3>
        {loading && <p className = "card animate__animated animate__flash">Loading...</p>}
        {<div className="card-grid">
        {
            img.map((img) =>{
                return <GifGridItem
                key={img.id} 
                {...img}/>
            })
        }
    </div>}
        </>
        
    )
}