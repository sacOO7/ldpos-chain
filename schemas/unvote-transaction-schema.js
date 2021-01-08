const {
  validateWalletAddress
} = require('./primitives');

function validateUnvoteTransactionSchema(transaction, networkSymbol) {
  if (!transaction) {
    throw new Error('Unvote transaction was not specified');
  }
  validateWalletAddress(transaction.delegateAddress, networkSymbol);

  return ['delegateAddress'];
}

module.exports = {
  validateUnvoteTransactionSchema
};
