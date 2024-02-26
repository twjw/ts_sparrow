import {createRenderer} from "@/renderer";

const app = document.querySelector<HTMLDivElement>('#app')!
const renderer = createRenderer(600, 400)
renderer.line({
  x1: 0,
  y1: 0,
  x2: 50,
  y2: 50,
  stroke: 'black',
})
renderer.rect({
  width: 50,
  height: 50,
  x: 100,
  y: 100,
  fill: 'red',
  stroke: 'black'
})
app.appendChild(renderer.node());
