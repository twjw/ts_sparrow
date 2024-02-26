import {Attributes} from "@/type.ts";

export function createSVGElement (qualifiedName: keyof SVGElementTagNameMap): SVGElement {
  return document.createElementNS('http://www.w3.org/2000/svg', qualifiedName);
}

export function mount (parent: SVGElement | HTMLElement, child: SVGElement) {
  if (parent) {
    parent.appendChild(child)
  }
}

export function applyAttributes (element: SVGElement, attributes: Attributes) {
  for (const key in attributes) {
    // 駝峰樣式名轉成 dash 模式，strokeWidth -> stroke-width
    const kebabCaseKey = key.replace(/[A-Z]/g, (d) => `-${d.toLocaleLowerCase()}`);
    element.setAttribute(kebabCaseKey, attributes[key] as string);
  }
}
