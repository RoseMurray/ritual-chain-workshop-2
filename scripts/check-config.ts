import {
  createConfig,
  validateConfig,
  configSummary,
} from "../utils/workshop-config";

const config =
  createConfig({
    rpcUrl:
      process.env.RPC_URL ??
      "http://127.0.0.1:8545",

    chainId: BigInt(
      process.env.CHAIN_ID ?? "31337",
    ),

    contractAddress:
      process.env.CONTRACT_ADDRESS ??
      "0x123456",

    confirmations: Number(
      process.env.CONFIRMATIONS ?? "1",
    ),
  });

console.log(
  "Workshop configuration",
);

console.log(
  "=======================",
);

console.log(
  configSummary(config),
);

const errors =
  validateConfig(config);

console.log("");

if (errors.length === 0) {
  console.log(
    "Configuration looks OK.",
  );
} else {
  console.log(
    "Configuration errors:",
  );

  for (const error of errors) {
    console.log(
      "-",
      error,
    );
  }
}
