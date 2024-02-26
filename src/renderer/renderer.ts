import { createContext } from '@/renderer/context';
import {
  // line, circle, text, rect, path, ring,
  line, rect, circle, text
} from '@/renderer/shape';
// import {
//   restore, save, scale, translate, rotate,
// } from '@/renderer/transform';
import {CircleAttributes, LineAttributes, RectAttributes, TextAttributes} from "@/type.ts";

export function createRenderer(width: number, height: number) {
  const context = createContext(width, height);

  return {
    line: (attributes: LineAttributes) => line(context, attributes),
    circle: (attributes: CircleAttributes) => circle(context, attributes),
    text: (attributes: TextAttributes) => text(context, attributes),
    rect: (attributes: RectAttributes) => rect(context, attributes),
    // path: (attributes: Attributes) => path(context, attributes),
    // ring: (attributes: Attributes) => ring(context, attributes),
    // restore: () => restore(context),
    // save: () => save(context),
    // scale: (...args) => scale(context, ...args),
    // rotate: (...args) => rotate(context, ...args),
    // translate: (...args) => translate(context, ...args),
    node: () => context.node,
    group: () => context.group,
  };
}
