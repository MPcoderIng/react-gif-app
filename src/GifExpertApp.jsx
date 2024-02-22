import { useState } from "react";
import React from 'react'
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Batman']);

    const onAddCategory = (NewCategory) => {
        if (categories.includes(NewCategory)) {
            return
        }
        setCategories([NewCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            
            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />

            {
                categories.map((category) => (
                    <GifGrid key={ category } category={ category } />)
                )
            }

        </>
    )
}
