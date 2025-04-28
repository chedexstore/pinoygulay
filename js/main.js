// Social media sharing functionality
function shareRecipe(platform, title, url, image) {
    let shareUrl;
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
            break;
        case 'pinterest':
            shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(image)}&description=${encodeURIComponent(title)}`;
            break;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// Initialize share buttons if on recipe page
if(document.querySelector('.share-buttons')) {
    const recipeTitle = document.querySelector('.recipe-header h1').textContent;
    const pageUrl = window.location.href;
    const image = document.querySelector('.recipe-header img')?.src || '';
    
    document.querySelector('.facebook-share').addEventListener('click', () => {
        shareRecipe('facebook', recipeTitle, pageUrl, image);
    });
    
    document.querySelector('.twitter-share').addEventListener('click', () => {
        shareRecipe('twitter', recipeTitle, pageUrl, image);
    });
    
    document.querySelector('.pinterest-share').addEventListener('click', () => {
        shareRecipe('pinterest', recipeTitle, pageUrl, image);
    });
}