const router = require("express").Router();

router.get("/:date", (req, res) => {
    const datePattern = /^\d{4}-\d{1,2}-\d{1,2}$/;
    const unixPattern = /^\d+$/
    const date_string = req.params.date;
    let dateObj;

    if (!datePattern.test(date_string) && !unixPattern.test(date_string))
    {
        res.json({error : "Invalid Date"});
        return;
    }

    if (datePattern.test(date_string))
    {
        dateObj = new Date(date_string);

    }
    else
    {
        dateObj = new Date(parseInt(date_string));
    }

    if (!(dateObj.valueOf()))
    {
        res.json({error : "Invalid Date"});
        return;
    }
    
    res.json({
        unix: dateObj.valueOf(),
        utc: dateObj.toUTCString()
    });
});

module.exports = router;