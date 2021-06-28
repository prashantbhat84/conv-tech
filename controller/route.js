exports.hc = (req, res, next) => {




    if (req.body.healthCardNumber === undefined || req.body.versionCode === undefined || req.body.documentNumberIndicator === undefined || req.body.dateOfBirth === undefined || req.body.postalCode === undefined) {
        return res.status(400).json({ status: 400, Success: "false", result: "One or more  required params is not sent" })
    }

    res.status(200).json({ status: 200, message: "Succeed Message" })
}
exports.hc1 = (req, res, next) => {
    res.status(200).json({ status: 200, message: "Success Response" })
}