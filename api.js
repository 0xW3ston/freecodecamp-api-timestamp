const router = require("express").Router();

router.get("/", (req, res) => {
    const dateObj = new Date();
    res.json({
        "unix": dateObj.getTime(),
        "utc": dateObj.toUTCString()
    })
})

router.get("/:date?", (req, res) => {
    const unixPattern = /^\d+$/
    const date_string = req.params.date;
    let dateObj;

    if (unixPattern.test(date_string))
    {
        dateObj = new Date(parseInt(date_string));

    }
    else
    {
        dateObj = new Date(date_string);
    }

    if (!(dateObj.valueOf()))
    {
        res.json({"error" : "Invalid Date"});
        return;
    }
    
    res.json({
        "unix": dateObj.getTime(),
        "utc": dateObj.toUTCString()
    });
});

module.exports = router;