(()=>{
console.log('hello world js load');
let root = document.querySelector('#root');
root.addEventListener('click', () => {console.log(root.textContent);})
})();

