# devchain-config

## CLI

```
cd src/
```
### Configuration of Genesis (genesis.json)

```
// with custom path of genesis.json
node devchain_cli.js --type genesis --config_path=./genesis.json.template

// default genesis.json template
node devchain_cli.js --type genesis
```


#### Upsert Validators(Update or Insert another validator, default only one validator)

```
node devchain_cli.js --type genesis --config_path=./genesis.json.template --validators.1.pub_key=test1 --validators.1.power=101 --validators.2.pub_key=test2 --validators.1.power=102
```

#### Update Chain ID

```
node devchain_cli.js --type genesis --config_path=./genesis.json.template --chain_id=test --params.foundation_address=23 --validators.pub_key=test1 --validators.power=100 --validators.comp_rate=1/6

```

#### Update Validators Parameters

```
node devchain_cli.js --type genesis --config_path=./genesis.json.template --validators.pub_key=testzt3RvqxU7wooagyTygEjZHnHUr0g6Z3T/gWPnh0= --validators.power=1234
```

#### Update Params

```
node devchain_cli.js --type genesis --config_path=./genesis.json.template --params.foundation_address=0x0000000000000000000000000000000000000001 --params.gas_price=12345
```

### Configuration of Node(config.toml)

```
// with custom path of genesis.json
node devchain_cli.js --type config --config_path=./config.toml.template

// default genesis.json template
node devchain_cli.js --type config
```

#### Update Moniker

```
node devchain_cli.js --type config  --config_path ./config.toml.template --moniker test
```

#### Update vm/consensus etc

```
node devchain_cli.js --type config  --config_path ./config.toml.template --vm.$key1 $value1 --vm.$key1 $value2
node devchain_cli.js --type config  --config_path ./config.toml.template --consensus.$key1 $value2
```


