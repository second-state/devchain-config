let jsonfile = require("jsonfile");

const argv = require("yargs")
  .string("validators.power")
  .string("params.foundation_address").argv;

var jsonContent = null;

function loopUpdateJsonValue(argvs, paramters) {
  for (let key in argvs) {
    if (key in paramters) {
      paramters[key] = argvs[key];
    }
  }
}

if (argv.genesis_config === undefined) {
  jsonContent = {
    genesis_time: "0001-01-01T00:00:00Z",
    chain_id: "local",
    validators: [
      {
        pub_key: {
          type: "tendermint/PubKeyEd25519",
          value: ""
        },
        power: "10",
        shares: 1000000,
        name: "",
        address: "0x7eff122b94897ea5b0e2a9abf47b86337fafebdc",
        comp_rate: "1/5",
        max_amount: 10000000,
        website: "",
        location: "",
        email: "",
        Profile: ""
      }
    ],
    app_hash: null,
    params: {
      max_vals: 4,
      backup_vals: 1,
      self_staking_ratio: "1/10",
      inflation_rate: "0",
      validator_size_threshold: "3/25",
      unstake_waiting_period: 60480,
      proposal_expire_period: 60480,
      declare_candidacy_gas: 1000000,
      update_candidacy_gas: 1000000,
      set_comp_rate_gas: 21000,
      update_candidate_account_gas: 1000000,
      accept_candidate_account_update_request_gas: 1000000,
      transfer_fund_proposal_gas: 2000000,
      change_params_proposal_gas: 2000000,
      deploy_libeni_proposal_gas: 2000000,
      retire_program_proposal_gas: 2000000,
      upgrade_program_proposal_gas: 2000000,
      gas_price: 0,
      min_staking_amount: 1000,
      validators_block_award_ratio: "9/10",
      max_slash_blocks: 120,
      slash_ratio: "3/250",
      slash_enabled: false,
      cube_pub_keys: "[]",
      low_price_tx_gas_limit: 500000,
      low_price_tx_slots_cap: 100,
      foundation_address: "0x0000000000000000000000000000000000000000",
      cal_stake_interval: 1,
      cal_vp_interval: 1,
      cal_avg_staking_date_interval: 8640
    }
  };
} else {
  jsonContent = jsonfile.readFileSync(argv.genesis_config);
}

if (argv.chain_id !== undefined) {
  jsonContent.chain_id = argv.chain_id;
}

if (argv.validators !== undefined) {
  var validator_params = argv.validators;
  if (validator_params.pub_key !== undefined) {
    jsonContent.validators[0].pub_key.value = validator_params.pub_key;
    delete validator_params.pub_key;
  }
  loopUpdateJsonValue(argv.validators, jsonContent.validators[0]);
}

if (argv.params !== undefined) {
  loopUpdateJsonValue(argv.params, jsonContent.params);
}

console.log(JSON.stringify(jsonContent, null, 4));
