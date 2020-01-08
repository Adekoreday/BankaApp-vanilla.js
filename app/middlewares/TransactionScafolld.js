import AccountService from '../services/AccountService';

class TransactionScafolld {

    static async transactionScafolld(req, res, next) {
        const scafoldData = {};
        scafoldData.amount = parseInt(req.body.amount, 10);
        scafoldData.Type = req.params.transactionType.toString();
        let accountno = req.params.accountNumber;
        accountno = parseInt(accountno, 10);
        const userdetails = req.userData;
        scafoldData.cashier = userdetails.id;
        scafoldData.accountNumber = accountno;

        const AccountExist = await AccountService.CheckifAccountExist(accountno);
        if (AccountExist !== undefined) {
            scafoldData.accountId = AccountExist.id;
            scafoldData.oldbalance = AccountExist.balance;
            if (Math.sign(scafoldData.amount) === -1) {
              return res.status(400).json({
                    status: 400,
                    data: 'do not enter negative numbers!',
                });
            }
            if( scafoldData.Type === 'debit' && scafoldData.oldbalance < scafoldData.amount) {
                  return res.status(400).json({
                    status: 400,
                    data: 'insufficient funds visit the bank',
                });
            }
            scafoldData.newbalance = scafoldData.Type === 'credit' ? scafoldData.oldbalance + scafoldData.amount : scafoldData.oldbalance - scafoldData.amount;
            await AccountService.patchAccountBalance(scafoldData.newbalance, scafoldData.accountNumber);
            req.scafoldData = scafoldData;
            next();
        }
        if (AccountExist === undefined) {
            return res.status(404).json({
                status: 404,
                data: 'account not found',
            });
        }
    }
}

export default TransactionScafolld;