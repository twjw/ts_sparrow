import {Attributes, CircleAttributes, Context, LineAttributes, RectAttributes, TextAttributes} from "@/type.ts";
import {applyAttributes, createSVGElement, mount} from "@/renderer/util.ts";

export function shape (qualifiedName: keyof SVGElementTagNameMap, context: Context, attributes: Attributes) {
  const { group } = context
  const el = createSVGElement(qualifiedName)
  applyAttributes(el, attributes)
  mount(group, el)
  return el
}

export function line(context: Context, attributes: LineAttributes) {
  return shape('line', context, attributes);
}

export function rect (context: Context, attributes: RectAttributes) {
  const { width, height, x, y } = attributes

  // 如果 width, height 為負數，將進行轉換：
  // <rect width="-60" height="-60" x="100" y="100" /> 轉換成：
  // <rect width="60" height="60" x="40" y="40" />
  return shape('rect', context, {
    ...attributes,
    width: String(Math.abs(width)),
    height: String(Math.abs(height)),
    x: String(width > 0 ? x : x + width),
    y: String(height > 0 ? y : y + height),
  })
}

export function circle(context: Context, attributes: CircleAttributes) {
  return shape('circle', context, attributes);
}

export function text (context: Context, attributes: TextAttributes) {
  const { text, ...rest } = attributes;
  const textElement = shape('text', context, rest);
  // svg text 的 text 屬性是寫在標籤內而不是屬性
  // 是 <text>content</text> 而不是 <text text='content' />
  textElement.textContent = text;
  return textElement;
}
