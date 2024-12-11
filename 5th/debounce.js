
const debounce = (func, delay) => {
    let timeout;
    return () => {
        clearTimeout(timeout);
        timeout = setTimeout(func, delay);
    }
}
const debouncedFunction = debounce(() => {
    console.log('Вызвана функция с задержкой');
}, 2000);
debouncedFunction();
debouncedFunction();