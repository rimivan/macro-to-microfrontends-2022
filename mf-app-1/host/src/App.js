import "./index.css";
import {sayHello} from "remote/Remote";

document.getElementById("app").innerHTML = `
<div class="container">
  <div>Name: host</div>
  ${sayHello()}
  <div>Framework: vanilla</div>
  <div>Language: JavaScript</div>
  <div>CSS: Empty CSS</div>
</div>
`;
