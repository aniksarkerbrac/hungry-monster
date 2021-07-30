const searchMeal = () => {
    const meal = document.getElementById('input-meal').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)
        .then(res => res.json())
        .then(data => showMeal(data))
}
const showMeal = allMeals => {
    const mealsDiv = document.getElementById('meals');
    const error = document.getElementById('error-msg');
    const mealDetailDiv = document.getElementById('meal-detail');
    mealDetailDiv.innerHTML = " ";
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
                <div onclick="showDetailInfo('${meal.strMeal}')">
                    <img src="${meal.strMealThumb}">
                    <h5>${meal.strMeal}</h5>                              
                </div>
            `
            mealDiv.innerHTML = mealInfo;
            mealsDiv.appendChild(mealDiv);
        })
    }
}
 
const showDetailInfo = mealName =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(res => res.json())
        .then(data =>{
            const meal = data.meals[0];
            const mealDetailDiv = document.getElementById('meal-detail');
            const detail =`
                <img src="${meal.strMealThumb}">
                <h3>${meal.strMeal}</h3> 
                <h6>Ingredients</h6>
                <ul>
                    <li>${meal.strIngredient1}</li>
                    <li>${meal.strIngredient2}</li>
                    <li>${meal.strIngredient3}</li>
                    <li>${meal.strIngredient4}</li>
                    <li>${meal.strIngredient5}</li>
                    <li>${meal.strIngredient6}</li>
                </ul>
            `
            mealDetailDiv.innerHTML = detail;
        })   
}