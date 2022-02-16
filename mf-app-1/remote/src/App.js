import "./index.css";

export const sayHello = () => 'Hello from remote!'
document.getElementById("app").innerHTML = `
<div class="container">
  ${sayHello()}
  <div>Name: remote</div>
  <div>Framework: vanilla</div>
  <div>Language: JavaScript</div>
  <div>CSS: Empty CSS</div>
</div>
`;
