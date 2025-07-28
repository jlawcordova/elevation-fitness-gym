declare module 'node:test' {
  function test(name: string, fn: () => any): void;
  export = test;
}

declare module 'node:assert/strict' {
  export function equal(actual: any, expected: any): void;
}
