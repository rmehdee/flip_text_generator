function flipped() {
var result = flipText(document.getElementById('t1').value);
document.getElementById('f1').value = result;
}
function flipText(text) {
text = text.toLowerCase();
var last = text.length - 1;
var result = "";
for (var i = last; i >= 0; --i) {
result += flippedText(text.charAt(i))
}

return result;
}

function flippedText(c) {
if (c == 'a') {
return '\u0250'
}
else if (c == 'b') {
return 'q'
}
else if (c == 'c') {
return '\u0254'
}
else if (c == 'd') {
return 'p'
}
else if (c == 'e') {
return '\u01DD'
}
else if (c == 'f') {
return '\u025F'
}
else if (c == 'g') {
return '\u0183'
}
else if (c == 'h') {
return '\u0265'
}
else if (c == 'i') {
return '\u0131'
}
else if (c == 'j') {
return '\u027E'
}
else if (c == 'k') {
return '\u029E'
}
else if (c == 'l') {
return 'l'
}
else if (c == 'm') {
return '\u026F'
}
else if (c == 'n') {
return 'u'
}
else if (c == 'o') {
return 'o'
}
else if (c == 'p') {
return 'd'
}
else if (c == 'q') {
return 'b'
}
else if (c == 'r') {
return '\u0279'
}
else if (c == 's') {
return 's'
}
else if (c == 't') {
return '\u0287'
}
else if (c == 'u') {
return 'n'
}
else if (c == 'v') {
return '\u028C'
}
else if (c == 'w') {
return '\u028D'
}
else if (c == 'x') {
return 'x'
}
else if (c == 'y') {
return '\u028E'
}
else if (c == 'z') {
return 'z'
}
else if (c == '[') {
return ']'
}
else if (c == ']') {
return '['
}
else if (c == '(') {
return ')'
}
else if (c == ')') {
return '('
}
else if (c == '{') {
return '}'
}
else if (c == '}') {
return '{'
}
else if (c == '?') {
return '\u00BF'
}
else if (c == '\u00BF') {
return '?'
}
else if (c == '!') {
return '\u00A1'
}
else if (c == "\'") {
return ','
}
else if (c == ',') {
return "\'"
}
else if (c == '.') {
return '\u02D9'
}
else if (c == '_') {
return '\u203E'
}
else if (c == ';') {
return '\u061B'
}
return c;
}
