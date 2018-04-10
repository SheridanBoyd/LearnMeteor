nearleyparser

text_adventure -> rooms
script -> SCRIPT
link -> OPEN_LINK chars CLOSE_LINK
link -> OPEN_LINK chars ALT_TEXT chars CLOSE_LINK
chars -> PRE_TAG
chars -> CHARS
chars -> PREV_LINE
exit -> exit EOL
break -> exit
exit -> EOL
special -> NEW_SPECIAL room_desc_line 
room_desc_line -> room_desc_line special
room_desc_line -> room_desc_line script
room_desc_line -> room_desc_line chars
room_desc_line -> room_desc_line link
room_desc_line -> 
room_desc_line -> special
room_desc -> room_desc break room_desc_line 
room_desc -> room_desc_line
room -> NEW_ROOM chars EOL room_desc break
rooms -> rooms room 
rooms -> room


PRE_TAG -> "~~~" [.\n]+ "~~~" 
OPEN_LINK -> "[["
CLOSE_LINK -> "]]"
ALT_TEXT -> "->"
NEW_ROOM -> "#"
NEW_SPECIAL -> "{?"[ -\|]*"}"
SCRIPT -> "{"[ -\|]*"}"
PREV_LINE -> (\r?\n)+\^
EOL -> \r?\n
CHARS -> ("["(?!"["")|"]"(?!"]")|[^"]""[""{""}""|"\n\r\r\n])+