// Generated automatically by nearley, version 2.13.0
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "room$ebnf$1", "symbols": ["break"], "postprocess": id},
    {"name": "room$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "room", "symbols": ["room_desc", "room$ebnf$1"], "postprocess": id},
    {"name": "room_desc", "symbols": ["room_desc", "break", "room_desc_line"], "postprocess": (p) => p[0] + p[1] + p[2]},
    {"name": "room_desc", "symbols": ["room_desc_line"], "postprocess": id},
    {"name": "room_desc_line", "symbols": ["room_desc_line", "CHAR"], "postprocess": (p) => p[0] + p[1]},
    {"name": "room_desc_line", "symbols": ["room_desc_line", "link"], "postprocess": (p) => p[0] + p[1]},
    {"name": "room_desc_line", "symbols": ["CHAR"], "postprocess": id},
    {"name": "room_desc_line", "symbols": ["link"], "postprocess": id},
    {"name": "link", "symbols": ["OPEN_LINK", "chars", "CLOSE_LINK"], "postprocess": (p) => '<button class="game" id="' + String(p[1])+ '">' + String(p[1]) + '</button>'},
    {"name": "link", "symbols": ["OPEN_LINK", "chars", "ALT_TEXT", "chars", "CLOSE_LINK"], "postprocess": (p) => '<button class="game" id="' + String(p[1])+ '">' + String(p[3]) + '</button>'},
    {"name": "OPEN_LINK$string$1", "symbols": [{"literal":"["}, {"literal":"["}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "OPEN_LINK", "symbols": ["OPEN_LINK$string$1"]},
    {"name": "CLOSE_LINK$string$1", "symbols": [{"literal":"]"}, {"literal":"]"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "CLOSE_LINK", "symbols": ["CLOSE_LINK$string$1"]},
    {"name": "ALT_TEXT", "symbols": [{"literal":"|"}]},
    {"name": "chars$ebnf$1", "symbols": ["CHAR"]},
    {"name": "chars$ebnf$1", "symbols": ["chars$ebnf$1", "CHAR"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "chars", "symbols": ["chars$ebnf$1"], "postprocess": (p) => p[0].join('')},
    {"name": "CHAR", "symbols": [/[a-zA-Z1-9\/\?<>'"\!\-\\\+= \(\)\:\,\.]/], "postprocess": (p) => p[0]},
    {"name": "EOL", "symbols": [/[\r\n]/], "postprocess": (p) => '<br/>'},
    {"name": "break", "symbols": ["exit"], "postprocess": id},
    {"name": "exit$ebnf$1", "symbols": ["EOL"]},
    {"name": "exit$ebnf$1", "symbols": ["exit$ebnf$1", "EOL"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "exit", "symbols": ["exit$ebnf$1"], "postprocess": (p) => p[0].join('')}
]
  , ParserStart: "room"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
