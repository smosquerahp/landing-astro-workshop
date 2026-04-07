import { describe, expect, test } from "@jest/globals";

describe("Configuracion base de Jest", () => {
  test("suma simple funciona", () => {
    expect(1 + 1).toBe(2);
  });
});
