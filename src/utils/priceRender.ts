// disable no-param-reassign
export function priceRender(amount: string) {
  let innerAmount = amount;
  if (innerAmount?.length > 3) {
    innerAmount = innerAmount?.replace(/[^0-9.]/g, '');
    if (innerAmount?.indexOf('.') !== -1) {
      innerAmount = innerAmount?.substring(0, innerAmount?.indexOf('.') + 3);
    }
    innerAmount = innerAmount?.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  return innerAmount;
}
