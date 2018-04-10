// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "main", "symbols": ["A"], "postprocess": id},
    {"name": "A", "symbols": [{"literal":"a"}], "postprocess": (_) => '(end a)'},
    {"name": "A", "symbols": [{"literal":"a"}, "A"], "postprocess": (p) => '(continued a)' + p[1]}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
