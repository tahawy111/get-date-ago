"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = void 0;
function getDate(date, lang = "en-us") {
    const dateByMill = Date.parse(date.toLocaleString());
    const dateNow = Date.now();
    const nextOrPrev = dateNow > dateByMill ? 1 : -1;
    const days = parseInt(`${(dateNow - dateByMill) / 1000 / 60 / 60 / 24}`) + nextOrPrev;
    const f = new Intl.RelativeTimeFormat(lang, {
        style: "long",
        numeric: "always",
    });
    return f.format(-(days > 30 && days < 365
        ? parseInt(`${days / 30}`)
        : days > 365
            ? parseInt(`${days / 365}`)
            : days), `${days > 30 && days < 365 ? "months" : days > 365 ? "years" : "days"}`);
}
exports.getDate = getDate;
//# sourceMappingURL=index.js.map