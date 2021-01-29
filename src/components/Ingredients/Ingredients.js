import React, {useState, useEffect} from 'react';
import SearchBar from './IngredientsForm';
import IngredientList from './IngredientsList'


const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [ingredientListDefault, setIngredientListDefault] = useState();
    const [ingredientList, setIngredientList] = useState();

    //this function will retrieve the data from the food api
    //Note: The problem I have right now is that I don't know if I copied the
    //link correctly because there is a specific way to retrieve data from this link
    //NG
    const fetchData = async () => {
        return await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=C3Dr3Own7tM1ZoyfvO5Gc8qCPlGSxS3nzWbFu1PD')
        .then(response => response.json())
        .then(data => {
            setIngredientList(data)
            setIngredientListDefault(data)
        });
    }

    //this component will handle the keyword changes and filter the ingredientList
    //NG
    const updateInput = async (input) => {
        const filtered = ingredientListDefault.filter(ingredient =>{
            return ingredient.name.toLowerCase().includes(input.toLowerCae())

        })
        setInput(input);
        setIngredientList(filtered);
    }

    useEffect( () => {fetchData()}, []);

    //Setting up the search bar on the page
    //Very basic structure. Will add more details later
    //once we get the list search working and stuff
    //NG
    return(
        <>
        <h1>Ingredient List</h1>
        <body> Search for ingredients to add to your pantry!</body>
        <SearchBar
        input = {input}
        onChange={updateInput}
        />
        <IngredientList ingredientList={ingredientList}/>
        </>

 );
}

export default SearchPage