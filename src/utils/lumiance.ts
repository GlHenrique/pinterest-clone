function lumiance(hexColor: string, luminosity = 0) {
  let hex = hexColor.replace(/[^0-9a-f]/gi, '');

  const isValidHex = hex.length === 6 || hex.length === 3;

  if (!isValidHex) throw new Error('Invalid COLOR');
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  const black = 0;
  const white = 255;
  const twoDigitGroup = hex.match(/[0-9a-f]{2}/gi);

  let newHex = '#';

  twoDigitGroup?.forEach((twoDigit) => {
    const numberFroHex = parseInt(twoDigit, 16);
    const calculateLuminosity = numberFroHex + luminosity * 255;

    const backOrLuminosity = Math.max(black, calculateLuminosity);
    const partialColor = Math.min(white, backOrLuminosity);

    const newColor = Math.round(partialColor);

    const numberToHex = newColor.toString(16);

    const finalHex = `0${numberToHex}`.slice(-2);
    newHex += finalHex;
  });

  return newHex;
}

export default lumiance;
