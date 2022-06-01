import { useState } from "react";
import getGroupedIngredients from "../utils/getGroupedIngredients"
import { ListSubheader, List, ListItemButton, ListItemText, Collapse, Icon }  from '@mui/material';

const ShoppingList = (props) => {
    const {chosenMeals} = props;

    const [openFruitVeg, setOpenFruitVeg] = useState(false);
    const handleFruitVegClick = () => {
        setOpenFruitVeg(!openFruitVeg);
    };

    const [openFridge, setOpenFridge] = useState(false);
    const handleFridgeClick = () => {
        setOpenFridge(!openFridge);
    };


    const [openCupboard, setOpenCupboard] = useState(false);
    const handleCupboardClick = () => {
        setOpenCupboard(!openCupboard);
    };

    const [openFreezer, setOpenFreezer] = useState(false);
    const handleFreezerClick = () => {
        setOpenFreezer(!openFreezer);
    };

    return (
        <section>
            <List 
                sx={{ width: '100%', maxWidth: 360 }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                    Shopping list
                    </ListSubheader>
                }
                >

                <ListItemButton onClick={handleFruitVegClick}>
                    <ListItemText primary="🥕 Fruit and veg" />
                    {openFruitVeg ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
                </ListItemButton>
                <Collapse in={openFruitVeg} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {getGroupedIngredients(chosenMeals, "fruit/veg").map((ingredient, index)=>(
                        <ListItemButton sx={{ pl: 4 }}><ListItemText primary={`${ingredient.amount}${ingredient.units} ${ingredient.item}`} /></ListItemButton>
                        ))}
                    </List>
                </Collapse>

                <ListItemButton onClick={handleFridgeClick}>
                    <ListItemText primary="🍖 Fridge" />
                    {openFridge ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
                </ListItemButton>
                <Collapse in={openFridge} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {getGroupedIngredients(chosenMeals, "fridge").map((ingredient, index)=>(
                        <ListItemButton sx={{ pl: 4 }}><ListItemText primary={`${ingredient.amount}${ingredient.units} ${ingredient.item}`} /></ListItemButton>
                        ))}
                    </List>
                </Collapse>

                <ListItemButton onClick={handleCupboardClick}>
                    <ListItemText primary="🥜 Cupboard" />
                    {openCupboard ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
                </ListItemButton>
                <Collapse in={openCupboard} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {getGroupedIngredients(chosenMeals, "cupboard").map((ingredient, index)=>(
                        <ListItemButton sx={{ pl: 4 }}><ListItemText primary={`${ingredient.amount}${ingredient.units} ${ingredient.item}`} /></ListItemButton>
                        ))}
                    </List>
                </Collapse>

                <ListItemButton onClick={handleFreezerClick}>
                    <ListItemText primary="🥶 Freezer" />
                    {openFreezer ? <Icon>expand_less</Icon> : <Icon>expand_more</Icon>}
                </ListItemButton>
                <Collapse in={openFreezer} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {getGroupedIngredients(chosenMeals, "freezer").map((ingredient, index)=>(
                        <ListItemButton sx={{ pl: 4 }}><ListItemText primary={`${ingredient.amount}${ingredient.units} ${ingredient.item}`} /></ListItemButton>
                        ))}
                    </List>
                </Collapse>
    
            </List>
        </section>
    )
}

export default ShoppingList