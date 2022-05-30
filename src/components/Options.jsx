import { useState } from "react";
import MealPlan from "./MealPlan"
import recipeList from "../utils/recipeList"

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
        for (let i=1; i<=numberOfMeals; i++) {
            const randomNum = Math.floor(Math.random() * recipeList.length);
            setChosenMeals(meals => ([ ...meals, recipeList[randomNum] ]))
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
                    <label htmlFor={day}>Dinner</label>
                    <input
                    type="checkbox"
                    onChange={handleToggle}
                    key={day+"checkbox"}
                    name={day}
                    checked={mealsRequired[day]}
                    />
                </section>
            ))}
            <button onClick={generateRecipes}>Let's go!</button>
        </section>
    )
}

export default Options