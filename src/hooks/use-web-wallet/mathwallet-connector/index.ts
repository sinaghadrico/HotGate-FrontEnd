import { HarmonyAbstractConnector, HarmonyAbstractConnectorArguments } from "../harmony-abstract-connector";

export class MathWalletConnector extends HarmonyAbstractConnector {
    constructor({ chainId }: HarmonyAbstractConnectorArguments) {
        super({ chainId: chainId, windowKey: "harmony" });
    }
}
