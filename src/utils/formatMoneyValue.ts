export function formatMoneyValue(money: string) {
  const formatted = money.replace(",", ".");
  return Number(formatted);
}