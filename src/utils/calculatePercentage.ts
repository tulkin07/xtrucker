export function calculatePercentage(fact: number, planned: number): string | null {
  if (typeof fact !== 'number' || typeof planned !== 'number' || planned === 0) {
    console.error(
      'Invalid input. Both fact and planned should be numbers, and planned should not be zero.'
    );
    return null;
  }

  const percentage: number = (fact / planned) * 100;
  return `${percentage?.toFixed(2)} %`;
}
