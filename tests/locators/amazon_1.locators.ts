export const AmazonLocators = {
    home: {
        searchBox: 'search amazon.in',
        iphoneSuggestion: 'iphone 17 pro max 256gb',
    },
    product: {
        searchResultLinks: 'h2[aria-label^="iPhone 17 Pro Max"] span',        //standard CSS selector
        addToCartId: '#add-to-cart-button', 
        proceedToBuyFallback: '#attach-sidesheet-checkout-button, [name="proceedToRetailCheckout"]',
    }
};