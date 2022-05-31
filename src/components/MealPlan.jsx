import React from "react";
import ShoppingList from "./ShoppingList"

const MealPlan = (props) => {
    const {mealsRequired, setIsSubmitted, setChosenMeals, chosenMeals} = props;

    const goBack = () => {
        setIsSubmitted(false)
        setChosenMeals([])
    }

    let chosenDays = Object.entries(mealsRequired)
        .filter(([day,value]) => value === true)
        .map(([day,value]) => day)

    return (
    <section>
        <h2>Meal plan</h2>
        {chosenDays.map((day, index)=>(
            <React.Fragment key={day + index}>
                <h3 key={day+"h3"}>{day}</h3>
                <p key={day+"p"}>{chosenMeals[index].type} {chosenMeals[index].recipeName}</p>
            </React.Fragment>
    ))}
    <ShoppingList chosenMeals={chosenMeals}></ShoppingList>
    <button onClick={goBack}>Go back</button>
    </section>
    )
}



export default MealPlan