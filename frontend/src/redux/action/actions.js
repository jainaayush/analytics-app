import { GETDATA } from "../types";

export const getKegTrackerIdsAction = (content) => {
    return { type: GETDATA, payload: content };
};

