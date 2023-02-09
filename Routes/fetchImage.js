const { response } = require('express')
const express=require('express')
const { Configuration, OpenAIApi } = require("openai");
const router=express.Router()

const configuration=new Configuration({
	apiKey:process.env.OPENAI_API_KEY
})

const openai=new OpenAIApi(configuration)


router.post('/fetchimage',async(req,res)=>{   
	const {prompt}=req.body
    try {
		const response = await openai.createImage({
			prompt,
			n: 10,
			size: "1024x1024",
		  });
		  image = response.data;
        res.status(200).json({message:"success",image})
} catch (error) {
	res.status(500).json({ message: "error",error:"Internal server error"})
}
})


module.exports=router