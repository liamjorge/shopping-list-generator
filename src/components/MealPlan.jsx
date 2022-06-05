import React from "react";
import ShoppingList from "./ShoppingList"
import EndButtons from "./EndButtons"
import { ListSubheader, List, ListItemButton, ListItemText, Typography}  from '@mui/material';

const MealPlan = (props) => {
    const {mealsRequired, setIsSubmitted, setChosenMeals, chosenMeals} = props;

    const [buttonText, setButtonText] = React.useState('Copy to clipboard');


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
                    <ListItemButton sx={{cursor: 'default'}}>
                        <ListItemText primary={
                            <Typography variant="h6">
                                {day}
                            </Typography>
                        } />
                        
                    </ListItemButton>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} component="a" href={chosenMeals[index].url} target="_blank">
                            <ListItemText primary={`${chosenMeals[index].type} ${chosenMeals[index].recipeName} (serves ${chosenMeals[index].servings})`} />
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