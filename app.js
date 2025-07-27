const express=require('express');
const app=express();
const tableRoutes=require('./routes/tableRoutes');

app.use(express.json());

const PORT=3000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));

app.use('/api/tables',tableRoutes);

module.exports=app;