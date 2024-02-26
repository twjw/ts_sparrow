import {createSVGElement, mount} from '@/renderer/util';
import {Context} from "@/type.ts";

function createContext (width: number, height: number): Context {
  const svg = createSVGElement('svg')
  svg.setAttribute('width', String(width));
  svg.setAttribute('height', String(height));
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const g = createSVGElement('g');
  mount(svg, g);

  return {
    node: svg,
    group: g,
  }
}

export {
  createContext
}
