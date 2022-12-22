# Recreation
This repository is a recreation of this error when using sveltekit and kysely:
```
TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".ts" for xxx.ts
    at new NodeError (node:internal/errors:387:5)
    at Object.getFileProtocolModuleFormat [as file:] (node:internal/modules/esm/get_format:75:11)
    at defaultGetFormat (node:internal/modules/esm/get_format:117:38)
    at defaultLoad (node:internal/modules/esm/load:81:20)
    at nextLoad (node:internal/modules/esm/loader:163:28)
    at ESMLoader.load (node:internal/modules/esm/loader:601:26)
    at ESMLoader.moduleProvider (node:internal/modules/esm/loader:457:22)
    at new ModuleJob (node:internal/modules/esm/module_job:63:26)
    at ESMLoader.#createModuleJob (node:internal/modules/esm/loader:476:17)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:434:34) {
  code: 'ERR_UNKNOWN_FILE_EXTENSION'
```

# How to run
`make dev` - This runs a test postgres db in a docker container and also starts the development server.