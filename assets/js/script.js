function addNavID()
{
	var bodyElement = document.getElementsByTagName("body")[0];
	var wrapperElement = bodyElement.getElementsByClassName("wrapper");
	var sectionElement = wrapperElement.getElementsByTagName("section");

	sectionElement.getElementsByTagName("h2")[0].id = "welcome";
}
