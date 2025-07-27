const express=require('express');
const router=express.Router();
const { setlock, unlockTable, getTableStatus } = require("../controllers/tableController");

router.post('/lock', setlock);
router.post('/unlock', unlockTable);
router.get('/:tableId/status', getTableStatus);

module.exports=router;
