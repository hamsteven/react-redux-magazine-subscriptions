// // export default function() {
// //     return [
// //         {
// //             id: 1,
// //             magazineName: "Vogue",
// //             keywords: "fashion"
// //         },
// //         {
// //             id: 2,
// //             magazineName: "Good Housekeeping",
// //             keywords: "home"
// //         }
// //     ]
// // }

// export default function magazinesReducer(state = [], action) {
//     switch (action.type) {
//         case 'GET_MAGAZINES':
//             return [...state,
//                 Object.assign({}, action.course)
//             ];
//         default:
//             return state;
//     }
// }