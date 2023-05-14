const Policy = require('../modeles/policy')

// getpolicy
exports.getpolicy = async (req, res) => {
    try {
        const data = await Policy.find()
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// postpolicy
exports.postpolicy = async (req, res) => {
    try {
        const data = await Policy.create(req.body)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

// putpolicy
exports.putpolicy = async (req, res) => {
    try {
        const data = await Policy.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}

//deletepolicy
exports.deletepolicy = async (req, res) => {
    try {
        const data = await Policy.findByIdAndDelete(req.params.id)
        return res.json({ errors: false, data: data })
    } catch (error) {
        return res.status(400).json({ errors: true, message: error.message })
    }
}
