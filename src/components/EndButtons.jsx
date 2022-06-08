import { Button, Icon }  from '@mui/material';
import getGroupedIngredients from "../utils/getGroupedIngredients"

const EndButtons = (props) => {
    const {setIsSubmitted, setChosenMeals, chosenMeals, chosenDays, buttonText, setButtonText} = props;

    const goBack = () => {
        setIsSubmitted(false)
        setChosenMeals([])
    }

    const mealPlanText = "Meal plan \n\n "
    + chosenDays.map((day, index)=>( day + '\n' + chosenMeals[index].type + ' ' + chosenMeals[index].recipeName + ' (' + chosenMeals[index].servings + ' portions) ' + chosenMeals[index].url + '\n\n')).join("")
    + " \n Shopping list \n\n"
    + "🥕 Fruit & veg \n"
    + getGroupedIngredients(chosenMeals, "fruit/veg").map((ingredient, index)=>( ingredient.amount + ingredient.units + ' ' + ingredient.item + '\n')).join("")
    + "\n 🍖 Fridge \n"
    + getGroupedIngredients(chosenMeals, "fridge").map((ingredient, index)=>( ingredient.amount + ingredient.units + ' ' + ingredient.item + '\n')).join("")
    + "\n 🥜 Cupboard \n"
    + getGroupedIngredients(chosenMeals, "cupboard").map((ingredient, index)=>( ingredient.amount + ingredient.units + ' ' + ingredient.item + '\n')).join("")
    + "\n 🥶 Freezer \n"
    + getGroupedIngredients(chosenMeals, "freezer").map((ingredient, index)=>( ingredient.amount + ingredient.units + ' ' + ingredient.item + '\n')).join("")

    const copyToClipboard = () => {
        navigator.clipboard.writeText(mealPlanText);
        setButtonText('Copied!');
        setTimeout(() => {
            setButtonText("Copy to clipboard");
            }, 1000);
        }


    return (
        <section>
            <Button variant="contained" onClick={copyToClipboard} startIcon={<Icon>content_copy</Icon>} sx={{m: 1}}>{buttonText}</Button>
            <Button variant="contained" onClick={goBack} startIcon={<Icon>undo</Icon>} sx={{m: 1}}>Go back</Button>
        </section>
    )
}

export default EndButtons