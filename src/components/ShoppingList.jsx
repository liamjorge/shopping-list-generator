import getGroupedIngredients from "../utils/getGroupedIngredients"

const ShoppingList = (props) => {
    const {chosenMeals} = props;

    return (
        <section>
            <h2>Shopping list</h2>
            <h3>🥕 Fruit and veg</h3>
                <ul>
                    {getGroupedIngredients(chosenMeals, "fruit/veg").map((ingredient, index)=>(
                        <li key={ingredient.item + index}>{ingredient.amount}{ingredient.units} {ingredient.item} </li>
                    ))}
                </ul>
            <h3>🍖 Fridge</h3>
                <ul>
                    {getGroupedIngredients(chosenMeals, "fridge").map((ingredient, index)=>(
                        <li key={ingredient.item + index}>{ingredient.amount}{ingredient.units} {ingredient.item} </li>
                    ))}
                </ul>
            <h3>🥜 Cupboard</h3>
                <ul>
                    {getGroupedIngredients(chosenMeals, "cupboard").map((ingredient, index)=>(
                        <li key={ingredient.item + index}>{ingredient.amount}{ingredient.units} {ingredient.item} </li>
                    ))}
                </ul>
            <h3>🥶 Freezer</h3>
                <ul>
                    {getGroupedIngredients(chosenMeals, "freezer").map((ingredient, index)=>(
                        <li key={ingredient.item + index}>{ingredient.amount}{ingredient.units} {ingredient.item} </li>
                    ))}
                </ul>
        </section>
    )
}

export default ShoppingList