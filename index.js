/* eslint-disable no-console */
let jsonfile = require("jsonfile");
let toml = require("toml-patch");
let fs = require("fs");

const argv = require("yargs")
// .string("validators.power")
    .string("params.foundation_address").argv;

function loopUpdateJsonValue(argvs, paramters) {
    for (let key in argvs) {
        if ((key !== "_" || key === null) && key in paramters) {
            if (key === "power") {
                paramters[key] = argvs[key].toString(10);
            } else {
                paramters[key] = argvs[key];
            }
        }
    }
}

let configPath = null;
let configContent = null;
let outputContent = null;

const type = argv.type;
delete argv.type;
if (type === "genesis") {
    configPath =
        argv.config_path === undefined
            ? "./genesis.json.template"
            : argv.config_path;

    configContent = jsonfile.readFileSync(configPath);

    if (argv.chain_id !== undefined) {
        configContent.chain_id = argv.chain_id;
    }

    if (argv.validators !== undefined) {
        let validator_params = argv.validators;
        const validator_size = configContent.validators.length;


        for (let key in validator_params) {
            if (key > validator_size - 1) {
                configContent.validators.push({
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
                });
            }


            if (validator_params[key].pub_key !== undefined) {
                configContent.validators[key].pub_key.value =
                    validator_params[key].pub_key;
                delete validator_params[key].pub_key;
            }

            loopUpdateJsonValue(validator_params[key], configContent.validators[key]);

        }
    }

    if (argv.params !== undefined) {
        loopUpdateJsonValue(argv.params, configContent.params);
    }

    outputContent = JSON.stringify(configContent, null, 4);
} else if (type === "config") {
    configPath =
        argv.config_path === undefined
            ? "./config.toml.template"
            : argv.config_path;

    let existing = fs.readFileSync(configPath, "utf-8");
    let parsed = toml.parse(existing);
    loopUpdateJsonValue(argv, parsed);
    outputContent = toml.patch(existing, parsed);
} else {
    console.log("Type parameter is wrong");
}

console.log(outputContent);
