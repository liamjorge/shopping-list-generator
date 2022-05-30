
const MealPlan = (props) => {
    const {mealsRequired, setIsSubmitted, setChosenMeals, chosenMeals} = props;

    const goBack = () => {
        setIsSubmitted(false)
        setChosenMeals([])
    }

    return (
    <>
        {Object.entries(mealsRequired).map(([day,value],index)=>(
        <>
            { value === true ?
            <>
                <h3 key={day+"h3"}>{day}</h3>
                <p key={day+"p"}>{chosenMeals[index].recipeName}</p>
            </>
            : null}
        </>
    ))}
    <button onClick={goBack}>Go back</button>
    </>
    )
}



export default MealPlan