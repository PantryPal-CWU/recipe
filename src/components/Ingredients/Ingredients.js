import React, {useState, useEffect} from 'react';
import SearchBar from './IngredientsForm';
//import IngredientList from './IngredientsList'


const SearchPage = (/*props*/) => {
    /*const [input, setInput] = useState('');
    const [ingredientListDefault, setIngredientListDefault] = useState();
    const [ingredientList, setIngredientList] = useState();

    const fetchData = async () => {
        return await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=C3Dr3Own7tM1ZoyfvO5Gc8qCPlGSxS3nzWbFu1PD')
            .then(response => response.json())
            .then(data => {
                setIngredientList(data);
                setIngredientListDefault(data);
            });
    }

    const updateInput = async (input) => {
        const filtered = ingredientListDefault.filter(ingredient => {
            return ingredient.description.toLowerCase().includes(input.toLowerCae())
        })
        setInput(input);
        setIngredientList(filtered);
    }

    useEffect(() => {fetchData()}, []);
    <SearchBar input={input}
        onChange={updateInput} />
        <IngredientList ingredientList={ingredientList}
    */
    return(
        <div className="main">
        <>
        <SearchBar/>
        </>
        </div>

    );
}

export default SearchPage;