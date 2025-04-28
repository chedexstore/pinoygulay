// Filipino Vegetable Recipes Data
const recipes = [
    {
        id: 1,
        day: 1,
        title: "Pinakbet",
        description: "Classic Ilocano vegetable stew with bitter melon, eggplant, squash, and shrimp paste.",
        prepTime: "20 min",
        cookTime: "30 min",
        image: "images/pinakbet.jpg",
        ingredients: [
            "1 small bitter melon (ampalaya), sliced",
            "1 medium eggplant, sliced",
            "1 cup squash, cubed",
            "10 pieces okra",
            "1 cup string beans, cut into 2-inch pieces",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "2 tomatoes, chopped",
            "2 tbsp shrimp paste (bagoong)",
            "1 cup water",
            "2 tbsp cooking oil"
        ],
        instructions: [
            "Heat oil in a pot over medium heat.",
            "Sauté garlic, onion, and tomatoes until softened.",
            "Add shrimp paste and stir for 1 minute.",
            "Add squash and water. Simmer for 5 minutes.",
            "Add the rest of the vegetables starting with the ones that take longer to cook (bitter melon, string beans, okra, then eggplant).",
            "Cover and simmer for 15-20 minutes until vegetables are tender.",
            "Serve hot with rice."
        ],
        nutrition: {
            calories: "180",
            protein: "5g",
            carbs: "25g",
            fat: "7g",
            fiber: "6g"
        }
    },
    {
        id: 2,
        day: 2,
        title: "Laing",
        description: "Spicy taro leaves cooked in coconut milk, a Bicolano favorite.",
        prepTime: "15 min",
        cookTime: "45 min",
        image: "images/laing.jpg",
        ingredients: [
            "2 cups dried taro leaves (gabi leaves)",
            "4 cups coconut milk",
            "1 cup coconut cream",
            "5 cloves garlic, minced",
            "1 onion, sliced",
            "2 thumbs ginger, julienned",
            "5 pieces red chili peppers (siling labuyo)",
            "3 tbsp shrimp paste (bagoong alamang)",
            "2 tbsp cooking oil"
        ],
        instructions: [
            "Heat oil in a pot over medium heat.",
            "Sauté garlic, onion, and ginger until fragrant.",
            "Add shrimp paste and stir for 1 minute.",
            "Pour in coconut milk and bring to a boil.",
            "Add dried taro leaves and chili peppers. Do not stir.",
            "Simmer covered for 30 minutes over low heat.",
            "Add coconut cream and simmer for another 15 minutes.",
            "Season with salt if needed. Serve hot."
        ],
        nutrition: {
            calories: "320",
            protein: "6g",
            carbs: "15g",
            fat: "28g",
            fiber: "5g"
        }
    },
    {
        id: 3,
        day: 3,
        title: "Ginataang Kalabasa at Sitaw",
        description: "Squash and string beans in creamy coconut milk.",
        prepTime: "15 min",
        cookTime: "25 min",
        image: "images/ginataang-kalabasa.jpg",
        ingredients: [
            "2 cups squash, cubed",
            "2 cups string beans, cut into 2-inch pieces",
            "2 cups coconut milk",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "1 thumb ginger, sliced",
            "2 tbsp shrimp paste (bagoong alamang)",
            "1 tbsp cooking oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat oil in a pan over medium heat.",
            "Sauté garlic, onion, and ginger until fragrant.",
            "Add shrimp paste and stir for 1 minute.",
            "Add squash and cook for 3 minutes.",
            "Pour in coconut milk and bring to a boil.",
            "Add string beans and simmer for 15-20 minutes until vegetables are tender.",
            "Season with salt and pepper if needed.",
            "Serve hot with rice."
        ],
        nutrition: {
            calories: "240",
            protein: "5g",
            carbs: "20g",
            fat: "17g",
            fiber: "5g"
        }
    },
    {
        id: 4,
        day: 4,
        title: "Chopsuey",
        description: "Colorful stir-fried vegetable medley with a savory sauce.",
        prepTime: "20 min",
        cookTime: "15 min",
        image: "images/chopsuey.jpg",
        ingredients: [
            "1 cup cauliflower florets",
            "1 cup broccoli florets",
            "1 carrot, sliced diagonally",
            "1 bell pepper, sliced",
            "1 cup snow peas",
            "10 pieces baby corn",
            "1 cup cabbage, chopped",
            "1 cup mushrooms, sliced",
            "3 cloves garlic, minced",
            "1 onion, sliced",
            "2 tbsp oyster sauce",
            "1 tbsp soy sauce",
            "1 tsp cornstarch dissolved in 1/4 cup water",
            "2 tbsp cooking oil"
        ],
        instructions: [
            "Heat oil in a wok or large pan over high heat.",
            "Sauté garlic and onion until fragrant.",
            "Add carrots and cook for 2 minutes.",
            "Add cauliflower, broccoli, bell pepper, snow peas, and baby corn. Stir-fry for 5 minutes.",
            "Add cabbage and mushrooms. Cook for 3 minutes.",
            "Mix in oyster sauce and soy sauce.",
            "Add cornstarch mixture and stir until sauce thickens.",
            "Serve hot."
        ],
        nutrition: {
            calories: "180",
            protein: "6g",
            carbs: "22g",
            fat: "8g",
            fiber: "7g"
        }
    },
    {
        id: 5,
        day: 5,
        title: "Ensaladang Talong",
        description: "Grilled eggplant salad with tomatoes and onions.",
        prepTime: "10 min",
        cookTime: "15 min",
        image: "images/ensaladang-talong.jpg",
        ingredients: [
            "2 large eggplants",
            "2 tomatoes, diced",
            "1 onion, sliced",
            "3 tbsp vinegar",
            "1 tbsp fish sauce (patis)",
            "1 tsp sugar",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Grill eggplants over open flame or broil until skin is charred and flesh is soft.",
            "Let cool slightly, then peel off skin and flatten the flesh with a fork.",
            "Arrange on a serving plate.",
            "Top with tomatoes and onions.",
            "Mix vinegar, fish sauce, sugar, salt, and pepper in a small bowl.",
            "Pour dressing over the eggplant.",
            "Serve at room temperature."
        ],
        nutrition: {
            calories: "120",
            protein: "3g",
            carbs: "25g",
            fat: "1g",
            fiber: "8g"
        }
    }
];

// Generate recipe cards on homepage
function generateRecipeCards() {
    const container = document.getElementById('recipes-container');
    
    recipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <div class="day-badge">Day ${recipe.day}</div>
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}" style="width:100%;height:100%;object-fit:cover;">
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <span>Prep: ${recipe.prepTime}</span>
                    <span>Cook: ${recipe.cookTime}</span>
                </div>
                <div class="recipe-details">
                    <a href="recipe-${recipe.id}.html" class="cta-button" style="display:block;text-align:center;">View Recipe</a>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Call the function when the page loads
window.onload = generateRecipeCards;