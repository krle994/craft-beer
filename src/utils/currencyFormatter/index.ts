export function currencyFormatter(amount = 0, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
    style: "currency",
    currency,
  }).format(amount);
}
