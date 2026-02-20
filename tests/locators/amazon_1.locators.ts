export const AmazonLocators = {
    home: {
        searchBox: 'Search Amazon.in',
        iphoneSuggestion: 'iphone 17pro max',
    },
    product: {
        searchResultLinks: 'h2[aria-label^="iPhone 17 Pro Max"] span',        //standard CSS selector
        addToCartId: '#add-to-cart-button', 
        proceedToBuyFallback: '#attach-sidesheet-checkout-button, [name="proceedToRetailCheckout"]',
    }
};