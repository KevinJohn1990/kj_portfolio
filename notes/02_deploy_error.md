

##### Error

This issue occurs when using git-bash on Windows.

The git-bash sees the last argument of the command- ng build --prod --base-href /candidate/ as a path relative to its binary folder and prepends the argument with that (it converts the "seems-to-be" relative path into an absolute path).

So, I used **PowerShell instead of Git-B**ash and the issue was gone. The base-href parameter is


**open in powershell and deploy or use command prompt**

ng build --output-path docs --base-href /kj_portfolio/

then push to git
