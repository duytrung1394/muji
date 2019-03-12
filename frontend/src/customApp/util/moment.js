import moment from "moment";
import config from "../../containers/LanguageSwitcher/config";

if (config.defaultLanguage === "japanese") {
  moment.lang("ja", {
    weekdays: [
      "日曜日",
      "月曜日",
      "火曜日",
      "水曜日",
      "木曜日",
      "金曜日",
      "土曜日"
    ],
    weekdaysShort: ["日", "月", "火", "水", "木", "金", "土"]
  });
}

export default moment;
