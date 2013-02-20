/**
 * Inverse the sign of a value. -x or unaryminus(x)
 * @param  {Number | Complex | Unit} x
 * @return {Number | Complex | Unit} res
 */
function unaryminus(x) {
    if (isNumber(x)) {
        return -x;
    }
    else if (x instanceof Complex) {
        return new Complex(
            -x.re,
            -x.im
        );
    }
    else if (x instanceof Unit) {
        var res = x.copy();
        res.value = -x.value;
        return res;
    }

    // TODO: implement array support
    // TODO: implement matrix support

    throw newUnsupportedTypeError('unaryminus', x);
}

math.unaryminus = unaryminus;

/**
 * Function documentation
 */
unaryminus.doc = {
    'name': 'unaryminus',
    'category': 'Operators',
    'syntax': [
        '-x',
        'unaryminus(x)'
    ],
    'description':
        'Inverse the sign of a value.',
    'examples': [
        '-4.5',
        '-(-5.6)'
    ],
    'seealso': [
        'add', 'subtract'
    ]
};