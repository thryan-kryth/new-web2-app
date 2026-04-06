# Architecture

## Dependency Graph

```mermaid
graph TD
  fe90565a["Web2-frontend-scaffold (web2-frontend-scaffold)"]
  6e075014["Http-api (http-api)"]
  827124c2["Variable-store (variable-store)"]
  c02bc1d2["Transform (transform)"]
  1ea713b4["Delay-timer (delay-timer)"]
  1d4b3662["If-else (if-else)"]
  73819d58["Loop-iterator (loop-iterator)"]
  847a5288["Email-smtp (email-smtp)"]
  fe90565a --> 6e075014
  6e075014 --> c02bc1d2
  c02bc1d2 --> 1d4b3662
  1d4b3662 --> 847a5288
  fe90565a --> 827124c2
  827124c2 --> 1ea713b4
  1ea713b4 --> 73819d58
```

## Execution / Implementation Order

1. **Web2-frontend-scaffold** (`fe90565a`)
2. **Http-api** (`6e075014`)
3. **Variable-store** (`827124c2`)
4. **Transform** (`c02bc1d2`)
5. **Delay-timer** (`1ea713b4`)
6. **If-else** (`1d4b3662`)
7. **Loop-iterator** (`73819d58`)
8. **Email-smtp** (`847a5288`)
