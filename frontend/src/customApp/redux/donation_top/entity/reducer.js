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
    confrimationEntity: {},
    confirmingDonation: false,
    confirmedDonation: false,
    confirmEonationError: false
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
    .set("confirmationDonation", action.payload.data)
    .set("confirmingDonation", false)
    .set("confirmedDonation", true);

const confirmDonationFailure = (state, action) =>
  state
    .set("confirmationDonation", {})
    .set("confirmingDonation", false)
    .set("confirmedDonation", false)
    .set("confirDonationError", true);

const confirmDonationCleanup = (state, action) =>
  state
    .set("confirmingDonation", false)
    .set("confirmedDonation", false)
    .set("confirDonationError", false);

const reducer = handleActions(
  {
    DONATION_TOP: {
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
        }
      }
    }
  },
  initState
);

export default reducer;
