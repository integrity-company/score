import ko from "@/locales/ko.json";
import jp from "@/locales/jp.json";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ko",
  messages: {
    ko,
    jp,
  },
}));
