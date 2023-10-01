import  inquirer from "inquirer";

inquirer.prompt(
	message:"Type in your URL:",
	name: "URL",
	},]
	).then((answers)=>{
	cont url = answers.URL;
	var qr_svg = qr.image(url);
	qr_svg.pipe(fs.createWriteSream("qr_img.png");
	}).catch((err)=>{
	if(err.isTtyError){
	}else{
	}
	});
