import { createAction } from '@reduxjs/toolkit';

export const setFilter = createAction("filter/set");

// export const setFilter = createAction()

// Using vanilla redux--------------------------------------------------------

// import { SET_FILTER } from './filter-types';

// export const setFilter = payload => {
//     return {
//         type: SET_FILTER,
//         payload
//     }
// }

// ------------------------------------------------------