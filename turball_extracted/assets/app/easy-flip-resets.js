export function applyEasyFlipResetAssist(controls) {
  const amplify = (value) => Math.max(-1, Math.min(1, value * 1.5));
  return {
    ...controls,
    pitch: amplify(controls.pitch),
    yaw: amplify(controls.yaw),
    roll: amplify(controls.roll),
  };
}

export { applyEasyFlipResetAssist as a };
