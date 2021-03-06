import { handleActions } from "redux-actions";
import { Map } from "immutable";
import restReducer, { restInitState } from "../../shared/entity/reducer";

const initState = restInitState.merge(
  Map({
    links: {},
    giftcard: {},
    doingGiftcardInquiry: false,
    didGiftcardInquiry: false,
    doGiftcardInquiryError: false,
    confirmationEntity: {},
    confirmingDonation: false,
    confirmedDonation: false,
    confirmEonationError: false,
    orderCode: null,
    orderingDonation: false,
    orderedDonation: false,
    orderEonationError: false
  })
);

// GET
const fetchRequest = (state, action) =>
  state
    .set("fetching", true)
    .set("fetched", false)
    .set("fetchError", false);

const fetchSuccess = (state, action) =>
  state
    .set("entity", action.payload.data)
    .set("links", action.payload.links)
    .set("fetching", false)
    .set("fetched", true);

const fetchFailure = (state, action) =>
  state
    .set("entity", {})
    .set("links", {})
    .set("fetching", false)
    .set("fetchError", true);

const fetchCleanup = (state, action) =>
  state
    .set("entity", {})
    .set("links", {})
    .set("fetching", false)
    .set("fetched", false)
    .set("fetchError", false);

// GET GIFTCARD
const doGiftCardInquiryRequest = (state, action) =>
  state
    .set("doingGiftcardInquiry", true)
    .set("didGiftcardInquiry", false)
    .set("doGiftcardInquiryError", false);

const doGiftCardInquirySuccess = (state, action) =>
  state
    .set("giftcard", action.payload.data)
    .set("doingGiftcardInquiry", false)
    .set("didGiftcardInquiry", true);

const doGiftCardInquiryFailure = (state, action) =>
  state
    .set("giftcard", {})
    .set("doingGiftcardInquiry", false)
    .set("doGiftcardInquiryError", true);

const doGiftCardInquiryCleanup = (state, action) =>
  state
    .set("giftcard", {})
    .set("doingGiftcardInquiry", false)
    .set("didGiftcardInquiry", false)
    .set("doGiftcardInquiryError", false);

// POST CONFIRM_DONATION
const confirmDonationRequest = (state, action) =>
  state
    .set("confirmingDonation", true)
    .set("confirmedDonation", false)
    .set("confirmDonationError", false);

const confirmDonationSuccess = (state, action) =>
  state
    .set("confirmationEntity", action.payload.data)
    .set("confirmingDonation", false)
    .set("confirmedDonation", true);

const confirmDonationFailure = (state, action) =>
  state
    .set("confirmationEntity", {})
    .set("confirmingDonation", false)
    .set("confirmedDonation", false)
    .set("confirDonationError", true);

const confirmDonationCleanup = (state, action) =>
  state
    .set("confirmingDonation", false)
    .set("confirmedDonation", false)
    .set("confirDonationError", false);

// POST ORDER_DONATION
const orderDonationRequest = (state, action) =>
  state
    .set("orderCode", null)
    .set("orderingDonation", true)
    .set("orderedDonation", false)
    .set("orderDonationError", false);

const orderDonationSuccess = (state, action) =>
  state
    .set("orderCode", action.payload.orderCode)
    .set("orderingDonation", false)
    .set("orderedDonation", true);

const orderDonationFailure = (state, action) =>
  state
    .set("orderCode", null)
    .set("orderingDonation", false)
    .set("orderedDonation", false)
    .set("orderDonationError", true);

const orderDonationCleanup = (state, action) =>
  state
    .set("orderingDonation", false)
    .set("orderedDonation", false)
    .set("orderDonationError", false);

const reducer = handleActions(
  {
    DONATION: {
      ENTITY: {
        ...restReducer,
        FETCH: {
          REQUEST: fetchRequest,
          SUCCESS: fetchSuccess,
          FAILURE: fetchFailure,
          CLEANUP: fetchCleanup
        },
        DO_GIFTCARD_INQUIRY: {
          REQUEST: doGiftCardInquiryRequest,
          SUCCESS: doGiftCardInquirySuccess,
          FAILURE: doGiftCardInquiryFailure,
          CLEANUP: doGiftCardInquiryCleanup
        },
        CONFIRM_DONATION: {
          REQUEST: confirmDonationRequest,
          SUCCESS: confirmDonationSuccess,
          FAILURE: confirmDonationFailure,
          CLEANUP: confirmDonationCleanup
        },
        ORDER_DONATION: {
          REQUEST: orderDonationRequest,
          SUCCESS: orderDonationSuccess,
          FAILURE: orderDonationFailure,
          CLEANUP: orderDonationCleanup
        }
      }
    }
  },
  initState
);

export default reducer;
