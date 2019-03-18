
import App from './App';
import axios from 'axios';

test('fetches product category', () => {
    axios.get('http://demo4507124.mockable.io/categories')
        .then(response => {
            expect(response.data[0].name).toBe("Fashion");
            // expect(response).toBeDefined()
            // expect(response.data[0].name).toEqual('Koen van Gilst')
        })
    // string
    // expect(typeof 'value').toBe('string');
    // // object
    // expect({ value: 'value' }).toBeTruthy();
    // expect(typeof { value: 'value' }).toBe('object');
});

test('fetches products', () => {
    axios.get('http://demo4507124.mockable.io/products')
        .then(response => {
            expect(response.data[0].name).toBe("Lorem Ipsum");
        })
});