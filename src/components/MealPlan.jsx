import React from "react";
import ShoppingList from "./ShoppingList"
import EndButtons from "./EndButtons"
import { Button, ButtonGroup, ListSubheader, List, ListItemButton, ListItemText, Typography}  from '@mui/material';

const MealPlan = (props) => {
    const {mealsRequired, setIsSubmitted, setChosenMeals, chosenMeals, servings, setServings} = props;

    const [buttonText, setButtonText] = React.useState('Copy to clipboard');

    const increaseServings = (idx) => {
        const newChosenMeals = [...chosenMeals]
        newChosenMeals[idx].servings=chosenMeals[idx].servings + 1;
        newChosenMeals[idx].ingredients.map((ingredient) => ingredient.amount = Math.round(((ingredient.amount * newChosenMeals[idx].servings)/(newChosenMeals[idx].servings-1))*100)/100)
        setChosenMeals(newChosenMeals)
    }

    const decreaseServings = (idx) => {
        const newChosenMeals = [...chosenMeals]
        newChosenMeals[idx].servings=Math.max(chosenMeals[idx].servings - 1,1);
        newChosenMeals[idx].ingredients.map((ingredient) => ingredient.amount = Math.round(((ingredient.amount * newChosenMeals[idx].servings)/(newChosenMeals[idx].servings+1))*100)/100)
        setChosenMeals(newChosenMeals)
    }

    let chosenDays = Object.entries(mealsRequired)
        .filter(([day,value]) => value === true)
        .map(([day,value]) => day)

    return (
    <section>
        <List
            sx={{ width: '100%', maxWidth: 360, mb: 3 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                    <Typography variant="h6">
                        Meal plan
                    </Typography>
                </ListSubheader>
            }
            >
            {chosenDays.map((day, index)=>(
                <React.Fragment key={day + index}>
                    <ListItemText variant="subheading">{day}</ListItemText>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemText component="a" href={chosenMeals[index].url} target="_blank" primary={`${chosenMeals[index].type} ${chosenMeals[index].recipeName}`} />
                            <ButtonGroup orientation="vertical" size="small">
                                <Button style={{ maxHeight: "1.5rem",minHeight: "1.5rem", maxWidth: "1.6rem", minWidth: "1.6rem"}} onClick={() => increaseServings(index)}>+</Button>
                                <Button style={{ maxHeight: "1.5rem",minHeight: "1.5rem", maxWidth: "1.6rem", minWidth: "1.6rem"}} disabled>{chosenMeals[index].servings}</Button>
                                <Button style={{ maxHeight: "1.5rem",minHeight: "1.5rem", maxWidth: "1.6rem", minWidth: "1.6rem" }} onClick={() => decreaseServings(index)}>-</Button>
                            </ButtonGroup>
                        </ListItemButton>
                    </List>
                    
                </React.Fragment>
            ))}
        </List>
        <ShoppingList chosenMeals={chosenMeals}></ShoppingList>
        <EndButtons setIsSubmitted={setIsSubmitted} setChosenMeals={setChosenMeals} chosenMeals={chosenMeals} chosenDays={chosenDays} buttonText={buttonText} setButtonText={setButtonText}></EndButtons>
    </section>
    )
}



export default MealPlan