function addNavID()
{
	if (document.body)
	{
		var wrapperElement = document.body.getElementsByClassName("wrapper")[0];
		var sectionElement = wrapperElement.getElementsByTagName("section")[0];

		sectionElement.getElementsByTagName("h2")[0].id = "welcome";
	}
}


var loopingNav = setInterval(addNavID, 100);
setTimeout(clearInterval(loopingNav), 205);
