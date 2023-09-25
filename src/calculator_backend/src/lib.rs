// mod components;
// // use components::{fetch_canister_data, canister_data_to_traits_value, get_traits_count_freq_number, reverse_mat, rare_calc, score_calc, add_max_min_minus_to_rarity_score, trait_normalize, trait_independence};
// use components::{fetch_canister_data, canister_data_to_traits_value, get_traits_count_freq_number, reverse_mat, rare_calc, score_calc, add_max_min_minus_to_rarity_score};

use serde_json::to_string_pretty;
use std::process::Command;

#[ic_cdk::query]
fn getrarityscore(canister_id: String) -> String {
    let result: String;
    let output = Command::new("dfx")
        .arg("canister")
        .arg("call")
        .arg("--network")
        .arg("ic")
        .arg(canister_id)
        .arg("getTokens")
        .output()
        .expect("failed to deploy websites");

    if output.status.success() {
        let stdout = String::from_utf8_lossy(&output.stdout).to_string();
        result= to_string_pretty(&stdout).expect("can't convert string");
    }
    else {
        let stdout = String::from_utf8_lossy(&output.stderr).to_string();
        result= to_string_pretty(&stdout).expect("can't convert string");
    }
    result
}