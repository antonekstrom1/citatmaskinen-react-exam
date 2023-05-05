// QUOTEREDUCER JS CODE BELOW

import { quoteStore } from "../store/quoteStore";

const quoteReducer = (state = quoteStore, action) => {
    switch (action.type) {
        case "FILL_QUOTES":
            return {
                ...state,
                quotes: [...action.payload]
            }
        case "ADD_QUOTE":
            return {
                ...state,
                quotes: [action.payload.newQuote, ...state.quotes]
            }
        case "EDIT_QUOTE":
            return {
                ...state,
                quotes: state.quotes.map((quote) =>
                    quote.id === action.payload.id
                        ? { ...quote, [action.payload.field]: action.payload.newValue }
                        : quote
                ),
            };
        case "REMOVE_QUOTE":
            return {
                ...state,
                quotes: state.quotes.filter((quote) => quote.id !== action.payload.id)
            }
        default:
            return state
    }
}
export default quoteReducer;

// QUOTEREDUCER JS CODE ABOVE