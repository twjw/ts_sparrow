import { describe, test, expect } from 'vitest'
import {createDiv, mount} from "@test/util.ts";
import {createRenderer} from "@/renderer";

describe('shapes', () => {
  test('line() creates line element.', () => {
    const renderer = createRenderer(600, 400);
    const line = renderer.line({
      x1: 0,
      y1: 0,
      x2: 50,
      y2: 50,
      stroke: 'black',
    });
    mount(createDiv(), renderer.node());
    expect(line.tagName).toBe('line');
  });
})
