export const toDiscount = (price:number, listPrice: number) => {
  if (price === listPrice) return 0
  const different = listPrice - price

  return Math.round((100 * different) / listPrice)
}