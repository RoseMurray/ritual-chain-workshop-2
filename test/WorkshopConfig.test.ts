import { expect } from "chai";

import {
  createConfig,
  validateConfig,
  isConfigValid,
  configSummary,
} from "../utils/workshop-config";

describe("workshop config", function () {
  const validConfig =
    createConfig({
      rpcUrl:
        "http://127.0.0.1:8545",
      chainId: 31337n,
      contractAddress:
        "0x123456",
      confirmations: 1,
    });

  it("creates a config", function () {
    expect(
      validConfig.rpcUrl,
    ).to.equal(
      "http://127.0.0.1:8545",
    );
  });

  it("accepts a valid config", function () {
    expect(
      isConfigValid(validConfig),
    ).to.equal(true);
  });

  it("rejects a missing rpc url", function () {
    const config =
      createConfig({
        ...validConfig,
        rpcUrl: "",
      });

    expect(
      validateConfig(config),
    ).to.contain(
      "rpcUrl is missing",
    );
  });

  it("rejects an invalid chain id", function () {
    const config =
      createConfig({
        ...validConfig,
        chainId: 0n,
      });

    expect(
      isConfigValid(config),
    ).to.equal(false);
  });

  it("rejects a missing contract", function () {
    const config =
      createConfig({
        ...validConfig,
        contractAddress: "",
      });

    expect(
      validateConfig(config),
    ).to.contain(
      "contractAddress is missing",
    );
  });

  it("rejects negative confirmations", function () {
    const config =
      createConfig({
        ...validConfig,
        confirmations: -1,
      });

    expect(
      isConfigValid(config),
    ).to.equal(false);
  });

  it("creates a readable summary", function () {
    const summary =
      configSummary(validConfig);

    expect(summary)
      .to.contain(
        "Chain ID: 31337",
      );

    expect(summary)
      .to.contain(
        "Confirmations: 1",
      );
  });
});
