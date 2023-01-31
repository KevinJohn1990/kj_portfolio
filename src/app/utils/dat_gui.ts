import * as dat from 'dat.gui';

export function NewGuiObject(): dat.GUI {
  return new dat.GUI();
}
export function AddGuiVariable(
  gui: dat.GUI,
  target: Object,
  propName: string,
  min?: number,
  max?: number,
  fn?: (val?: any) => void
) {
  const res = gui.add(target, propName, min, max);
  if (fn) {
    res.onChange((e) => {
      console.log('change:', e);
      fn();
    });
  }
}
