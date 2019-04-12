
const transactionScafolld = (req, res, next) => {
    const scafoldData = req.body;
    const currentDateTime = new Date();
    scafoldData.createdOn = currentDateTime.toString();
    scafoldData.Transactiontype = req.params.transactionType;
    scafoldData.accountNumber = req.params.accountNumber;
    scafoldData.newBalance = scafoldData.Transactiontype === 'credit' ? scafoldData.oldBalance - scafoldData.amount : scafoldData.oldBalance + scafoldData.amount;
    req.scafoldData = scafoldData;
    console.log('scafolld data :', scafoldData);
    next();
}
export default transactionScafolld;