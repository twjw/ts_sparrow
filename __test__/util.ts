export function createDiv() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  return div;
}

export function mount(parent: SVGElement | HTMLElement, child: SVGElement) {
  if (parent) {
    parent.appendChild(child);
  }
}

export function getAttributes(node: HTMLElement, attributes: string[]) {
  return attributes.reduce<Record<string, string | null>>((total, cur) => {
    total[cur] = node.getAttribute(cur)
    return total
  }, {});
}
