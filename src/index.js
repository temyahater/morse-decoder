const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var str = "";
    for(var i=0; i < expr.length / 10;i++)
    {
        var pos = i*10;
        var char = "";
        if(expr[pos]!="*")
        {
        for(var j=0;j<5;j++)
        {
            var rp = pos+j*2;
            if(expr[rp]+expr[rp+1]=="10") char+=".";
            else
            if(expr[rp]+expr[rp+1]=="11") char+="-";
        }
        str+=MORSE_TABLE[char];
    } else
        str+=" ";
    }
return str;
}

module.exports = {
    decode
}