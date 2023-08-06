function product(input) {

    let product = String(input[0]);

    let text = '';
    switch (product) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
            text = 'fruit'
            break;

        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
            text = 'vegetable'
            break;
        default:
            text = 'unknown'
            break;
    }
    console.log(text);

}
product(["water"]);