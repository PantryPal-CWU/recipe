import React from 'react';

//This component shows the list of ingredients
//its a mapping of the ingredientsList variable
//NG
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