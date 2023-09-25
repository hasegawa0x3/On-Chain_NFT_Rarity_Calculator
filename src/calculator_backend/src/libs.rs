mod components;
// use components::{fetch_canister_data, canister_data_to_traits_value, get_traits_count_freq_number, reverse_mat, rare_calc, score_calc, add_max_min_minus_to_rarity_score, trait_normalize, trait_independence};
use components::{fetch_canister_data, canister_data_to_traits_value, get_traits_count_freq_number, reverse_mat, rare_calc, score_calc, add_max_min_minus_to_rarity_score};


#[ic_cdk::query]
fn getrarityscore(canister_id: String) -> Vec<Vec<f64>> {
    let (trait_object_array, trait_array) = fetch_canister_data(canister_id.to_owned());
    let traits_value = canister_data_to_traits_value(trait_object_array,trait_array.clone());
    let (_, traits_freq) = get_traits_count_freq_number(reverse_mat(traits_value.clone()));
    let rarity_mat = rare_calc(traits_freq.clone());
    let rarity_score = score_calc(rarity_mat);
    add_max_min_minus_to_rarity_score(rarity_score)
}

// #[ic_cdk::query]
// fn gettraitnormalize(canister_id: String) -> Vec<Vec<f64>> {
//     let (trait_object_array, trait_array) = fetch_canister_data(canister_id.to_owned());
//     let traits_value = canister_data_to_traits_value(trait_object_array,trait_array.clone());
//     let (traits_count, traits_freq) = get_traits_count_freq_number(reverse_mat(traits_value.clone()));
//     trait_normalize(reverse_mat(traits_value.clone()), traits_count, traits_freq)
// }

// // #[ic_cdk::query]
// // fn getqrcord(canister_id: String) -> String {
// //     let (trait_object_array, trait_array) = fetch_canister_data(canister_id.to_owned());
// //     let traits_value = canister_data_to_traits_value(trait_object_array,trait_array.clone());
// //     let (traits_count, traits_freq) = get_traits_count_freq_number(reverse_mat(traits_value.clone()));
// //     let rarity_mat = rare_calc(traits_freq.clone());
// //     let mut rarity_score = score_calc(rarity_mat);
// //     let rarity_rank = rare_rank(rarity_score.clone());
// //     rarity_score = add_max_min_minus_to_rarity_score(rarity_score);
// //     let trait_normalize = trait_normalize(reverse_mat(traits_value.clone()), traits_count, traits_freq);
// // }

// // #[ic_cdk::query]
// // fn getbarcode(canister_id: String) -> String {
// //     let (trait_object_array, trait_array) = fetch_canister_data(canister_id.to_owned());
// //     let traits_value = canister_data_to_traits_value(trait_object_array,trait_array.clone());
// //     let (traits_count, traits_freq) = get_traits_count_freq_number(reverse_mat(traits_value.clone()));
// //     let rarity_mat = rare_calc(traits_freq.clone());
// //     let mut rarity_score = score_calc(rarity_mat);
// //     let rarity_rank = rare_rank(rarity_score.clone());
// //     rarity_score = add_max_min_minus_to_rarity_score(rarity_score); 
// //     let trait_independence = trait_independence(traits_freq.clone());
// //     let trait_cramers_v = trait_cramers_v(traits_freq.clone());
// //     let trait_normalize = trait_normalize(reverse_mat(traits_value.clone()), traits_count, traits_freq);
// // }

// #[ic_cdk::query]
// fn gettraitindependence(canister_id: String) -> Vec<Vec<f64>> {
//     let (trait_object_array, trait_array) = fetch_canister_data(canister_id.to_owned());
//     let traits_value = canister_data_to_traits_value(trait_object_array,trait_array.clone());
//     let (_, traits_freq) = get_traits_count_freq_number(reverse_mat(traits_value.clone()));
//     trait_independence(traits_freq.clone())
// }