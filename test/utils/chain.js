class LDPoSChainModule {
  constructor() {
    this.receivedBlockIdSet = new Set();
  }

  setNetwork(network) {
    this.network = network;
  }

  get eventHandlers() {
    return {
      block: async (block) => {
        if (block && block.id && !this.receivedBlockIdSet.has(block.id)) {
          this.receivedBlockIdSet.add(block.id);
          this.network.trigger('ldpos_chain', 'block', block);
        }
      },
      blockSignature: async (blockSignature) => {

      },
      transaction: async (transaction) => {

      }
    }
  }

  get actionHandlers() {
    return {
      getSignedBlocksFromHeight: async ({ height, limit }) => {
        return [];
      }
    };
  }
}

module.exports = LDPoSChainModule;
