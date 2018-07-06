import { DatePicker } from "antd";
import AntDatePicker from "./styles/datePicker.style";

const Datepicker = AntDatePicker(DatePicker);
const DateRangepicker = AntDatePicker(DatePicker.RangePicker);
const DateMonthpicker = AntDatePicker(DatePicker.MonthPicker);
const DateWeekpicker = AntDatePicker(DatePicker.WeekPicker);

export default Datepicker;
export { DateRangepicker, DateMonthpicker, DateWeekpicker };
