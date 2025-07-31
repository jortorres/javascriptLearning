import {say} from "cowsay";
import {moo} from "./moo.js";

let name = "John Wick";
console.log(say({ text: moo(name)}));

