import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () =>{
    //const categories = ['One Puch', 'Samurai x', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Oregairu']);

    /*const handleAdd = () =>{
        //setCategories([...categories, palabra]);
        setCategories(cat => [...categories, 'Evangelio']);
    }*/
    return(
    <>
     <h2>GifExpertApp</h2>
     <AddCategory setCategories = {setCategories}/>
    <hr />

     {
     <ol>  
         {
            categories.map(index => {
               return <GifGrid 
                        key={index} 
                        category={index}
                      />
            })
         }    
     </ol>
     }

    </>
    )
}