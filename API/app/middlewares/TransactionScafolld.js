import AccountService from '../services/AccountService';

class TransactionScafolld {

    static async transactionScafolld(req, res, next) {
        const scafoldData = req.body;
        scafoldData.Type = req.params.transactionType;
        let accountno = req.params.accountNumber;
        accountno = parseInt(accountno, 10);
        const userdetails = req.userData;
        scafoldData.cashier = userdetails.id;
        scafoldData.accountNumber = accountno;

        const AccountExist = await AccountService.CheckifAccountExist(accountno);
        console.log('accountExist', AccountExist);
        if (AccountExist !== undefined) {
            scafoldData.accountId = AccountExist.id;
            scafoldData.oldbalance = AccountExist.balance;
            if (scafoldData.oldbalance < scafoldData.amount) {
                res.status(400).json({
                    status: 400,
                    data: 'insufficient funds visit the bank !',
                });
            }

            scafoldData.newbalance = scafoldData.Type === 'credit' ? scafoldData.oldbalance + scafoldData.amount : scafoldData.oldbalance - scafoldData.amount;
            await AccountService.patchAccountBalance(scafoldData.newbalance, scafoldData.accountNumber);
            console.log('new balance', scafoldData.newbalance);
            console.log('accountNumber', scafoldData.accountNumber);
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