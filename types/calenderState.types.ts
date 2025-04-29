import { Dispatch } from "react";

export interface EventType {
  title: string;
  timings: string;
  content: string;
  image?: string;
  ended: boolean;
  previousYoutubeRecording?: string; // If event ended provide recording
  organizer?: string;
  role?: string;
  company?: string;
}

export interface EventArrayType {
  day: number;
  event: boolean;
  events: EventType[];
  dumpDay: boolean;
}

// 🆕 Define SelectedDayEventsType:
export interface SelectedDayEventsType {
  events: EventType[];
  day: string;
}

// This is Global state types (i.e store type for calender global store)
export interface CalenderStateTypes {
  index: number;
  selectedData: SelectedDayEventsType; // 🛠 was EventType[], now SelectedDayEventsType
  selectedEvent: EventType;
  month: number;
  year: number;
  dates: EventArrayType[];
}

export interface Action {
  type:
    | 'UPDATE_CALENDER_VIEW'
    | 'SHOW_EVENTS_FOR_SELECTED_DATE'
    | 'UPDATE_DATES'
    | 'MONTH_BACKWARD'
    | 'MONTH_FORWARD'
    | 'SHOW_SELECTED_EVENT_DETAILS';
  data: number | string | EventArrayType[] | SelectedDayEventsType; // 🛠 Allow object { events, day }
}

export interface State {
  month: number;
  year: number;
  index: number;
  selectedData: SelectedDayEventsType; // 🛠 was any[], now correct
  selectedEvent: EventType;
  dates: EventArrayType[];
}

export interface ContextType {
  state: State;
  dispatch: Dispatch<Action>;
}