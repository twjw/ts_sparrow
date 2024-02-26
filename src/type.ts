export type Context = {
  node: SVGElement
  group: SVGElement
}

export type Attributes = Record<string, any>

export type BaseSvgAttributes = {
  fill?: string
  stroke?: string
}

export type LineAttributes = BaseSvgAttributes & {
  x1: number
  y1: number
  x2: number
  y2: number
}

export type RectAttributes = BaseSvgAttributes & {
  width: number
  height: number
  x: number
  y: number
}

export type CircleAttributes = BaseSvgAttributes & {
  cx: number
  cy: number
  r: number
}

export type TextAttributes = BaseSvgAttributes & {
  text: string
}
