conts d=document;
export default funtion contactFormValidations(){
	conts.$form=d.querySelector(".contact-form"),
	$inputs=d.querySelectorAll(".contact-form[required]");
	console.log($inputs);
}