import React, {useState, useEffect} from 'react';
import SearchBar from './IngredientsForm';
import IngredientList from './IngredientsList'


const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [ingredientListDefault, setIngredientDefault] = useState();
    const [ingredientList, setIngredientList] = useState();

    const fetchData = async () => {
        return await fetch('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=C3Dr3Own7tM1ZoyfvO5Gc8qCPlGSxS3nzWbFu1PD');
    }
}