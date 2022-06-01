function getGroupedIngredients(meals, type) {
  // based on https://stackoverflow.com/questions/46794232/group-objects-by-multiple-properties-in-array-then-sum-up-their-values

  let helper = {};
  return (
    meals
      .flatMap((recipe) => recipe.ingredients)
      .filter((ingredient) => ingredient.category === type)
      //group same ingredients together
      .reduce(function (r, o) {
        let key = o.item + "-" + o.units;
        if (!helper[key]) {
          helper[key] = Object.assign({}, o); // create a copy of o
          r.push(helper[key]);
        } else {
          helper[key].amount += o.amount;
        }
        return r;
      }, [])
  );
}

export default getGroupedIngredients;
