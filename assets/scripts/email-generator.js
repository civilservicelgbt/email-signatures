// ========================== //
// EMAIL GENERATOR
// ========================== //

function generatePreview() {
	// Get the options
	var yourname = "Joan Doe";
	var yourrole = "Volunteer";
	var phonenumber = "07123 123456";
	var emailaddress = "info@civilservice.lgbt";
	
	// Generate the signature
	var signature = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"><HTML><HEAD><TITLE>Civil Serivce LGBT+ Network – Email signature</TITLE><META content="text/html; charset=utf-8" http-equiv="Content-Type"></HEAD><BODY style="font-size:10pt; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
			
	<table style="font-size:12pt; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; line-height:18pt; width:480px;" width="480" cellpadding="0" cellspacing="0" border="0">
	<tbody>`;
	
	signature += `
		<tr>
			
			<td width="240" style="background-color:#ededed; padding:10px; width:240px; vertical-align:top; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;" valign="top">
				<span style="font-size: 14pt; color:#e6007e;"><strong>`
	
	signature += yourname;
	
	signature += `</strong></span>
				<br>
				<span style="color:#1d1d1d;">`
	
	signature += yourrole; 
	
	signature += `</span>
			</td>
			
			<td width="240" style="background-color:#e6007e; padding:12px 10px; width:240px; vertical-align:top; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; color:#f1f1f1; line-height: 15pt;" valign="top">
				<span style=""><strong>Civil Service<br>LGBT+ Network</strong></span>
			</td>
			
		</tr>
		
		<tr>
			
			<td rowspan="2" width="240" style="background-color:#ededed; padding:10px; width:240px; vertical-align:top; line-height: 18pt; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;" valign="top">

				<!-- Phone -->
				<span style="display: inline-block; color:#e6007e; font-size: 10pt; width: 20px; margin-right: 10px; text-align: center;"><strong>☎︎</strong></span>
				<span style="color:#1d1d1d;">`
			
	signature += phonenumber;
	
	signature += `</span>
				<br>
				<!-- Email -->
				<span style="display: inline-block; color:#e6007e; font-size: 10pt; width: 20px; margin-right: 10px;text-align: center;"><strong>@</strong></span>
				<span style="color:#1d1d1d;"><a href="mailto:`
	
	signature += emailaddress;
	
	signature += `" style="color: #1d1d1d">`
	
	signature += emailaddress; 
	
	signature += `</a></span>
	
				<br>
				<!-- Website -->
				<span style="display: inline-block; color:#e6007e; font-size: 5pt; width: 20px; margin-right: 10px;text-align: center; vertical-align: middle;"><strong>www</strong></span>
				<span style="color:#1d1d1d;"><a href="//www.civilservice.lgbt" target="_blank" rel="noopener" style="color: #1d1d1d">www.civilservice.lgbt</a></span><br>

				<br>
				<!-- Twitter -->
				<span style="display: inline-block; color:#e6007e; font-size: 10pt; width: 20px; margin-right: 10px;text-align: center; vertical-align: middle;"><strong>tw</strong></span>
				<span style="color:#1d1d1d;"><a href="//twitter.com/cslgbt" target="_blank" rel="noopener" style="color: #1d1d1d">@cslgbt</a></span>
				
				<br>
				<!-- Facebook -->
				<span style="display: inline-block; color:#e6007e; font-size: 10pt; width: 20px; margin-right: 10px;text-align: center; vertical-align: middle;"><strong>fb</strong></span>
				<span style="color:#1d1d1d;"><a href="//facebook.com/civilservicelgbt" target="_blank" rel="noopener" style="color: #1d1d1d">/civilservicelgbt</a></span>
				
				<br>
				<!-- Instagram -->
				<span style="display: inline-block; color:#e6007e; font-size: 10pt; width: 20px; margin-right: 10px;text-align: center; vertical-align: middle;"><strong>in</strong></span>
				<span style="color:#1d1d1d;"><a href="//instagram.com/civilservicelgbt" target="_blank" rel="noopener" style="color: #1d1d1d">@civilservicelgbt</a></span>
				
			</td>
			
			<td width="240" style="background-color:#e6007e; padding:25px 10px 10px; width:240px; vertical-align:top; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; color:#f1f1f1;" valign="top">
				<a href="http://www.civilservice.lgbt/pride-on" target="_blank" rel="noopener"><img border="0" alt="banner" width="200" style="width:200px; height:auto; border:0;" src="http://localhost:57281/pride-2021.png?raw=true"></a> 
			</td>
			
		</tr>
	
		<tr>
			
			<td width="240" style="background-color:#e6007e; padding:10px; width:240px; vertical-align:bottom; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; color:#f1f1f1;" valign="bottom">
				<strong>We're keeping Pride On</strong>
				<br>
				<span class="line-height: 12pt;">Get involved at
				<strong><a href="https://www.civilservice.lgbt/pride" style="display: inline-block; text-decoration: none; line-height: 12pt; cursor: pointer; color:#ffed00;" target="_blank" rel="noopener">www.civilservice.lgbt/pride</a></strong></span>
			</td>
			
		</tr>
		
	</tbody>
	</table>
</BODY></HTML>`;
	
	
	
	// Do something with the options
	
	// Update the preview
	var parsedoutput = document.getElementById("parsed-output");
	parsedoutput.innerHTML = signature;
	// Update the raw HTML output
	var textarea = document.getElementById("html-output");
	textarea.innerHTML = signature;
}

function copySignature(el) {
	// Check the output format
	
	// Get the content of the block
	var clipboardContent = document.getElementById(el);
	// OR get the content of the textarea
	var clipboardContent = document.getElementById(el);
	
	// Copy to the clipboard
	
	navigator.clipboard.writeText(clipboardContent);
}