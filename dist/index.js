"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatesDiff = void 0;
function DatesDiff(date) {
    const dateByMill = Date.parse(date.toLocaleString());
    const dateNow = Date.now();
    const nextOrPrev = dateNow > dateByMill ? 1 : -1;
    const days = parseInt(`${(dateNow - dateByMill) / 1000 / 60 / 60 / 24}`) + nextOrPrev;
    const f = new Intl.RelativeTimeFormat("en-us", {
        style: "long",
        numeric: "always",
    });
    return f.format(-(days > 30 && days < 365
        ? parseInt(`${days / 30}`)
        : days > 365
            ? parseInt(`${days / 365}`)
            : days), `${days > 30 && days < 365 ? "months" : days > 365 ? "years" : "days"}`);
}
exports.DatesDiff = DatesDiff;
console.log(DatesDiff(new Date("2006-01-31")));
//# sourceMappingURL=index.js.map