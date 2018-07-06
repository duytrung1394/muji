import { Select } from "antd";
import { AntSelect } from "./styles/select.style";
import WithDirection from "../../settings/withDirection";

const WDSelect = AntSelect(Select);

const isoSelect = WithDirection(WDSelect);
const SelectOption = Select.Option;
const SelectOptionGroup = Select.OptGroup;

export default isoSelect;
export { SelectOption, SelectOptionGroup };
