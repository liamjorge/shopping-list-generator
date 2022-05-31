const ShoppingList = (props) => {
    const {chosenMeals} = props;

    const getIngredients = (type) => chosenMeals
        .flatMap((recipe) =>  recipe.ingredients)
        .filter((ingredient) => ingredient.category === type)

    return (
        <section>
            <h2>Shopping list</h2>
            <h3>🥕 Fruit and veg</h3>
                <ul>
                    {getIngredients("fruit/veg").map((ingredient, index)=>(
                        <li key={ingredient.item + index}>{ingredient.amount}{ingredient.units} {ingredient.item} </li>
                    ))}
                </ul>
            <h3>🍖 Fridge</h3>
                <ul>
                    {getIngredients("fridge").map((ingredient, index)=>(
                        <li key={ingredient.item + index}>{ingredient.amount}{ingredient.units} {ingredient.item} </li>
                    ))}
                </ul>
            <h3>🥜 Cupboard</h3>
                <ul>
                    {getIngredients("cupboard").map((ingredient, index)=>(
                        <li key={ingredient.item + index}>{ingredient.amount}{ingredient.units} {ingredient.item} </li>
                    ))}
                </ul>
            <h3>🥶 Freezer</h3>
                <ul>
                    {getIngredients("freezer").map((ingredient, index)=>(
                        <li key={ingredient.item + index}>{ingredient.amount}{ingredient.units} {ingredient.item} </li>
                    ))}
                </ul>
        </section>
    )
}

export default ShoppingList