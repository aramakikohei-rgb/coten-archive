import {
  createContext,
  useContext,
  useReducer,
  type ReactNode,
  type Dispatch,
} from "react";
import type {
  ExplorerFilters,
  TimePeriod,
  Category,
  Region,
} from "@/types/coten";
import { MIN_YEAR, MAX_YEAR } from "@/lib/constants";

type Action =
  | { type: "SET_TIME_PERIOD"; value: TimePeriod | "" }
  | { type: "SET_CATEGORY"; value: Category | "" }
  | { type: "SET_REGION"; value: Region | "" }
  | { type: "SET_SEARCH"; value: string }
  | { type: "SET_YEAR_RANGE"; value: [number, number] }
  | { type: "SELECT_SERIES"; seriesId: string | null }
  | { type: "RESET" };

interface ExplorerState {
  filters: ExplorerFilters;
  selectedSeriesId: string | null;
}

const initialState: ExplorerState = {
  filters: {
    timePeriod: "",
    category: "",
    region: "",
    searchQuery: "",
    yearRange: [MIN_YEAR, MAX_YEAR],
  },
  selectedSeriesId: null,
};

function reducer(state: ExplorerState, action: Action): ExplorerState {
  switch (action.type) {
    case "SET_TIME_PERIOD":
      return {
        ...state,
        filters: { ...state.filters, timePeriod: action.value },
      };
    case "SET_CATEGORY":
      return {
        ...state,
        filters: { ...state.filters, category: action.value },
      };
    case "SET_REGION":
      return {
        ...state,
        filters: { ...state.filters, region: action.value },
      };
    case "SET_SEARCH":
      return {
        ...state,
        filters: { ...state.filters, searchQuery: action.value },
      };
    case "SET_YEAR_RANGE":
      return {
        ...state,
        filters: { ...state.filters, yearRange: action.value },
      };
    case "SELECT_SERIES":
      return { ...state, selectedSeriesId: action.seriesId };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const ExplorerContext = createContext<{
  state: ExplorerState;
  dispatch: Dispatch<Action>;
} | null>(null);

export function ExplorerProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ExplorerContext.Provider value={{ state, dispatch }}>
      {children}
    </ExplorerContext.Provider>
  );
}

export function useExplorer() {
  const ctx = useContext(ExplorerContext);
  if (!ctx) throw new Error("useExplorer must be used within ExplorerProvider");
  return ctx;
}
