let sectionOneText = "Blah blah blah columbus jamestown hehehehe pilgrims"

export default (req, res) => {
    if (req.method === 'POST') {
       sectionOneText = req.body.sectionOneText
       console.log(sectionOneText)
    }

    res.statusCode = 200
    res.json({ sectionOneText: sectionOneText })
}
