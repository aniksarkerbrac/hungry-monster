const searchMeal = () => {
    const meal = document.getElementById('input-meal').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(res => res.json())
        .then(data => showMeal(data))
}
const showMeal = allMeals => {
    const mealsDiv = document.getElementById('meals');
    const error = document.getElementById('error-msg');
    mealsDiv.innerHTML = " ";
    error.innerHTML = " ";

    if (allMeals.meals == null) {
        const showErrorMsg = `
            <p class="error-msg">Sorry, your desired meal is not currently available.</p>
        `
        error.innerHTML = showErrorMsg;
    }
    else {
        const mealArray = allMeals.meals;
        mealArray.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.id = 'meal';
            const mealInfo = `
                <img src="${meal.strMealThumb}">
                <h5>${meal.strMeal}</h5>                
            `
            mealDiv.innerHTML = mealInfo;
            mealsDiv.appendChild(mealDiv);
            document.getElementById('meal').onclick ="showDetailInfo('${meal.strMeal}')";
        })
    }
}
//<button onclick="showDetailInfo('${meal.strMeal}')">click</button>
const showDetailInfo = meal =>{
    console.log(meal);
}