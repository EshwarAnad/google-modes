(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
	typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
	(factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

var e = [/^class(?![a-zA-Z\¡-\￿_0-9])/, /^(?:struct|union)(?![a-zA-Z\¡-\￿_0-9])/, /^namespace(?![a-zA-Z\¡-\￿_0-9])/, /^throw(?![a-zA-Z\¡-\￿_0-9])/, /^try(?![a-zA-Z\¡-\￿_0-9])/, /^asm(?![a-zA-Z\¡-\￿_0-9])/, /^using(?![a-zA-Z\¡-\￿_0-9])/, /^enum(?![a-zA-Z\¡-\￿_0-9])/, /^for(?![a-zA-Z\¡-\￿_0-9])/, /^while(?![a-zA-Z\¡-\￿_0-9])/, /^do(?![a-zA-Z\¡-\￿_0-9])/, /^if(?![a-zA-Z\¡-\￿_0-9])/, /^switch(?![a-zA-Z\¡-\￿_0-9])/, /^(?:break|continue)(?![a-zA-Z\¡-\￿_0-9])/, /^goto(?![a-zA-Z\¡-\￿_0-9])/, /^return(?![a-zA-Z\¡-\￿_0-9])/, /^default(?![a-zA-Z\¡-\￿_0-9])/, /^case(?![a-zA-Z\¡-\￿_0-9])/, /^alignas(?![a-zA-Z\¡-\￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^virtual(?![a-zA-Z\¡-\￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z\¡-\￿_0-9])/, /^catch(?![a-zA-Z\¡-\￿_0-9])/, /^typename(?![a-zA-Z\¡-\￿_0-9])/, /^else(?![a-zA-Z\¡-\￿_0-9])/, /^(?:\:\:|[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]* *\:\:)/, /^export(?![a-zA-Z\¡-\￿_0-9])/, /^template(?![a-zA-Z\¡-\￿_0-9])/, /^(?!(?:new|delete)(?![a-zA-Z\¡-\￿_0-9]))/, /^(?:inline|virtual|explicit)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:register|static|extern|typedef|auto)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z\¡-\￿_0-9])/, /^(?:int|float|double)(?![a-zA-Z\¡-\￿_0-9])/, /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*/, [0, /^[a-zA-Z\¡-\￿_]/, /^[a-zA-Z\¡-\￿_0-9]*/, [5, 282]], /^delete(?![a-zA-Z\¡-\￿_0-9])/, /^new(?![a-zA-Z\¡-\￿_0-9])/, /^sizeof(?![a-zA-Z\¡-\￿_0-9])/, /^this(?![a-zA-Z\¡-\￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z\¡-\￿_0-9])/, /^(?:true|false|null)(?![a-zA-Z\¡-\￿_0-9])/, /^operator(?![a-zA-Z\¡-\￿_0-9])/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, /^\~?[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*/, /^noexcept(?![a-zA-Z\¡-\￿_0-9])/, /^(?:\+\+|\-\-)/, /^[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*(?=\()/, [1, "\n", "\t", " "], /^\@(?:member|param|arg(?:ument)?|module|namespace|typedef)(?![a-zA-Z\¡-\￿_])/, /^\@[a-zA-Z\¡-\￿_]+/, /^[a-zA-Z\¡-\￿_]+/, [0, /^(?!\*\/|\@|\{)/, /^[^]/], /^friend(?![a-zA-Z\¡-\￿_0-9])/];
var nodes = [
  [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
   0, 2],
  [/^[^]/, 0],
  [1, 9, 3],
  [2, 11, 4, {"name":"Statement"}],
  [0, 2,
   0, 1],
  [3, "keyword", e[7], -1,
   3, "keyword", e[15], -1,
   3, "keyword", e[11], -1,
   3, "keyword", e[24], -1,
   3, "keyword", e[8], -1,
   3, "keyword", e[9], -1,
   3, "keyword", e[10], -1,
   3, "keyword", e[13], -1,
   3, "keyword", e[14], -1,
   3, "keyword", e[16], -1,
   3, "keyword", e[17], -1,
   3, "keyword", e[12], -1,
   3, "keyword", e[1], -1,
   3, "keyword", e[38], -1,
   3, "keyword", e[29], -1,
   3, "keyword", e[30], -1,
   3, "type", e[32], -1,
   3, "type", e[33], -1,
   3, "keyword", e[31], -1,
   3, "atom", e[41], -1,
   1, 157, -1,
   3, "number", e[19], -1,
   2, 160, -1, {"name":"string","token":"string"},
   2, 164, -1, {"name":"prefixOp","token":"operator"},
   3, "operator", e[46], -1,
   3, "operator", e[43], -1,
   2, 165, -1, {"name":"comment","token":"comment"},
   3, "keyword", e[2], -1,
   3, "keyword", e[23], -1,
   3, "keyword", e[37], -1,
   3, "keyword", e[36], -1,
   3, "keyword", e[39], -1,
   3, "keyword", e[4], -1,
   3, "keyword", e[22], -1,
   3, "keyword", e[3], -1,
   3, "keyword", e[45], -1,
   3, "keyword", e[5], -1,
   3, "keyword", e[26], -1,
   3, "keyword", e[27], -1,
   3, "keyword", e[0], -1,
   3, "keyword", e[20], -1,
   3, "keyword", e[21], -1,
   3, "keyword", e[53], -1,
   3, "keyword", e[42], -1,
   3, "keyword", e[6], -1,
   3, "keyword", e[18], -1,
   3, "keyword", e[40], -1,
   /^[^]/, -1],
  ["#", 7],
  [/^(?!\/\/|\/\*|\\)./, 7,
   "\\", 8,
   0, -1],
  [/^[^]/, 7],
  [/^[ \t]/, 9,
   "\n", 10,
   2, 165, 9, {"name":"comment","token":"comment"},
   0, -1],
  [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
   0, 9],
  [3, "keyword", e[0], 12,
   3, "keyword", e[1], 12,
   3, "keyword", e[2], 32,
   3, "keyword", e[3], 40,
   3, "keyword", e[4], 44,
   3, "keyword", e[5], 59,
   3, "keyword", e[6], 65,
   2, 171, 73, {"name":"TemplateHead"},
   [7, "constructorAhead"], 75,
   0, 78,
   3, "keyword", e[7], 89,
   3, "keyword", e[8], 93,
   3, "keyword", e[9], 94,
   3, "keyword", e[10], 95,
   3, "keyword", e[11], 119,
   3, "keyword", e[12], 127,
   2, 182, -1, {"name":"Block"},
   3, "keyword", e[13], 131,
   3, "keyword", e[14], 133,
   3, "keyword", e[15], 137,
   3, "keyword", e[1], 141,
   2, 186, 147, {"name":"DeclType"},
   3, "keyword", e[16], 149,
   3, "keyword", e[17], 150,
   [0, /^[a-zA-Z\¡-\￿_]/, /^[a-zA-Z\¡-\￿_0-9]*/, [5, 203]], 149,
   ";", -1,
   1, 204, 155],
  [1, 9, 13],
  [3, "keyword", e[18], 14,
   0, 15],
  [1, 9, 16],
  [1, 9, 17],
  ["(", 18],
  [1, 235, 19],
  [1, 9, 20],
  [1, 9, 21],
  [3, "number", e[19], 22],
  [":", 23,
   0, 24],
  [1, 9, 25],
  [1, 9, 26],
  [1, 9, 27],
  [")", 15],
  [3, "keyword", e[20], 28,
   0, 28],
  [2, 238, -1, {"name":"ClassBody"}],
  [1, 9, 29],
  [3, "keyword", e[21], 30,
   0, 30],
  [1, 9, 31],
  [1, 244, 24],
  [1, 9, 33],
  [1, 235, 34,
   0, 34],
  [1, 9, 35],
  [3, "operator", "=", 36,
   2, 182, -1, {"name":"Block"}],
  [1, 9, 37],
  [1, 157, 38],
  [1, 9, 39],
  [";", -1],
  [1, 9, 41],
  [1, 204, 42],
  [1, 9, 43],
  [";", -1],
  [1, 9, 45],
  [2, 182, 46, {"name":"Block"}],
  [1, 9, 47],
  [3, "keyword", e[22], 48,
   0, -1],
  [1, 9, 49],
  ["(", 50],
  [1, 9, 51],
  [1, 244, 52],
  [1, 9, 53],
  [1, 235, 54,
   0, 54],
  [1, 9, 55],
  [")", 56],
  [1, 9, 57],
  [2, 182, 58, {"name":"Block"}],
  [1, 9, 47],
  [1, 9, 60],
  ["{", 61],
  [1, 9, 62],
  [2, 160, 63, {"name":"string","token":"string"}],
  [1, 9, 64],
  ["}", -1],
  [1, 9, 66],
  [3, "keyword", e[23], 67,
   3, "keyword", e[2], 68,
   0, 68],
  [1, 9, 69],
  [1, 9, 70],
  [1, 244, 71],
  [1, 157, 71],
  [1, 9, 72],
  [";", -1],
  [1, 9, 74],
  [2, 11, -1, {"name":"Statement"}],
  [1, 235, 76],
  [1, 9, 77],
  [2, 255, -1, {"name":"FunctionDef"}],
  [3, "meta", e[25], 79],
  [1, 9, 80],
  [0, 78,
   e[28], 81,
   2, 281, 82, {"name":"qualifiedVariableName","token":"qualified"}],
  [3, "type", e[35], 83],
  [1, 9, 84],
  [1, 9, 85],
  [1, 286, 86,
   ";", -1],
  [1, 301, 87,
   1, 9, 88],
  [1, 9, 84],
  [1, 9, 85],
  [1, 308, -1],
  [1, 9, 90],
  [1, 235, 91,
   0, 91],
  [1, 9, 92],
  [2, 318, -1, {"name":"BlockOf"},
   0, -1],
  [1, 9, 96],
  [1, 9, 97],
  [1, 9, 98],
  ["(", 99],
  [2, 336, 100, {"name":"CondExpr"}],
  [2, 11, 101, {"name":"Statement"}],
  [1, 9, 102],
  [1, 9, 103],
  [1, 9, 104],
  [2, 11, 105, {"name":"Statement"}],
  [2, 11, -1, {"name":"Statement"}],
  [3, "keyword", e[9], 106],
  [1, 9, 107],
  [1, 9, 108],
  [1, 204, 109,
   0, 109],
  [2, 336, 110, {"name":"CondExpr"}],
  [1, 9, 111],
  [1, 9, 112],
  [";", 113],
  [";", -1],
  [1, 9, 114],
  [1, 204, 115,
   0, 115],
  [1, 9, 116],
  [")", 117],
  [1, 9, 118],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 120],
  [2, 336, 121, {"name":"CondExpr"}],
  [1, 9, 122],
  [2, 11, 123, {"name":"Statement"}],
  [1, 9, 124],
  [3, "keyword", e[24], 125,
   0, -1],
  [1, 9, 126],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 128],
  [2, 336, 129, {"name":"CondExpr"}],
  [1, 9, 130],
  [2, 182, -1, {"name":"Block"}],
  [1, 9, 132],
  [";", -1],
  [1, 9, 134],
  [e[34], 135],
  [1, 9, 136],
  [";", -1],
  [1, 9, 138],
  [1, 204, 139,
   0, 139],
  [1, 9, 140],
  [";", -1],
  [1, 9, 142],
  [1, 235, 143,
   0, 143],
  [1, 9, 144],
  [2, 341, 145, {"name":"BlockOf"},
   0, 145],
  [1, 9, 146],
  [";", -1],
  [1, 9, 148],
  [1, 308, -1],
  [1, 9, 151],
  [1, 9, 152],
  [":", 153],
  [1, 204, 149],
  [1, 9, 154],
  [2, 11, -1, {"name":"Statement"}],
  [1, 9, 156],
  [";", -1],
  [0, 158,
   3, "builtin", e[47], -1,
   3, "variable", e[44], -1],
  [3, "meta", e[25], 159],
  [0, 158,
   2, 281, -1, {"name":"qualifiedVariableName","token":"qualified"}],
  [/^(?:(?:L|u8?|U|R)(?=[\'\"]))?/, 161],
  [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
   "\"", 162],
  ["\\", 163,
   [0, /^(?!\")/, /^[^]/], 162,
   "\"", -1],
  [/^[^]/, 162],
  [3, "keyword", e[23], -1,
   /^(?:\+\+|\-\-|\!|\~|\&|\*)/, -1],
  [/^\/\*\*(?!\/)/, 166,
   "/*", 170,
   /^\/\/.*/, -1],
  [0, 167,
   2, 363, 166, {"name":"doccomment.braced"},
   0, 168],
  [e[52], 169],
  [2, 371, 168, {"name":"doccomment.tagGroup"},
   "*/", -1],
  [0, 167,
   0, 166],
  [[0, /^(?!\*\/)/, /^[^]/], 170,
   "*/", -1],
  [3, "keyword", e[26], 172,
   0, 172],
  [1, 9, 173],
  [3, "keyword", e[27], 174],
  [1, 9, 175],
  ["<", 176],
  [1, 9, 177],
  [1, 379, 178],
  [1, 9, 179],
  [">", 180],
  [1, 9, 181],
  [1, 9, -1],
  ["{", 183],
  [1, 9, 184],
  [2, 11, 185, {"name":"Statement"},
   "}", -1],
  [1, 9, 184],
  [0, 187,
   0, 188,
   e[28], 199],
  [3, "keyword", e[29], 189,
   3, "keyword", e[30], 189,
   3, "keyword", e[31], 189],
  [3, "type", e[32], 190],
  [1, 9, 191],
  [1, 9, 192],
  [0, 187,
   0, 193,
   0, 194],
  [0, 188,
   3, "type", e[33], 195,
   0, 195],
  [3, "type", e[32], 196],
  [3, "meta", e[25], 194,
   3, "type", e[34], 195],
  [1, 9, 197],
  [0, 193,
   3, "type", e[33], 195,
   0, 195],
  [1, 301, 198,
   0, -1],
  [1, 9, 197],
  [3, "type", e[35], 200],
  [1, 9, 201],
  [1, 301, 202,
   0, -1],
  [1, 9, 201],
  [e[48], 203,
   /^\:(?!\:)/, -1],
  [3, "keyword", e[36], 205,
   3, "keyword", e[37], 206,
   2, 164, 205, {"name":"prefixOp","token":"operator"},
   3, "keyword", e[38], 205,
   3, "keyword", e[39], 232,
   "[", 212,
   3, "keyword", e[40], 213,
   2, 393, 214, {"name":"ParenExpr"},
   3, "atom", e[41], 232,
   3, "number", e[19], 232,
   2, 160, 232, {"name":"string","token":"string"},
   2, 398, 232, {"name":"BlockOf"},
   1, 157, 232],
  [1, 9, 204],
  [1, 9, 207],
  ["(", 208,
   0, 205],
  [1, 9, 209],
  [1, 204, 210],
  [1, 9, 211],
  [")", 205],
  [1, 9, 215],
  [1, 9, 216],
  [1, 9, 217],
  [1, 408, 218],
  ["<", 219],
  [1, 204, 232,
   0, 232],
  [1, 9, 220],
  [1, 9, 221],
  ["]", 222],
  [1, 244, 223],
  [1, 9, 224],
  [1, 9, 225],
  [2, 255, 232, {"name":"FunctionDef"}],
  [">", 226],
  [1, 9, 227],
  ["(", 228],
  [1, 9, 229],
  [1, 204, 230],
  [1, 9, 231],
  [")", 232],
  [1, 9, 233],
  [1, 286, 234,
   0, -1],
  [1, 9, 233],
  [3, "keyword", e[42], 236,
   0, 237],
  [3, "operator", e[43], -1,
   2, 164, -1, {"name":"prefixOp","token":"operator"}],
  [3, "meta", e[25], 237,
   3, "def", e[44], -1],
  ["{", 239],
  [1, 9, 240],
  [3, "keyword", e[21], 241,
   2, 418, 242, {"name":"ObjectMember"},
   "}", -1],
  [1, 9, 243],
  [1, 9, 240],
  [":", 242],
  [3, "keyword", e[23], 245,
   0, 247],
  [1, 9, 246],
  [1, 244, -1],
  [3, "keyword", e[29], 248,
   3, "keyword", e[30], 248,
   3, "keyword", e[31], 248,
   0, 249,
   0, 250],
  [1, 9, 247],
  [3, "type", e[32], 251],
  [3, "meta", e[25], 250,
   3, "type", e[34], 252],
  [0, 249,
   3, "type", e[33], 252,
   0, 252],
  [1, 9, 253],
  [1, 301, 254,
   0, -1],
  [1, 9, 253],
  [2, 428, 256, {"name":"ParamList"}],
  [1, 9, 257],
  [3, "keyword", e[31], 258,
   /^(?:\&|\&\&)?/, 259],
  [1, 9, 257],
  [1, 9, 260],
  [3, "keyword", e[45], 261,
   3, "keyword", e[3], 262,
   0, 273],
  [1, 9, 263],
  [1, 9, 264],
  ["(", 265,
   0, 273],
  ["(", 266],
  [1, 9, 267],
  [1, 9, 268],
  [1, 204, 269],
  [1, 433, 270],
  [1, 9, 271],
  [1, 9, 272],
  [")", 273],
  [")", 273],
  [1, 9, 274],
  ["->", 275,
   0, 277],
  [1, 9, 276],
  [1, 244, 277],
  [1, 9, 278],
  [2, 439, 279, {"name":"InitializerList"},
   0, 279],
  [1, 9, 280],
  [";", -1,
   2, 182, -1, {"name":"Block"}],
  [3, "variable", e[44], -1],
  [/^(?![a-zA-Z\¡-\￿_0-9])/, 283],
  [1, 9, 284],
  [1, 301, 284,
   1, 9, 285],
  [/^[a-zA-Z\¡-\￿_]/, -1],
  [2, 442, -1, {"name":"ArgList"},
   "[", 287,
   3, "operator", e[46], -1,
   /^(?:\-\>|\.)/, 291,
   3, "operator", e[43], 293,
   "?", 295],
  [1, 9, 288],
  [1, 204, 289],
  [1, 9, 290],
  ["]", -1],
  [1, 9, 292],
  [3, "builtin", e[47], -1,
   3, "property", e[34], -1],
  [1, 9, 294],
  [1, 204, -1],
  [1, 9, 296],
  [1, 204, 297],
  [1, 9, 298],
  [":", 299],
  [1, 9, 300],
  [1, 204, -1],
  [2, 447, -1, {"name":"TemplateArgs"},
   "::", 302,
   "[", 304,
   /^[\*\&]/, -1,
   3, "keyword", e[31], -1],
  [1, 9, 303],
  [1, 244, -1],
  [1, 9, 305],
  [3, "number", e[19], 306,
   0, 306],
  [1, 9, 307],
  ["]", -1],
  [1, 235, 309],
  [1, 9, 310],
  [2, 255, -1, {"name":"FunctionDef"},
   1, 452, 311,
   0, 311],
  [1, 9, 312],
  [",", 313,
   ";", -1],
  [1, 9, 314],
  [1, 235, 315],
  [1, 9, 316],
  [1, 452, 317,
   0, 317],
  [1, 9, 312],
  ["{", 319],
  [1, 9, 320],
  [1, 235, 321,
   0, 334],
  [1, 9, 322],
  [3, "operator", "=", 323,
   0, 324],
  [1, 9, 325],
  [1, 9, 326],
  [1, 204, 324],
  [",", 327,
   0, 334],
  [1, 9, 328],
  [1, 235, 329],
  [1, 9, 330],
  [3, "operator", "=", 331,
   0, 332],
  [1, 9, 333],
  [1, 9, 326],
  [1, 204, 332],
  [1, 9, 335],
  ["}", -1],
  ["(", 337],
  [1, 9, 338],
  [1, 204, 339,
   0, 339],
  [1, 9, 340],
  [")", -1],
  ["{", 342],
  [1, 9, 343],
  [1, 244, 344,
   0, 361],
  [1, 9, 345],
  [3, "property", e[34], 346,
   0, 346],
  [1, 9, 347],
  [":", 348,
   0, 349],
  [1, 9, 350],
  [1, 9, 351],
  [3, "number", e[19], 349],
  [";", 352,
   0, 361],
  [1, 9, 353],
  [1, 244, 354],
  [1, 9, 355],
  [3, "property", e[34], 356,
   0, 356],
  [1, 9, 357],
  [":", 358,
   0, 359],
  [1, 9, 360],
  [1, 9, 351],
  [3, "number", e[19], 359],
  [1, 9, 362],
  ["}", -1],
  ["{", 364],
  [3, "tag", e[49], 365,
   3, "tag", e[50], 366,
   2, 455, 370, {"name":"doccomment.type","token":"type"}],
  [e[48], 365,
   "{", 367,
   0, 366],
  [[0, /^(?!\}|\*\/)/, /^[^]/], 366,
   0, 370],
  [2, 455, 368, {"name":"doccomment.type","token":"type"}],
  ["}", 369],
  [e[48], 369,
   3, "def", e[51], 366,
   0, 366],
  ["}", -1],
  [3, "tag", e[49], 372,
   3, "tag", e[50], 376],
  [e[48], 372,
   "{", 373,
   0, 376],
  [2, 455, 374, {"name":"doccomment.type","token":"type"}],
  ["}", 375],
  [e[48], 375,
   3, "def", e[51], 376,
   0, 376],
  [0, 377,
   2, 363, 376, {"name":"doccomment.braced"},
   0, -1],
  [e[52], 378],
  [0, 377,
   0, 376],
  [1, 456, 380,
   0, 381,
   0, -1],
  [1, 9, 382],
  [3, "keyword", e[29], 383,
   3, "keyword", e[30], 383,
   1, 235, 384],
  [",", 385,
   0, -1],
  [1, 9, 381],
  [1, 9, 386],
  [1, 9, 387],
  [1, 452, 380,
   0, 380],
  [1, 456, 388,
   0, 389],
  [1, 9, 382],
  [3, "keyword", e[29], 390,
   3, "keyword", e[30], 390,
   1, 235, 391],
  [1, 9, 389],
  [1, 9, 392],
  [1, 452, 388,
   0, 388],
  ["(", 394],
  [1, 9, 395],
  [1, 204, 396,
   0, 396],
  [1, 9, 397],
  [")", -1],
  ["{", 399],
  [1, 9, 400],
  [1, 204, 401,
   0, 406],
  [1, 9, 402],
  [",", 403,
   0, 406],
  [1, 9, 404],
  [1, 204, 405],
  [1, 9, 402],
  [1, 9, 407],
  ["}", -1],
  ["&", 409,
   "=", 410,
   3, "keyword", e[39], 410,
   0, -1],
  [1, 9, 411],
  [1, 9, 412],
  [1, 157, 410,
   0, 410],
  [",", 413,
   0, -1],
  [1, 9, 414],
  ["&", 415,
   "=", 416,
   3, "keyword", e[39], 416],
  [1, 9, 417],
  [1, 9, 412],
  [1, 157, 416,
   0, 416],
  [3, "keyword", e[53], 419,
   3, "def", /^\~?[a-zA-Z\¡-\￿_][a-zA-Z\¡-\￿_0-9]*(?= *\()/, 424,
   0, 420],
  [1, 9, 418],
  [3, "keyword", e[29], 421,
   3, "keyword", e[30], 421,
   3, "keyword", e[31], 421,
   1, 244, 422],
  [1, 9, 420],
  [1, 9, 423],
  [1, 235, 424],
  [1, 9, 425],
  [1, 452, 426,
   0, 426,
   2, 255, -1, {"name":"FunctionDef"}],
  [1, 9, 427],
  [";", -1],
  ["(", 429],
  [1, 9, 430],
  [1, 467, 431],
  [1, 9, 432],
  [")", -1],
  [1, 244, 434,
   0, -1],
  [1, 9, 435],
  [",", 436,
   0, -1],
  [1, 9, 437],
  [1, 244, 438],
  [1, 9, 435],
  [":", 440,
   0, -1],
  [1, 9, 441],
  [1, 477, -1],
  ["(", 443],
  [1, 9, 444],
  [1, 483, 445],
  [1, 9, 446],
  [")", -1],
  ["<", 448],
  [1, 9, 449],
  [1, 489, 450],
  [1, 9, 451],
  [">", -1],
  [3, "operator", "=", 453,
   2, 398, -1, {"name":"BlockOf"}],
  [1, 9, 454],
  [1, 204, -1],
  [1, 503, -1],
  [3, "keyword", e[27], 457,
   0, 459],
  [1, 9, 458],
  [2, 447, 459, {"name":"TemplateArgs"}],
  [1, 9, 460],
  [3, "keyword", e[0], 461,
   3, "keyword", e[23], 461],
  [1, 9, 462],
  [1, 235, 463],
  [1, 9, 464],
  [3, "operator", "=", 465,
   0, -1],
  [1, 9, 466],
  [1, 157, -1],
  [1, 244, 468,
   0, -1],
  [1, 9, 469],
  [1, 235, 470,
   0, 470],
  [1, 9, 471],
  [",", 472,
   0, -1],
  [1, 9, 473],
  [1, 244, 474],
  [1, 9, 475],
  [1, 235, 476,
   0, 476],
  [1, 9, 471],
  [1, 507, 478,
   0, -1],
  [1, 9, 479],
  [",", 480,
   0, -1],
  [1, 9, 481],
  [1, 507, 482],
  [1, 9, 479],
  [1, 204, 484,
   0, -1],
  [1, 9, 485],
  [",", 486,
   0, -1],
  [1, 9, 487],
  [1, 204, 488],
  [1, 9, 485],
  [1, 456, 490,
   0, 491,
   0, -1],
  [1, 9, 492],
  [3, "keyword", e[29], 493,
   3, "keyword", e[30], 493,
   1, 244, 494],
  [",", 495,
   0, -1],
  [1, 9, 491],
  [1, 9, 496],
  [1, 9, 497],
  [1, 452, 490,
   0, 490],
  [1, 456, 498,
   0, 499],
  [1, 9, 492],
  [3, "keyword", e[29], 500,
   3, "keyword", e[30], 500,
   1, 244, 501],
  [1, 9, 499],
  [1, 9, 502],
  [1, 452, 498,
   0, 498],
  [/^(?!\}|\*\/)/, 504,
   0, -1],
  ["{", 505,
   /^[^]/, 503],
  [1, 503, 506],
  [/^\}?/, 503],
  [3, "property", e[34], 508],
  [1, 9, 509],
  ["(", 510,
   "{", 511],
  [1, 9, 512],
  [1, 9, 513],
  [1, 483, 514],
  [1, 483, 515],
  [1, 9, 516],
  [1, 9, 517],
  [")", -1],
  ["}", -1]
];
var start = 0;
var token = 5;


var cpp = Object.freeze({
	nodes: nodes,
	start: start,
	token: token
});

function storeLocal(context, name, scopes) {
  for (var cx = context; cx; cx = cx.parent)
    { if (scopes.indexOf(cx.name) > -1)
      { return (cx.locals || (cx.locals = [])).push(name) } }
}
function isLocal(context, name) {
  for (var cx = context; cx; cx = cx.parent)
    { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
  return false
}

function markLocals(type, scopes, stream, state) {
  if (type == "def") { storeLocal(state.context, stream.current(), scopes); }
  else if (type == "variable" && isLocal(state.context, stream.current())) { type = "variable-2"; }
  return type
}

function hasSubStatement(context) {
  var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
  return m && m[1]
}

function isSwitch(context) {
  return context && context.name == "Statement" &&
    /^switch\b/.test(context.startLine.slice(context.startPos))
}

function isLabel(text) {
  return text && /^\s*(case|default)\b/.test(text)
}

function aligned(cx) {
  return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
}

var bracketed = {
  Block: "}", BlockOf: "}", ClassBody: "}", ObjectLiteral: "}", EnumBody: "}", ArrayInitializer: "}",
  ArrayLiteral: "]",
  ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", TemplateArgs: ")", ForSpec: ")",
  TypeParams: ">", TypeArgs: ">"
};

function statementIndent(cx, config) {
  for (;; cx = cx.parent) {
    if (!cx) { return 0 }
    if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem" || cx.name == "NewExpr")
      { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
  }
}

function plus(result, add) {
  return typeof result == "number" ? result + add : result
}

function findIndent(cx, textAfter, curLine, config) {
  if (!cx) { return 0 }
  if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

  var brack = bracketed[cx.name];
  if (brack) {
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (config.align !== false && curLine != cx.startLine && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (cx.name == "Block" || cx.name == "ClassBody" || cx.name == "BlockOf" || cx.name == "EnumBody") {
      // Skip wrapping statement context
      var skipCx = cx;
      if (cx.parent && cx.parent.name == "Statement" && cx.parent.parent &&
          cx.parent.parent.name == "Statement" && hasSubStatement(cx.parent.parent))
        { skipCx = cx.parent.parent; }
      return statementIndent(skipCx, config) + (
        /^(public|private|protected)\s*:/.test(textAfter) ? 1 :
        closed ? 0 :
        isSwitch(cx.parent) && !isLabel(textAfter) ? 2 * config.indentUnit
        : config.indentUnit
      )
    }

    var flat = closed && brack != ")" || curLine == cx.startLine && cx.name != "CondExpr";
    return findIndent(cx.parent, closed ? null : textAfter, cx.startLine, config) +
      (flat ? 0 : config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1))
  } else if (cx.name == "Statement" || cx.name == "ObjectMember" || cx.name == "ClassItem") {
    var base = statementIndent(cx, config);
    if (!curLine && hasSubStatement(cx))
      { return base + (/^else\b/.test(textAfter) ? 0 : config.indentUnit) }
    var flat$1 = curLine == cx.startLine ||
        curLine && CodeMirror.countColumn(curLine, null, config.tabSize) <= base;
    return base + (flat$1 ? 0 : 2 * config.indentUnit)
  } else if (cx.name == "ArrowRest") {
    return plus(findIndent(cx.parent, textAfter, cx.startLine, config), config.indentUnit)
  } else {
    return plus(findIndent(cx.parent, textAfter, curLine, config),
                (cx.name == "InitializerList" ? 2 : cx.name == "ThrowsClause" ? 2 * config.indentUnit : 0))
  }
}

function indent(state, textAfter, line, config) {
  if (textAfter.charAt(0) == "#") { return 0 }
  var top = state.context && state.context.name;
  if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "TemplateHead")
    { return statementIndent(state.context, config) }
  if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^\s*(@|\*\/)/.test(textAfter))
    { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

  return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, null, config)
}

function constructorAhead(line, pos) {
  var match = /^(\w+)::~?(\w+)/.exec(line.slice(pos));
  return match && match[1] == match[2]
}

var scopes = ["Block", "FunctionDef"];

var CppMode = (function (superclass) {
  function CppMode(conf) {
    superclass.call(this, cpp, {
      predicates: {constructorAhead: constructorAhead}
    });
    this.conf = conf;
  }

  if ( superclass ) CppMode.__proto__ = superclass;
  CppMode.prototype = Object.create( superclass && superclass.prototype );
  CppMode.prototype.constructor = CppMode;

  CppMode.prototype.token = function token$$1 (stream, state) {
    return markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state)
  };

  CppMode.prototype.indent = function indent$1 (state, textAfter, line) {
    return indent(state, textAfter, line, this.conf)
  };

  return CppMode;
}(CodeMirror.GrammarMode));

CppMode.prototype.electricInput = /^\s*(?:case .*?:|default:|\{\}?|\})$/;
CppMode.prototype.blockCommentStart = "/*";
CppMode.prototype.blockCommentEnd = "*/";
CppMode.prototype.lineComment = "//";
CppMode.prototype.fold = "brace";

CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
