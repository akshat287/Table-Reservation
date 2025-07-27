const {getstatus,setlock,unlock}=require('../utils/lockstore');
exports.setlock=(req,res)=>{
    const{tableId,userId,duration}=req.body;
    const exist=getstatus(tableId);
    if(exist && exist.userId!==userId){
        return res.status(409).json({success:false,message:"table is locked"});
    }

    setlock(tableId,userId,duration);
    return res.status(200).json({success:true,message:"table booked successfully!!"});
};

exports.unlockTable=(req,res)=>{
    const{tableId,userId}=req.body;
    const sucess=unlock(tableId,userId);
    if(sucess){
        return res.status(200).json({success:true,message:"table Unlocked"});
    }
    else{
        return res.status(403).json({success:false,message:"Unauthorized access"});
    }
};

exports.getTableStatus=(req,res)=>{
    const{tableId}=req.params;
    const lock=getstatus(tableId);
    const isLocked=!!lock;

    return res.status(200).json({isLocked});
};