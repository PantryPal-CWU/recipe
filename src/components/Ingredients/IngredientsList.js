import React from 'react';

//this is where the list of ingredients will be held
//still haven't figured out how to use this yet and
//how to incorporate the Food API
const IngredientList = ({ingredientList=[]}) => {
    return (
      <>
      {ingredientList.map((data,index) => {
          if (data) {
            return (
              <div key={data.name}>
                <h1>{data.name}</h1>
          </div>	
             )	
           }
           return null
      }) }
      </>
    );
  }
  
  export default IngredientList