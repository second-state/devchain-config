# devchain-config

## CLI

```
cd src/
```

### Read Local Genesis File
```
node devchain_cli.js --genesis_config=./genesis.json.template
```

### Generate Default Genesis File

```
node devchain_cli.js
```

### Upsert Validators(Update or Insert another validator, default only one validator)

```
node devchain_cli.js --genesis_config=./genesis.json.template --validators.1.pub_key=test1 --validators.1.power=101 --validators.2.pub_key=test2 --validators.1.power=102
```

### Update Chain ID

```
node devchain_cli.js --genesis_config=./genesis.json.template --chain_id=test --params.foundation_address=23 --validators.pub_key=test1 --validators.power=100 --validators.comp_rate=1/6

```

### Update Validators Parameters

```
node devchain_cli.js --genesis_config=./genesis.json.template --validators.pub_key=testzt3RvqxU7wooagyTygEjZHnHUr0g6Z3T/gWPnh0= --validators.power=1234
```

### Update Params

```
node devchain_cli.js --genesis_config=./genesis.json.template --params.foundation_address=0x0000000000000000000000000000000000000001 --params.gas_price=12345
```


## Web UI
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
