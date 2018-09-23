function addNavID()
{
	var bodyElement = document.getElementsByTagName("body")[0];
	var wrapperElement = bodyElement.getElementsByClassName("wrapper");
	var sectionElement = wrapperElement[0].getElementsByTagName("section")[0];

	sectionElement.getElementsByTagName("h2")[0].id = "welcome";
}

for (var i = 0; i < 10; i++)
{
	addNavID();
}
addNavID();
