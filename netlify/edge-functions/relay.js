const _0xTGT = (Netlify['env']['get']('\x54\x41\x52\x47\x45\x54\x5f\x44\x4f\x4d\x41\x49\x4e') || '')['replace'](/\/$/, '');

const _0xSHArr = [
    '\x68\x6f\x73\x74', '\x63\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e', '\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65', 
    '\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x68\x65\x6e\x74\x69\x63\x61\x74\x65', '\x70\x72\x6f\x78\x79\x2d\x61\x75\x74\x68\x6f\x72\x69\x7a\x61\x74\x69\x6f\x6e', 
    '\x74\x65', '\x74\x72\x61\x69\x6c\x65\x72', '\x74\x72\x61\x6e\x73\x66\x65\x72\x2d\x65\x6e\x63\x6f\x64\x69\x6e\x67', 
    '\x75\x70\x67\x72\x61\x64\x65', '\x66\x6f\x72\x77\x61\x72\x64\x65\x64', '\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x68\x6f\x73\x74', 
    '\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x70\x72\x6f\x74\x6f', '\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x70\x6f\x72\x74'
];
const _0xSH = new Set(_0xSHArr);

export default async function _0xHndlr(_0xReq) {
    if (!_0xTGT) {
        return new Response('\x4d\x69\x73\x63\x6f\x6e\x66\x69\x67\x75\x72\x65\x64\x3a\x20\x54\x41\x52\x47\x45\x54\x5f\x44\x4f\x4d\x41\x49\x4e\x20\x69\x73\x20\x6e\x6f\x74\x20\x73\x65\x74', { 'status': 0x1f4 });
    }

    try {
        const _0xU = new URL(_0xReq['url']);
        const _0xTUrl = _0xTGT + _0xU['pathname'] + _0xU['search'];
        const _0xHds = new Headers();
        let _0xcIp = null;

        for (const [_0xK, _0xV] of _0xReq['headers']) {
            const _0xkL = _0xK['toLowerCase']();
            
            if (_0xSH['has'](_0xkL) || _0xkL['startsWith']('\x78\x2d\x6e\x66\x2d') || _0xkL['startsWith']('\x78\x2d\x6e\x65\x74\x6c\x69\x66\x79\x2d')) {
                continue;
            }
            
            if (_0xkL === '\x78\x2d\x72\x65\x61\x6c\x2d\x69\x70') {
                _0xcIp = _0xV;
                continue;
            }
            
            if (_0xkL === '\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x66\x6f\x72') {
                _0xcIp = _0xcIp || _0xV;
                continue;
            }
            
            _0xHds['set'](_0xkL, _0xV);
        }

        if (_0xcIp) {
            _0xHds['set']('\x78\x2d\x66\x6f\x72\x77\x61\x72\x64\x65\x64\x2d\x66\x6f\x72', _0xcIp);
        }

        const _0xMthd = _0xReq['method'];
        const _0xFBdy = !['\x47\x45\x54', '\x48\x45\x41\x44']['includes'](_0xMthd);

        const _0xFo = {
            'method': _0xMthd,
            'headers': _0xHds,
            'redirect': '\x6d\x61\x6e\x75\x61\x6c'
        };

        if (_0xFBdy) {
            _0xFo['body'] = _0xReq['body'];
        }

        const _0xUps = await fetch(_0xTUrl, _0xFo);
        const _0xRhd = new Headers();

        for (const [_0xRk, _0xRv] of _0xUps['headers']) {
            if (_0xRk['toLowerCase']() === '\x74\x72\x61\x6e\x73\x66\x65\x72\x2d\x65\x6e\x63\x6f\x64\x69\x6e\x67') continue;
            _0xRhd['set'](_0xRk, _0xRv);
        }

        return new Response(_0xUps['body'], {
            'status': _0xUps['status'],
            'headers': _0xRhd
        });

    } catch (_0xErr) {
        return new Response('\x42\x61\x64\x20\x47\x61\x74\x65\x77\x61\x79\x3a\x20\x52\x65\x6c\x61\x79\x20\x46\x61\x69\x6c\x65\x64', { 'status': 0x1f6 });
    }
}
