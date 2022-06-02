import React from "react";
import ShoppingList from "./ShoppingList"
import { Button, ListSubheader, List, ListItemButton, ListItemText, Icon }  from '@mui/material';

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
        <List 
            sx={{ width: '100%', maxWidth: 360 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                Meal plan
                </ListSubheader>
            }
            >
            {chosenDays.map((day, index)=>(
                <ListItemButton>
                    <ListItemText primary={`${day}:  ${chosenMeals[index].type} ${chosenMeals[index].recipeName}`} />
                </ListItemButton>
            ))}
        </List>
        <ShoppingList chosenMeals={chosenMeals}></ShoppingList>
        <Button variant="contained" onClick={goBack} startIcon={<Icon>undo</Icon>}>Go back</Button>
    </section>
    )
}



export default MealPlan