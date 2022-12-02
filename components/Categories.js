import { useEffect, useState } from "react";
import { View,Text, ScrollView } from "react-native";
import client, { urlFor } from "../sanity";
import CategoryCard from "./CategoryCard";



const Categories = () => {

    const [categories,setCategories] = useState([])

    useEffect(()=>{
        client.fetch(`
        *[_type == "category"]
        `).then((data)=>{
            setCategories(data);
        });
    },[]);

    console.log(categories)

    return (
        <ScrollView 
        contentContainerStyle={{
            paddingHorizontal:15,
            paddingBottom:10
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
            {/*Category card */}

        {categories.map((category)=>(
             <CategoryCard 
             key={category._id}
             imgUrl={urlFor(category.image).url()}
             title={category.name}
             />
        ))}
           
        </ScrollView>
    )
}

export default Categories
