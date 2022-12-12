export function getDate(date: Date, lang: string = "en-us"): string {
  const dateByMill: number = Date.parse(date.toLocaleString());
  const dateNow: number = Date.now();
  const nextOrPrev: number = dateNow > dateByMill ? 1 : -1;
  const days: number =
    parseInt(`${(dateNow - dateByMill) / 1000 / 60 / 60 / 24}`) + nextOrPrev;
  const f: any = new Intl.RelativeTimeFormat(lang, {
    style: "long",
    numeric: "always",
  });

  return f.format(
    -(days > 30 && days < 365
      ? parseInt(`${days / 30}`)
      : days > 365
      ? parseInt(`${days / 365}`)
      : days),
    `${days > 30 && days < 365 ? "months" : days > 365 ? "years" : "days"}`
  );
}
