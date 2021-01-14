// // import { reviewService } from '../../service/reviewService'


// export function loadReviews(filterBy) { // Action Creator
//     return async (dispatch) => {
//         const reviews = await reviewService.query(filterBy)
//         const action = {
//             type: 'SET_REVIEWS',
//             reviews,
//             filterBy
//         }
//         dispatch(action)
//     }
// }

// export function addReview(review){
//     return async (dispatch) => {
//         const saveReview = await reviewService.add(review)
//         const action = {
//             type: 'ADD_REVIEW',
//             review: saveReview
//         }
//         dispatch(action)
//     }
// }

// export function removeReview(review) {
//     return (dispatch) => {
//         return reviewService.remove(review._id)
//             .then(() => {
//                 const removeId = review._id;
//                 const action = {
//                     type: 'DELETE_REVIEW',
//                     removeId
//                 }
//                 dispatch(action);
//             })
//     }
// }