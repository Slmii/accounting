const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add(1, 2);
    expect(result).toBe(3);
});

test('generate greeting', () => {
    const result = generateGreeting('Selami');
    expect(result).toBe('Hello Selami');
});


