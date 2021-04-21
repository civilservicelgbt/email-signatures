// ========================== //
// EMAIL GENERATOR
// ========================== //

function getField(el) {
	var content = document.getElementById(el).value;
	return content;
}

function getRadios(el) {
	var radios = document.getElementsByName(el);
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].checked) {
		  // do whatever you want with the checked radio
		  value = radios[i].value;
		  // only one radio can be logically checked, don't check the rest
		  break;
		}
	}
	return value;
}

function SignatureDefault(name, role, phone, email) {
	
	// Get fields
	var yourname = name;
	var yourrole = role;
	var phonenumber = phone;
	var emailaddress = email;
	
	// Generate the signature
	var signature = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"><HTML><HEAD><META content="text/html; charset=utf-8" http-equiv="Content-Type"></HEAD><BODY style="font-size:10pt; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
			
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
			
			<td width="240" style="background-color:#ededed; padding:10px; width:240px; vertical-align:bottom; line-height: 18pt; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;" valign="bottom">

				<!-- Phone -->
				<span style="display: block; float: left; width: 5ch;  color:#e6007e; margin-right: 10px; text-align: left; vertical-align: middle;"><strong>tel</strong></span>
				<span style="color:#1d1d1d; text-align: left; vertical-align: middle;">`
			
	signature += phonenumber;
	
	signature += `</span>
				<br>
				<!-- Email -->
				<span style="display: block; float: left; width: 5ch; color:#e6007e; margin-right: 10px; text-align: left;"><strong>@</strong></span>
				<span style="color:#1d1d1d;"><a href="mailto:`
	
	signature += emailaddress;
	
	signature += `" style="color: #1d1d1d">`
	
	signature += emailaddress; 
	
	signature += `</a></span>
	
				<br>
				<!-- Website -->
				<span style="display: block; float: left; width: 5ch; color:#e6007e; margin-right: 10px; text-align: left; vertical-align: middle;"><strong>web</strong></span>
				<span style="color:#1d1d1d;"><a href="//www.civilservice.lgbt" target="_blank" rel="noopener" style="color: #1d1d1d">www.civilservice.lgbt</a></span><br>

				<br>
				<!-- Twitter -->
				<span style="display: block; float: left; width: 5ch; color:#e6007e; margin-right: 10px; text-align: left; vertical-align: middle;"><strong>tw</strong></span>
				<span style="color:#1d1d1d;"><a href="//twitter.com/cslgbt" target="_blank" rel="noopener" style="color: #1d1d1d">@cslgbt</a></span>
				
				<br>
				<!-- Facebook -->
				<span style="display: block; float: left; width: 5ch; color:#e6007e; margin-right: 10px; text-align: left; vertical-align: middle;"><strong>fb</strong></span>
				<span style="color:#1d1d1d;"><a href="//facebook.com/civilservicelgbt" target="_blank" rel="noopener" style="color: #1d1d1d">/civilservicelgbt</a></span>
				
				<br>
				<!-- Instagram -->
				<span style="display: block; float: left; width: 5ch; color:#e6007e; margin-right: 10px; text-align: left; vertical-align: middle;"><strong>in</strong></span>
				<span style="color:#1d1d1d;"><a href="//instagram.com/civilservicelgbt" target="_blank" rel="noopener" style="color: #1d1d1d">@civilservicelgbt</a></span>
				
			</td>
			
			<td width="240" style="line-height: 15pt; font-size: 11pt; background-color:#e6007e; padding:10px; width:240px; vertical-align:bottom; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; color:#f1f1f1;" valign="bottom">
				<strong>We're helping to create a more diverse, inclusive and equal place to work for lesbian, gay, bisexual and trans civil servants.</strong>
				<br>
				<br>
				<span>Find out more at</span>
				<br>
				<span><strong><a href="https://www.civilservice.lgbt" style="text-decoration: none; cursor: pointer; color:#ffed00;" target="_blank" rel="noopener">www.civilservice.lgbt</a></strong></span>
			</td>
			
		</tr>
		
	</tbody>
	</table>
</BODY></HTML>`;

	return signature;
	
}

function SignaturePrideOn(name, role, phone, email) {
	
	// Get fields
	var yourname = name;
	var yourrole = role;
	var phonenumber = phone;
	var emailaddress = email;
	
	// Generate the signature
	var signature = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"><HTML><HEAD><META content="text/html; charset=utf-8" http-equiv="Content-Type"></HEAD><BODY style="font-size:10pt; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
			
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
			
			<td rowspan="2" width="240" style="background-color:#ededed; padding:10px; width:240px; vertical-align:bottom; line-height: 18pt; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;" valign="bottom">

				<!-- Phone -->
				<span style="display: block; float: left; width: 5ch;  color:#e6007e; margin-right: 10px; text-align: left; vertical-align: middle;"><strong>tel</strong></span>
				<span style="display: block; float: left; width: 5ch; color:#1d1d1d; text-align: left; vertical-align: middle;">`
			
	signature += phonenumber;
	
	signature += `</span>
				<br>
				<!-- Email -->
				<span style="display: block; float: left; width: 5ch; color:#e6007e; margin-right: 10px; text-align: left;"><strong>@</strong></span>
				<span style="color:#1d1d1d;"><a href="mailto:`
	
	signature += emailaddress;
	
	signature += `" style="color: #1d1d1d">`
	
	signature += emailaddress; 
	
	signature += `</a></span>

				<br>
				<!-- Website -->
				<span style="display: block; float: left; width: 5ch; color:#e6007e; margin-right: 10px; text-align: left; vertical-align: middle;"><strong>web</strong></span>
				<span style="color:#1d1d1d;"><a href="//www.civilservice.lgbt" target="_blank" rel="noopener" style="color: #1d1d1d">www.civilservice.lgbt</a></span><br>
			
				<br>
				<!-- Twitter -->
				<span style="display: block; float: left; width: 5ch; color:#e6007e; margin-right: 10px; text-align: left; vertical-align: middle;"><strong>tw</strong></span>
				<span style="color:#1d1d1d;"><a href="//twitter.com/cslgbt" target="_blank" rel="noopener" style="color: #1d1d1d">@cslgbt</a></span>
				
				<br>
				<!-- Facebook -->
				<span style="display: block; float: left; width: 5ch; color:#e6007e; margin-right: 10px; text-align: left; vertical-align: middle;"><strong>fb</strong></span>
				<span style="color:#1d1d1d;"><a href="//facebook.com/civilservicelgbt" target="_blank" rel="noopener" style="color: #1d1d1d">/civilservicelgbt</a></span>
				
				<br>
				<!-- Instagram -->
				<span style="display: block; float: left; width: 5ch; color:#e6007e; margin-right: 10px; text-align: left; vertical-align: middle;"><strong>in</strong></span>
				<span style="color:#1d1d1d;"><a href="//instagram.com/civilservicelgbt" target="_blank" rel="noopener" style="color: #1d1d1d">@civilservicelgbt</a></span>
				
			</td>
			
			<td width="240" style="background-color:#e6007e; padding:20px 10px 0px; width:240px; vertical-align:top; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; color:#f1f1f1;" valign="top">
				<a href="http://www.civilservice.lgbt/pride-on" target="_blank" rel="noopener"><img border="0" alt="banner" width="200" style="width:200px; height:auto; border:0;" src="https://www.civilservice.lgbt/email-signatures/assets/images/pride-2021.png"></a> 
			</td>
			
		</tr>
	
		<tr>
			
			<td width="240" style="line-height: 15pt; background-color:#e6007e; padding:10px; width:240px; vertical-align:bottom; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; color:#f1f1f1;" valign="bottom">
				<strong>We're keeping Pride On</strong>
				<br>
				<span>Get involved at</span>
				<br>
				<span><strong><a href="https://www.civilservice.lgbt/pride" style="text-decoration: none; cursor: pointer; color:#ffed00;" target="_blank" rel="noopener">www.civilservice.lgbt/pride</a></strong></span>
			</td>
			
		</tr>
		
	</tbody>
	</table>
</BODY></HTML>`;

	return signature;
	
}



function generatePreview() {
	// Get the options
	var format = getRadios('sig-format');
	
	// Get fields
	var yourname = getField('sig-name');
	var yourrole = getField('sig-role');
	var phonenumber = getField('sig-number');
	var emailaddress = getField('sig-email');
	
	// Generate the code for the signature
	if (format == "default") {
		var signature = SignatureDefault(yourname, yourrole, phonenumber, emailaddress);
	}
	if (format == "PrideOn2021") {
		var signature = SignaturePrideOn(yourname, yourrole, phonenumber, emailaddress);
	}
	
	// Update the preview
	var parsedoutput = document.getElementById("email-signature-block");
	parsedoutput.innerHTML = signature;
	// Update the raw HTML output
	var textarea = document.getElementById("html-output");
	textarea.value = signature;
}

function copyToClip(str) {
	function listener(e) {
		e.clipboardData.setData("text/html", str);
		e.clipboardData.setData("text/plain", str);
		e.preventDefault();
	}
	document.addEventListener("copy", listener);
	document.execCommand("copy");
	document.removeEventListener("copy", listener);
};

function copySignature() {
	// Generate preview
	generatePreview()
	
	// Check the output format
	var sigOutput = getRadios('sig-output');
	
	if (sigOutput == "parsed") {
		// Get the parsed block;
		var clipboardContent = document.getElementById('email-signature-block').outerHTML;
		// Copy to the clipboard
	} else if (sigOutput == "html") {
		// OR Get the textarea content instead
		var clipboardContent = document.getElementById('html-output');
		var clipboardContent = clipboardContent.value;
		// // Copy to the clipboard
		// navigator.clipboard.writeText(clipboardContent);
	}
	var clipboardContent = [
		new ClipboardItem(
			{ 
				"text/html": new Blob(
					[clipboardContent], { 
						type: "text/html" 
					}
				) 
			}
		)
	];
	
	
	
	
	navigator.clipboard.write(clipboardContent).then(function() {
	  console.log("Copied to clipboard successfully!");
	}, function() {
	  console.error("Unable to write to clipboard. :-(");
	});
}