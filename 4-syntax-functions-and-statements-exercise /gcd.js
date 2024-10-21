function greatestCommonDivisor(a, b) {
  if (a === 0 || b === 0) {
    return a + b;
  }

  return greatestCommonDivisor(b, a % b);
}
