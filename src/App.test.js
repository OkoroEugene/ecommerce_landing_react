
import App from './App';

test('fetches product category', () => {
    expect(App.prototype.fetchCategory('http://demo4507124.mockable.io/categories')).resolves.toBe(3);
    expect(Array.isArray(['value'])).toBe(true);
    // string
    // expect(typeof 'value').toBe('string');
    // // object
    // expect({ value: 'value' }).toBeTruthy();
    // expect(typeof { value: 'value' }).toBe('object');
});