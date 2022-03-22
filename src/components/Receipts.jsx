import React, { useState } from 'react';
import Ingredients from './Ingredients';


const Receipts = () => {
    const[meal,setMeal] = useState("")
    return (
        <div>
            <input 
            type="radio"
            name='meal'
            value='ролы'
            onChange={(e) => setMeal(e.target.value)}
            
            />
            <label>Ролы</label><br/>
            <input 
            value='суши'
            type="radio"
            name='meal'
            onChange={(e) => setMeal(e.target.value)}
            
            
            />
            <label>Суши</label><br/>
            <input 
            value='токпоки'
            type="radio"
            name='meal'
            onChange={(e) => setMeal(e.target.value)}
            />
            
            <label>Токпоки</label><br/>
            <Ingredients meal={meal}/>

    
            
            

        </div>
    );
};

export default Receipts;