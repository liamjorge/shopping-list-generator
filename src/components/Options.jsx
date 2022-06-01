import { useState } from "react";
import MealPlan from "./MealPlan"
import recipeList from "../data/recipeList"
import shuffle from "../utils/shuffle"
import { Button, Switch, Icon } from '@mui/material';


const Options = (props) => {
    const [mealsRequired, setMealsRequired] = useState({
        Monday: true,
        Tuesday: true,
        Wednesday: true,
        Thursday: true,
        Friday: true,
        Saturday: true,
        Sunday: false
    })
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [chosenMeals, setChosenMeals] = useState([]);
   
    const handleToggle = ({ target }) => {
        setMealsRequired(s => ({ ...s, [target.name]: !s[target.name] }));
    }

    const generateRecipes = (event) => {
        const numberOfMeals = Object.values(mealsRequired).reduce((a, b) => a + b, 0)
        const randomRecipeIndices = shuffle([...Array(recipeList.length).keys()])
        
        for (let i=0; i<numberOfMeals; i++) {
            setChosenMeals(meals => ([ ...meals, recipeList[randomRecipeIndices[i]] ]))
        }
        setIsSubmitted(true)
    }

    if (isSubmitted) {
        return <MealPlan mealsRequired={mealsRequired} setIsSubmitted={setIsSubmitted} setChosenMeals={setChosenMeals} chosenMeals={chosenMeals}/>
    }


    return (
        <section>
            {Object.keys(mealsRequired).map(day => (
                <section key={day+"section"}>
                    <h3 key={day}>{day}</h3>
                    <Switch name={day} onChange={handleToggle} checked={mealsRequired[day]}/>
                </section>
            ))}
            <Button variant="contained" onClick={generateRecipes} startIcon={<Icon>star</Icon>}>Let's go</Button>
        </section>
    )
}

export default Options