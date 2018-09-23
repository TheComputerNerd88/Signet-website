function addNavID()
{
	var bodyElement = document.getElementsByTagName("body")[0];
	var wrapperElement = bodyElement.getElementsByClassName("wrapper")[0];
	var sectionElement = wrapperElement.getElementsByTagName("section")[0];

	sectionElement.getElementsByTagName("h2")[0].id = "welcome";
}

for (var i = 0; i < 10; i++)
{
	addNavID();
}
addNavID();
