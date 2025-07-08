// 버튼을 찾은다음에,
// 버튼 찾은다음에,
// 자바스크립트 문법 : DOM 선택, 이벤트 제어
// 할일을 서버로 부터 받아온다
// 그런 다음 화면에 보여준다


document.querySelector("input").addEventListener("click",()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response => response.json()) 
     .then(json => console.log(json))
})