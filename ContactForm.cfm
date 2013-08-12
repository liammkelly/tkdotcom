<cfmail from="contact@talkelly.com" to="talkelly@gmail.com" cc="liammkelly@gmail.com" subject="Contact from TalKelly.com" server="mail.tallkellys.com" failto="lwfamail@tallkellys.com" password="Wan99ker" username="lwfamail@tallkellys.com" type="html">
	<html><head><style>body{font:12px verdana;}</style></head><body>
		<ul>
			<li>Name: #url.name#</li>
			<li>Email: <a href="mailto:#url.email#">#url.email#</a></li>
		</ul>	
		Message: #url.message#
	</body></html>		
</cfmail>