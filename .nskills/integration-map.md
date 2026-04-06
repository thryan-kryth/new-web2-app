# Integration Map

How components connect and what data flows between them.

### Web2-frontend-scaffold --> Http-api

- **Source**: Web2-frontend-scaffold (`fe90565a`)
  - Output ports: Frontend App (config)
- **Target**: Http-api (`6e075014`)
  - Input ports: Request Input (config)

### Http-api --> Transform

- **Source**: Http-api (`6e075014`)
  - Output ports: Response (config)
- **Target**: Transform (`c02bc1d2`)
  - Input ports: Input (config)

### Transform --> If-else

- **Source**: Transform (`c02bc1d2`)
  - Output ports: Output (config)
- **Target**: If-else (`1d4b3662`)
  - Input ports: Input (config)

### If-else --> Email-smtp

- **Source**: If-else (`1d4b3662`)
  - Output ports: True Branch (config), False Branch (config)
- **Target**: Email-smtp (`847a5288`)
  - Input ports: Trigger (config)

### Web2-frontend-scaffold --> Variable-store

- **Source**: Web2-frontend-scaffold (`fe90565a`)
  - Output ports: Frontend App (config)
- **Target**: Variable-store (`827124c2`)
  - Input ports: Set Value (config)

### Variable-store --> Delay-timer

- **Source**: Variable-store (`827124c2`)
  - Output ports: Value (config)
- **Target**: Delay-timer (`1ea713b4`)
  - Input ports: Input (config)

### Delay-timer --> Loop-iterator

- **Source**: Delay-timer (`1ea713b4`)
  - Output ports: After Delay (config)
- **Target**: Loop-iterator (`73819d58`)
  - Input ports: Input (config)
