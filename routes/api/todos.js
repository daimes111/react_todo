const express = require("express")
const router = express.Router()
const { data, api} = require("../../controllers/api/todos")

router.get('/', data.index, api.index)
router.delete('/:id', data.destroy, api.show)
router.put('/:id', data.update, api.show)
router.post('/', data.create, api.show)
router.get('/:id', data.showEdit, api.show)

module.exports = router