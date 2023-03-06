export function formatNumber(num) {
    const suffixes = ['', 'k', 'M', 'B', 'T']; // Add more suffixes as needed
    const suffixNum = Math.floor(('' + num).length / 3);
    let shortNum = parseFloat((suffixNum !== 0 ? (num / Math.pow(1000, suffixNum)) : num).toPrecision(3));
    if (shortNum % 1 !== 0) {
      shortNum = shortNum.toFixed(1);
    }
    return shortNum + suffixes[suffixNum];
  }