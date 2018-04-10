room -> room_desc break:?								{% id %}
room_desc -> room_desc break room_desc_line				{% (p) => p[0] + p[1] + p[2] %}
room_desc -> room_desc_line								{% id %}
room_desc_line -> room_desc_line CHAR					{% (p) => p[0] + p[1] %}
room_desc_line -> room_desc_line link 					{% (p) => p[0] + p[1] %}
room_desc_line -> CHAR									{% id %}
room_desc_line -> link 									{% id %}
link -> OPEN_LINK chars CLOSE_LINK						{% (p) => '<button class="game" id="' + String(p[1])+ '">' + String(p[1]) + '</button>' %}
link -> OPEN_LINK chars ALT_TEXT chars CLOSE_LINK		{% (p) => '<button class="game" id="' + String(p[1])+ '">' + String(p[3]) + '</button>' %}
OPEN_LINK -> "[["
CLOSE_LINK -> "]]"
ALT_TEXT -> "|"
chars -> CHAR:+											{% (p) => p[0].join('') %}
CHAR -> [a-zA-Z1-9/\?<>'"\!\-\\\+= \(\)\:\,\.]			{% (p) => p[0] %}
EOL -> [\r\n]											{% (p) => '<br/>' %}
break -> exit											{% id %}
exit -> EOL:+											{% (p) => p[0].join('') %}