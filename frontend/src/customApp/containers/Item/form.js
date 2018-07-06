import React, { Component } from "react";
import { injectIntl } from "react-intl";
import RestForm, {
  RestFormInput,
  RestFormInputNumber,
  RestFormDatePicker,
  RestFormSelect,
  RestFormRadioGroup,
  RestFormTextarea,
  RestFormSubmit
} from "../shared/form";

class Form extends Component {
  render() {
    const statusOptions = [
      {
        label: this.props.intl.formatMessage({
          id: "item.form.status.option.publish"
        }),
        value: "PUBLISHED"
      },
      {
        label: this.props.intl.formatMessage({
          id: "item.form.status.option.unpublish"
        }),
        value: "UNPUBLISHED"
      }
    ];
    const reservationOptions = [
      {
        label: this.props.intl.formatMessage({
          id: "item.form.reservation.option.true"
        }),
        value: true
      },
      {
        label: this.props.intl.formatMessage({
          id: "item.form.reservation.option.false"
        }),
        value: false
      }
    ];
    const storeReceiveOptions = [
      {
        label: this.props.intl.formatMessage({
          id: "item.form.receive.option.true"
        }),
        value: true
      },
      {
        label: this.props.intl.formatMessage({
          id: "item.form.receive.option.false"
        }),
        value: false
      }
    ];
    return (
      <RestForm {...this.props}>
        <RestFormInput name="item_code" id="item.attributes.item_code" />
        <RestFormInput
          name="item_code_alt"
          id="item.attributes.item_code_alt"
        />
        <RestFormSelect
          name="status"
          id="item.attributes.status"
          options={statusOptions}
        />
        <RestFormDatePicker
          name="start_timestamp"
          id="item.attributes.start_timestamp"
        />
        <RestFormDatePicker
          name="end_timestamp"
          id="item.attributes.end_timestamp"
        />
        <RestFormInput name="item_name" id="item.attributes.item_name" />
        <RestFormTextarea name="memo" id="item.attributes.memo" />
        <RestFormInput name="item_label" id="item.attributes.item_label" />
        <RestFormTextarea name="description" id="item.attributes.description" />
        <RestFormRadioGroup
          name="reservation_flag"
          id="item.attributes.reservation_flag"
          options={reservationOptions}
        />
        <RestFormRadioGroup
          name="store_receive_flag"
          id="item.attributes.store_receive_flag"
          options={storeReceiveOptions}
        />
        <RestFormInput name="brand_code" id="item.attributes.brand_code" />
        <RestFormInputNumber name="priority" id="item.attributes.priority" />
        <RestFormInput
          name="promotion_status"
          id="item.attributes.promotion_status"
        />
        <RestFormInput name="spec_info" id="item.attributes.spec_info" />
        <RestFormInput name="size_info" id="item.attributes.size_info" />
        <RestFormInput name="link_urls" id="item.attributes.link_urls" />
        <RestFormInput name="attributes" id="item.attributes.attributes" />
        <RestFormInput name="keywords" id="item.attributes.keywords" />
        <RestFormInput name="tags" id="item.attributes.tags" />
        <RestFormInput
          name="access_policy"
          id="item.attributes.access_policy"
        />
        <RestFormInput name="branches" id="item.attributes.branches" />
        <RestFormInput name="badges" id="item.attributes.badges" />
        <RestFormInput name="lang" id="item.attributes.lang" />
        <RestFormInput
          name="addon_service_codes"
          id="item.attributes.addon_service_codes"
        />
        <RestFormSubmit />
      </RestForm>
    );
  }
}

export default injectIntl(Form, {
  withRef: true
});
