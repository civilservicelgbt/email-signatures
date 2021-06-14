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

function createSignature(opts) {

	let magenta = ["#e6007e", "#ffffff", "#ffed00", "https://www.civilservice.lgbt/email-signatures/assets/images/pride-on/for-magenta-background.png"]
	let yellow = ["#ffed00", "#000000", "#e6007e", "https://www.civilservice.lgbt/email-signatures/assets/images/pride-on/for-yellow-background.png"]
	let cyan = ["#009fe3", "#ffffff", "#ffed00", "https://www.civilservice.lgbt/email-signatures/assets/images/pride-on/for-cyan-background.png"]

	if (opts == "yellow") {
		var background = yellow[0];
		var text = yellow[1];
		var link = yellow[2]
		var image = yellow[3];
	} else if (opts == "cyan") {
		var background = cyan[0];
		var text = cyan[1];
		var link = cyan[2];
		var image = cyan[3];
	} else {
		var background = magenta[0];
		var text = magenta[1];
		var link = magenta[2];
		var image = magenta[3];
	}

	// Generate the signature
	var signature = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
		<HTML><HEAD><META content="text/html; charset=utf-8" http-equiv="Content-Type"></HEAD><BODY style="font-size:10pt; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
		<table style="font-size:10pt; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; line-height:16pt; width:480px;" width="480" cellpadding="0" cellspacing="0" border="0">
		 <tbody>

			<tr width="480">

				<td width="240" style="line-height: 12pt; font-size: 12pt; background-color:`
				signature += background;

				signature += `;padding:15px 10px; width:240px; vertical-align:bottom; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;" valign="bottom">
					<a href="http://www.civilservice.lgbt/pride" target="_blank" rel="noopener"><img border="0" alt="banner" width="200" style="width:200px; height:auto; border:0; margin: 0;" src="`
					signature += image;

					signature += `"></a>
				</td>

				<td width="240" style="line-height: 12pt; font-size: 12pt; background-color:`
				signature += background;

				signature += `; padding:10px; width:240px; vertical-align:bottom; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif; color:`
				signature += text;

				signature += `" valign="bottom">
					<span style="display:block; font-size: 12pt; line-height: 16pt; color:`
					signature += text;

					signature += `; padding-bottom: 3pt;"><strong>We're keeping Pride On</strong></span>
					<span style="display:block; font-size: 12pt; line-height: 16pt; color:`
					signature += text;

					signature += `;">Get involved at</span>
					<span style="display:block; font-size: 12pt; line-height: 16pt; color:`
					signature += link;

					signature += `; padding-bottom: 3pt;"><strong><a href="https://www.civilservice.lgbt/pride" style="display: inline-block; text-decoration: none; line-height: 10pt; cursor: pointer; color:`
					signature += link;

					signature += `;" target="_blank" rel="noopener">www.civilservice.lgbt/pride</a></strong></span>
				</td>
			</tr>

		 </tbody>
		 </table>
		</BODY>
		</HTML>`;

	return signature;

}



function generatePreview() {
	// Get the options
	var opts = getRadios('sig-colour');

	// Generate the code for the signature
	var signature = createSignature(opts);

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
