export default async (req,res)=>{
    let {method}=req;

    res.json({method})
}