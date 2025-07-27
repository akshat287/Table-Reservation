const locks={};

const isExpired =(expiry)=>Date.now()>expiry;

const getstatus=(tableId)=>{
    const lock=locks[tableId];
    if(!lock)return null;
    if(isExpired(lock.expiry)){
        delete locks[tableId];
        return null;
    }
    return lock
};

const setlock=(tableId, userId, duration)=>{
    const expiry=Date.now()+duration*1000;
    locks[tableId]={userId,expiry};
};

const unlock=(tableId,userId)=>{
    const lock=locks[tableId];
    if(lock && lock.userId===userId){
        delete locks[tableId];
        return true;
    }
    return false;
};

module.exports={getstatus,setlock,unlock};