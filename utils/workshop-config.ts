export type WorkshopConfig = {
  rpcUrl: string;
  chainId: bigint;
  contractAddress: string;
  confirmations: number;
};

export function createConfig(
  values: WorkshopConfig,
): WorkshopConfig {
  return {
    rpcUrl: values.rpcUrl.trim(),
    chainId: values.chainId,
    contractAddress:
      values.contractAddress.trim(),
    confirmations:
      values.confirmations,
  };
}

export function validateConfig(
  config: WorkshopConfig,
): string[] {
  const errors: string[] = [];

  if (!config.rpcUrl) {
    errors.push(
      "rpcUrl is missing",
    );
  }

  if (config.chainId <= 0n) {
    errors.push(
      "chainId must be positive",
    );
  }

  if (!config.contractAddress) {
    errors.push(
      "contractAddress is missing",
    );
  }

  if (config.confirmations < 0) {
    errors.push(
      "confirmations cannot be negative",
    );
  }

  return errors;
}

export function isConfigValid(
  config: WorkshopConfig,
): boolean {
  return (
    validateConfig(config)
      .length === 0
  );
}

export function configSummary(
  config: WorkshopConfig,
): string {
  return [
    `RPC: ${config.rpcUrl}`,
    `Chain ID: ${config.chainId}`,
    `Contract: ${config.contractAddress}`,
    `Confirmations: ${config.confirmations}`,
  ].join("\n");
}
