
//window._0x1a2b = _0x1a2b;

window._0x3c4d = {a:1,i:1,u:1,e:1,o:1};
window._0x5e6f = {b:18,c:3,d:6,f:11,g:17,h:1,j:13,k:5,l:10,m:16,n:2,p:11,q:5,r:4,s:8,t:7,v:11,w:9,y:14,z:13};
window._0x7a8b = {dh:6,dj:12,dz:12,kh:5,ng:20,ny:15,sh:8,sy:8,th:19};

function _0x9c0d(_0x11aa) {
  if ("number" != typeof _0x11aa || isNaN(_0x11aa) || _0x11aa < 0) {
    return { status: "error", pesan: "Input harus berupa angka positif yang valid.", hasil: "00" };
  }
  let _0x22bb = _0x11aa;
  while (_0x22bb >= 100) {
    let _0x33cc = Math.floor(_0x22bb / 100), _0x44dd = _0x22bb % 100;
    _0x22bb = _0x44dd + _0x33cc;
  }
  return { status: "success", hasil: String(_0x22bb).padStart(2, "0") };
}

function _0x2e4f(_0x55ee) {
  if ("undefined" == typeof window._0x3c4d || "undefined" == typeof window._0x7a8b) {
    return { status: "error", pesan: "Objek nilai belum dideklarasikan.", token: [] };
  }
  if (!_0x55ee || "string" != typeof _0x55ee) {
    return { status: "error", pesan: "Input kata tidak valid.", token: [] };
  }
  const _0x66ff = Object.keys(window._0x3c4d), _0x77a1 = Object.keys(window._0x7a8b), _0x88b2 = [];
  let _0x99c3 = 0;
  while (_0x99c3 < _0x55ee.length) {
    if ("'" === _0x55ee[_0x99c3]) {
      _0x88b2.push({ teks: "'", tipe: "P", isDigraf: !1 });
      _0x99c3++;
      continue;
    }
    if (_0x99c3 < _0x55ee.length - 1) {
      const _0x00d4 = _0x55ee.substring(_0x99c3, _0x99c3 + 2).toLowerCase();
      if (_0x77a1.includes(_0x00d4)) {
        _0x88b2.push({ teks: _0x55ee.substring(_0x99c3, _0x99c3 + 2), tipe: "C", isDigraf: !0 });
        _0x99c3 += 2;
        continue;
      }
    }
    const _0x11e5 = _0x55ee[_0x99c3], _0x22f6 = _0x11e5.toLowerCase();
    let _0x33a7 = "C";
    if (_0x66ff.includes(_0x22f6)) _0x33a7 = "V";
    else if ("y" === _0x22f6 && _0x99c3 === _0x55ee.length - 1) {
      const _0x44b8 = _0x55ee[_0x99c3 - 1] ? _0x55ee[_0x99c3 - 1].toLowerCase() : "";
      "s" !== _0x44b8 && (_0x33a7 = "V");
    }
    _0x88b2.push({ teks: _0x11e5, tipe: _0x33a7, isDigraf: !1 });
    _0x99c3++;
  }
  return { status: "success", token: _0x88b2 };
}

function _0x6a8b(_0x55ee) {
  if ("function" != typeof _0x2e4f) return { status: "error", pesan: "Fungsi token belum dideklarasikan.", sukuKata: [] };
  const _0x66ff = _0x2e4f(_0x55ee);
  if ("error" === _0x66ff.status) return { status: "error", pesan: _0x66ff.pesan, sukuKata: [] };
  const _0x77a1 = _0x66ff.token, _0x88b2 = [];
  let _0x99c3 = "";
  for (let _0x00d4 = 0; _0x00d4 < _0x77a1.length; _0x00d4++) {
    const _0x11e5 = _0x77a1[_0x00d4], _0x22f6 = _0x77a1[_0x00d4 + 1], _0x33a7 = _0x77a1[_0x00d4 + 2], _0x44b8 = _0x77a1[_0x00d4 + 3];
    _0x99c3 += _0x11e5.teks;
    let _0x55c9 = !1;
    _0x22f6 && ("P" === _0x22f6.tipe ? _0x33a7 && "V" === _0x33a7.tipe ? _0x55c9 = !1 : _0x33a7 && "C" === _0x33a7.tipe && (_0x99c3 += _0x22f6.teks, _0x00d4++, _0x55c9 = !0) : "V" === _0x11e5.tipe && "V" === _0x22f6.tipe ? _0x55c9 = !0 : "V" === _0x11e5.tipe && "C" === _0x22f6.tipe && _0x33a7 && "C" === _0x33a7.tipe ? (_0x99c3 += _0x22f6.teks, _0x00d4++, _0x55c9 = !0) : "V" === _0x11e5.tipe && "C" === _0x22f6.tipe && _0x33a7 && "V" === _0x33a7.tipe ? _0x55c9 = !0 : "C" === _0x11e5.tipe && "C" === _0x22f6.tipe && (_0x55c9 = !0));
    _0x55c9 && (_0x88b2.push(_0x99c3), _0x99c3 = "");
  }
  return _0x99c3 && _0x88b2.push(_0x99c3), { status: "success", sukuKata: _0x88b2 };
}

function _0x1c3d(_0x55ee) {
  if ("undefined" == typeof window._0x7a8b || "undefined" == typeof window._0x5e6f || "undefined" == typeof window._0x3c4d) {
    return { status: "error", pesan: "Tabel nilai belum dideklarasikan.", teks: _0x55ee || "", nilai: 0 };
  }
  if (!_0x55ee || "string" != typeof _0x55ee) return { status: "error", pesan: "Input suku kata tidak valid.", teks: "", nilai: 0 };
  let _0x66ff = _0x55ee;
  if (_0x66ff.startsWith("'") ? _0x66ff = _0x66ff.substring(1) : _0x66ff.includes("'") && (_0x66ff = _0x66ff.replace(/'/g, "")), !_0x66ff) return { status: "success", teks: _0x55ee, nilai: 0 };
  let _0x77a1 = "", _0x88b2 = _0x66ff.toLowerCase();
  if (_0x88b2.length >= 2) {
    const _0x99c3 = _0x88b2.substring(0, 2);
    window._0x7a8b.hasOwnProperty(_0x99c3) && (_0x77a1 = _0x99c3);
  }
  _0x77a1 || (_0x77a1 = _0x88b2[0]);
  let _0x00d4 = 0;
  return window._0x7a8b.hasOwnProperty(_0x77a1) ? _0x00d4 = window._0x7a8b[_0x77a1] : window._0x5e6f.hasOwnProperty(_0x77a1) ? _0x00d4 = window._0x5e6f[_0x77a1] : window._0x3c4d.hasOwnProperty(_0x77a1) && (_0x00d4 = window._0x3c4d[_0x77a1]), { status: "success", teks: _0x55ee, nilai: _0x00d4 };
}

function _0x4e5f(_0x55ee) {
  if ("function" != typeof _0x6a8b || "function" != typeof _0x1c3d) return { status: "error", pesan: "Fungsi pemenggalan/hitung detail belum dideklarasikan.", rincian: [], totalBeban: 0 };
  const _0x66ff = _0x6a8b(_0x55ee);
  if ("error" === _0x66ff.status) return { status: "error", pesan: _0x66ff.pesan, rincian: [], totalBeban: 0 };
  const _0x77a1 = [];
  let _0x88b2 = 0;
  for (let _0x99c3 of _0x66ff.sukuKata) {
    const _0x00d4 = _0x1c3d(_0x99c3);
    if ("error" === _0x00d4.status) return { status: "error", pesan: _0x00d4.pesan, rincian: [], totalBeban: 0 };
    _0x77a1.push({ teks: _0x00d4.teks, nilai: _0x00d4.nilai }), _0x88b2 += _0x00d4.nilai;
  }
  return { status: "success", rincian: _0x77a1, totalBeban: _0x88b2 };
}

function _0x8b9c(_0x55ee) {
  if ("string" != typeof _0x55ee || !_0x55ee.trim()) return { status: "error", valid: !1, inputBersih: _0x55ee, pesan: "Input tidak valid: Teks tidak boleh kosong." };
  const _0x66ff = _0x55ee.trim().replace(/\s+/g, " ");
  if (/[xX]/.test(_0x66ff)) return { status: "error", valid: !1, inputBersih: _0x66ff, pesan: "Input tidak valid: Mengandung huruf X/x yang tidak diizinkan." };
  if (/\d/.test(_0x66ff)) return { status: "error", valid: !1, inputBersih: _0x66ff, pesan: "Input tidak valid: Mengandung angka yang tidak diizinkan." };
  if (/[^a-zA-Z\s]/.test(_0x66ff)) return { status: "error", valid: !1, inputBersih: _0x66ff, pesan: "Input tidak valid: Mengandung simbol atau karakter khusus." };
  const _0x77a1 = _0x66ff.split(" ");
  if (_0x77a1.length > 5) return { status: "error", valid: !1, inputBersih: _0x66ff, pesan: "Input tidak valid: Jumlah kata tidak boleh lebih dari 5 kata." };
  for (let _0x88b2 of _0x77a1) {
    const _0x99c3 = _0x88b2.length > 25 ? _0x88b2.substring(0, 25) : _0x88b2;
    if (_0x88b2.length < 2 || _0x88b2.length > 25) return { status: "error", valid: !1, inputBersih: _0x66ff, pesan: `Input tidak valid: Kata '${_0x99c3}' harus berpanjang antara 2 hingga 25 karakter.` };
    if (2 === _0x88b2.length && !/[aeiouAEIOU]/i.test(_0x88b2)) return { status: "error", valid: !1, inputBersih: _0x66ff, pesan: `Input tidak valid: Kata 2 karakter '${_0x99c3}' tidak boleh berupa dua konsonan beruntun.` };
  }
  const _0x00d4 = "[aeiouAEIOU]|(?:y|Y)(?=\\s|$)", _0x11e5 = "[^aeiouAEIOU\\s]";
  if (/([^aeiouAEIOU\s])\1{2,}|([aeiouAEIOU])\2{2,}/i.test(_0x66ff)) return { status: "error", valid: !1, inputBersih: _0x66ff, pesan: "Input tidak valid: Terdapat 3 atau lebih huruf identik berurutan." };
  if (new RegExp(`(?:${_0x00d4}){3,}`, "i").test(_0x66ff)) {
    if (!new RegExp(`${_0x11e5}(?:${_0x00d4}){3,}${_0x11e5}`, "i").test(_0x66ff)) return { status: "error", valid: !1, inputBersih: _0x66ff, pesan: "Input tidak valid: Pola vokal beruntun tidak diapit konsonan (abnormal)." };
  }
  if (/(?:[b-df-hj-np-tv-z]|y(?!\s|$)){3,}/i.test(_0x66ff)) {
    const _0x22f6 = new RegExp(`(?:${_0x00d4})(?:[b-df-hj-np-tv-z]|y(?!\\s|$)){3,4}(?:${_0x00d4})`, "i").test(_0x66ff),
          _0x33a7 = new RegExp(`(dh|kh|dz|dj|sh|sy|th|ng|ny)[^aeiouAEIOU\\s]{0,2}(?:${_0x00d4})`, "i").test(_0x66ff);
    if (!_0x22f6 && !_0x33a7) return { status: "error", valid: !1, inputBersih: _0x66ff, pesan: "Input tidak valid: Pola konsonan beruntun tidak valid (abnormal)." };
  }
  return { status: "success", valid: !0, inputBersih: _0x66ff, pesan: "Input valid." };
}

function _0x3a4b(_0x55ee) {
  if ("function" != typeof _0x8b9c || "function" != typeof _0x4e5f || "function" != typeof _0x9c0d) return { status: "error", pesan: "Fungsi pembantu belum dideklarasikan." };
  if ("undefined" == typeof tabelTesen || "undefined" == typeof tabelPelarian || "undefined" == typeof kamusWeton || "undefined" == typeof kamusProfesi || "undefined" == typeof kamusAsmaulHusna || "undefined" == typeof kamusYasin || "undefined" == typeof kamusBinatang || "undefined" == typeof kamusTokoh) return { status: "error", pesan: "Tabel/kamus pendukung belum dideklarasikan." };
  const _0x66ff = _0x8b9c(_0x55ee);
  if ("error" === _0x66ff.status || !_0x66ff.valid) return { status: "error", pesan: _0x66ff.pesan };
  const _0x77a1 = _0x66ff.inputBersih, _0x88b2 = _0x77a1.split(" ");
  let _0x99c3 = 0, _0x00d4 = 0, _0x11e5 = [];
  for (let _0x22f6 of _0x88b2) {
    const _0x33a7 = _0x4e5f(_0x22f6);
    if ("error" === _0x33a7.status) return { status: "error", pesan: _0x33a7.pesan };
    _0x99c3 += _0x33a7.totalBeban, _0x00d4 += _0x33a7.rincian.length, _0x11e5.push({ kata: _0x22f6, rincianSukuKata: _0x33a7.rincian, subTotal: _0x33a7.totalBeban });
  }
  const _0x44b8 = _0x9c0d(_0x99c3);
  if ("error" === _0x44b8.status) return { status: "error", pesan: _0x44b8.pesan };
  const _0x55c9 = _0x44b8.hasil, _0x66d0 = tabelTesen[_0x55c9] || "00", _0x77e1 = tabelPelarian[_0x55c9] || "00", _0x88f2 = (_0x99c3 - 1) % 9 + 1, _0x99a3 = (_0x88f2 - 1) % 5 + 1, _0x00b4 = String(_0x99a3), _0x11c5 = String(_0x88f2), _0x22d6 = kamusWeton[_0x00b4] || { nama: "-", ket: "-" }, _0x33e7 = kamusProfesi[_0x11c5] || { nama: "-", ket: "-" }, _0x44f8 = _0x5500 => ({ key: _0x5500, asmaulHusna: kamusAsmaulHusna[_0x5500] || "-", yasin: kamusYasin[_0x5500] || "-", binatang: kamusBinatang[_0x5500] || "-", tokoh: kamusTokoh[_0x5500] || "-" });
  return { status: "success", profilNama: { namaInput: _0x55ee, namaBersih: _0x77a1, totalNeptu: _0x99c3, totalSukuKata: _0x00d4, rincianKata: _0x11e5 }, orientasiWetonProfesi: { weton: { key: _0x99a3, nama: _0x22d6.nama, ket: _0x22d6.ket }, profesi: { key: _0x88f2, nama: _0x33e7.nama, ket: _0x33e7.ket } }, matriks3Angka: { neptu: _0x44f8(_0x55c9), tesen: _0x44f8(_0x66d0), pelarian: _0x44f8(_0x77e1) }, narasiKey: `${_0x55c9}-${_0x66d0}-${_0x77e1}` };
}

function _0x7f8e(_0x11aa, _0x22bb) {
  if (typeof _0x3a4b !== 'function') return { status: "error", pesan: "Fungsi refleksi nama belum dideklarasikan." };
  if (typeof kamusKecocokan === 'undefined' || typeof kamusNarasiKecocokan === 'undefined' || typeof kamusHariPria === 'undefined' || typeof kamusHariWanita === 'undefined') return { status: "error", pesan: "Kamus pendukung belum dideklarasikan." };
  const _0x33cc = _0x3a4b(_0x11aa), _0x44dd = _0x3a4b(_0x22bb);
  if (_0x33cc.status === "error") return { status: "error", pesan: `Nama Pria:${_0x33cc.pesan}` };
  if (_0x44dd.status === "error") return { status: "error", pesan: `Nama Wanita:${_0x44dd.pesan}` };
  const _0x55ee = _0x33cc.profilNama.totalNeptu, _0x66ff = _0x44dd.profilNama.totalNeptu, _0x77a1 = _0x55ee + _0x66ff, _0x88b2 = String(((_0x55ee - 1) % 7) + 1), _0x99c3 = String(((_0x66ff - 1) % 7) + 1), _0x00d4 = kamusHariPria[_0x88b2] || "-", _0x11e5 = kamusHariWanita[_0x99c3] || "-", _0x22f6 = (_0x33cc.profilNama.rincianKata || []).flatMap(_0x9900 => (_0x9900.rincianSukuKata || []).map(_0x8800 => _0x8800.teks)), _0x33a7 = (_0x44dd.profilNama.rincianKata || []).flatMap(_0x9900 => (_0x9900.rincianSukuKata || []).map(_0x8800 => _0x8800.teks)), _0x44b8 = _0x22f6.length, _0x55c9 = _0x33a7.length, _0x66d0 = _0x44b8 + _0x55c9, _0x77e1 = _0x77a1 % 3, _0x88f2 = String(((_0x66d0 - 1) % 8) + 1), _0x99a3 = kamusKecocokan[_0x88f2] || "-", _0x00b4 = kamusNarasiKecocokan[_0x88f2];
  if (!_0x00b4 || !_0x00b4.dinamika || !_0x00b4.saran) return { status: "error", pesan: `Data narasi kecocokan untuk kode '${_0x88f2}' tidak ditemukan.` };
  const _0x11c5 = Math.floor(Math.random() * _0x00b4.dinamika.length), _0x22d6 = Math.floor(_0x11c5 / 2);
  return { status: "success", pasangan: { pria: { nama: _0x33cc.profilNama.namaBersih, sukuKataList: _0x22f6, totalSukuKata: _0x44b8, neptu: _0x55ee, hariLahir: _0x00d4 }, wanita: { nama: _0x44dd.profilNama.namaBersih, sukuKataList: _0x33a7, totalSukuKata: _0x55c9, neptu: _0x66ff, hariLahir: _0x11e5 } }, kalkulasi: { totalNeptuPasangan: _0x77a1, sisaHabisAmbilTiga: _0x77e1, totalSukuKataGabungan: _0x66d0, kodeKecocokan: _0x88f2, kategori: _0x99a3, hariLahirPasangan: { pria: _0x00d4, wanita: _0x11e5 } }, analisis: { dinamika: _0x00b4.dinamika[_0x11c5] || "-", saran: _0x00b4.saran[_0x22d6] || "-" } };
}


// Fungsi Kontrol UI & Event Handler (Nama Hex)
function _0x2b3c(_0x11aa) {
  const _0x22bb = _0x11aa === 'refleksi';
  const _0x33cc = document.getElementById('section-refleksi');
  const _0x44dd = document.getElementById('section-pasangan');
  const _0x55ee = document.getElementById('tab-refleksi');
  const _0x66ff = document.getElementById('tab-pasangan');
  
  if (_0x33cc && _0x44dd) {
    _0x33cc.classList.toggle('hidden', !_0x22bb);
    _0x44dd.classList.toggle('hidden', _0x22bb);
    const _0x77a1 = _0x22bb ? _0x33cc : _0x44dd;
    _0x77a1.classList.remove('animate-fade-in');
    void _0x77a1.offsetWidth;
    _0x77a1.classList.add('animate-fade-in');
  }
  if (_0x55ee && _0x66ff) {
    _0x55ee.classList.toggle('active', _0x22bb);
    _0x66ff.classList.toggle('active', !_0x22bb);
  }
  const _0x88b2 = document.getElementById('hasilContainer');
  const _0x99c3 = document.getElementById('boxError');
  if (_0x88b2) _0x88b2.classList.add('hidden');
  if (_0x99c3) _0x99c3.classList.add('hidden');
}

function _0x4d5e(_0x11aa) {
  _0x6f7a(!1);
  const _0x22bb = document.getElementById('boxError'), _0x33cc = document.getElementById('pesanError');
  if (_0x33cc) _0x33cc.textContent = _0x11aa;
  if (_0x22bb) _0x22bb.classList.remove('hidden');
  const _0x44dd = document.getElementById('hasilContainer');
  if (_0x44dd) _0x44dd.classList.add('hidden');
}

function _0x5e70() {
  const _0x11aa = document.getElementById('boxError');
  if (_0x11aa) _0x11aa.classList.add('hidden');
}

function _0x6f7a(_0x11aa) {
  const _0x22bb = document.getElementById('btn-proses-refleksi') || document.querySelector('#section-refleksi .btn-primary');
  const _0x33cc = document.getElementById('btn-proses-pasangan') || document.querySelector('#section-pasangan .btn-primary');
  const _0x44dd = document.getElementById('loading');
  if (_0x44dd) _0x44dd.classList.toggle('hidden', !_0x11aa);
  if (_0x22bb) _0x22bb.disabled = _0x11aa;
  if (_0x33cc) _0x33cc.disabled = _0x11aa;
  if (_0x11aa) {
    const _0x55ee = document.getElementById('hasilContainer');
    const _0x66ff = document.getElementById('boxError');
    if (_0x55ee) _0x55ee.classList.add('hidden');
    if (_0x66ff) _0x66ff.classList.add('hidden');
  }
}

function _0x8a9b(_0x11aa) {
  let _0x22bb = _0x11aa.value;
  _0x22bb = _0x22bb.replace(/[^a-wyzA-WYZ\s]/g, '');
  _0x22bb = _0x22bb.replace(/\s+/g, ' ');
  let _0x33cc = _0x22bb.split(' ');
  if (_0x33cc.length > 5) { _0x33cc = _0x33cc.slice(0, 5); }
  const _0x44dd = 25;
  _0x33cc = _0x33cc.map(_0x55ee => _0x55ee.length > _0x44dd ? _0x55ee.substring(0, _0x44dd) : _0x55ee);
  _0x22bb = _0x33cc.join(' ');
  if (_0x11aa.value.endsWith(' ') && !_0x22bb.endsWith(' ')) { _0x22bb += ' '; }
  _0x11aa.value = _0x22bb.toUpperCase();
}

async function _0x9b0c(_0x11aa) {
  try {
    const _0x22bb = await fetch(window._0x1a2b, {
      method: 'POST',
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      mode: "cors",
      redirect: "follow",
      body: JSON.stringify(_0x11aa)
    });
    const _0x33cc = await _0x22bb.text();
    let _0x44dd;
    try {
      _0x44dd = JSON.parse(_0x33cc);
    } catch (_0x55ee) {
      throw new Error("Server mengembalikan respons bukan JSON (kemungkinan crash script).");
    }
    if (_0x44dd.status === "error") {
      throw new Error(_0x44dd.pesan || "Terjadi kesalahan di server.");
    }
    return _0x44dd;
  } catch (_0x66ff) {
    throw new Error('Gagal terhubung ke server: ' + _0x66ff.message);
  }
}

async function _0x0c1d() {
  const _0x11aa = document.getElementById('inputNamaRefleksi').value;
  const _0x22bb = _0x8b9c(_0x11aa);
  if (!_0x22bb.valid) { _0x4d5e(_0x22bb.pesan); return; }
  const _0x33cc = document.querySelector('input[name="genderRefleksi"]:checked');
  if (!_0x33cc) { _0x4d5e("Silakan pilih jenis kelamin terlebih dahulu."); return; }
  _0x6f7a(!0);
  try {
    const _0x44dd = await _0x9b0c({ action: 'refleksi', nama: _0x22bb.inputBersih });
    if (_0x44dd.status === 'error') { throw new Error(_0x44dd.pesan); }
    _0x44dd.jenisKelamin = _0x33cc.value;
    _0x2d3e(_0x44dd);
  } catch (_0x55ee) {
    try {
      const _0x66ff = _0x3a4b(_0x22bb.inputBersih);
      _0x66ff.jenisKelamin = _0x33cc.value;
      _0x2d3e(_0x66ff);
    } catch (_0x77a1) {
      _0x4d5e("Layanan online dan kalkulasi lokal gagal: " + _0x77a1.message);
    }
  }
}

async function _0x1d2e() {
  const _0x11aa = document.getElementById('inputNamaPria').value;
  const _0x22bb = document.getElementById('inputNamaWanita').value;
  const _0x33cc = _0x8b9c(_0x11aa);
  if (!_0x33cc.valid) { _0x4d5e("Nama Pria: " + _0x33cc.pesan); return; }
  const _0x44dd = _0x8b9c(_0x22bb);
  if (!_0x44dd.valid) { _0x4d5e("Nama Wanita: " + _0x44dd.pesan); return; }
  _0x6f7a(!0);
  try {
    const _0x55ee = await _0x9b0c({ action: 'pasangan', namaPria: _0x33cc.inputBersih, namaWanita: _0x44dd.inputBersih });
    if (_0x55ee.status === 'error') { throw new Error(_0x55ee.pesan); }
    _0x3e4f(_0x55ee);
  } catch (_0x66ff) {
    try {
      const _0x77a1 = _0x7f8e(_0x33cc.inputBersih, _0x44dd.inputBersih);
      _0x3e4f(_0x77a1);
    } catch (_0x88b2) {
      _0x4d5e("Layanan online dan kalkulasi lokal gagal: " + _0x88b2.message);
    }
  }
}

function _0x2d3e(_0x11aa) {
  _0x6f7a(!1);
  const _0x22bb = document.getElementById('boxError');
  if (_0x22bb) _0x22bb.classList.add('hidden');
  const _0x33cc = _0x11aa.profilNama, _0x44dd = _0x11aa.orientasiWetonProfesi, _0x55ee = _0x11aa.matriks3Angka;
  const _0x66ff = _0x33cc.totalNeptu || 0;
  const _0x77a1 = ((_0x66ff - 1) % 7) + 1;
  const _0x88b2 = _0x11aa.jenisKelamin === 'pria' ? (window._0xbb11 ? window._0xbb11[_0x77a1] : '-') : (window._0xbb22 ? window._0xbb22[_0x77a1] : '-');
  const _0x99c3 = _0x11aa.jenisKelamin === 'pria' ? 'Laki-laki' : 'Perempuan';
  const _0x00d4 = `<h2 class="section-title">Hasil Refleksi Nama</h2><div class="refleksi-summary"><div><p style="font-size: 0.75rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em;">Nama Bersih (${_0x99c3})</p><p style="font-weight: 700; font-size: 1.025rem; margin-top: 10px; text-transform: capitalize; color: #4338ca; letter-spacing: 0.025em;">${_0x33cc.namaBersih}</p></div><div class="stat-grid-3"><div><p style="font-size: 10px; color: #64748b; margin-bottom: 0.25rem;">Total Neptu</p><span class="stat-box-white" style="color: #4f46e5;">${_0x33cc.totalNeptu}</span></div><div><p style="font-size: 10px; color: #64748b; margin-bottom: 0.25rem;">Total Suku Kata</p><span class="stat-box-white" style="color: #334155;">${_0x33cc.totalSukuKata}</span></div><div><p style="font-size: 10px; color: #64748b; margin-bottom: 0.25rem;">Hari Lahir (Neptu)</p><span class="stat-box-white" style="color: #334155;">${_0x88b2}</span></div></div></div>`,
        _0x11e5 = _0x33cc.rincianKata.map(_0x11aa => `<div style="display: flex; flex-wrap: wrap; gap: 0.375rem; align-items: center; justify-content: center; margin-bottom: 0.375rem;">${_0x11aa.rincianSukuKata.map(_0x11aa => `<span class="badge-tag">${_0x11aa.teks.toUpperCase()}<span class="badge-val">${_0x11aa.nilai}</span></span>`).join('')}</div>`).join(''),
        _0x22f6 = _0x00d4 + `<div style="margin-top: 1rem; background-color: #f8fafc; padding: 0.75rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;"><h3 style="font-weight: 600; color: #334155; font-size: 0.875rem; margin-bottom: 0.5rem; text-align: center;">Rincian Suku Kata & Nilai Beban</h3>${_0x11e5}</div><div class="grid-responsive-2" style="margin-top: 1rem;"><div class="box-weton"><p style="font-size: 0.75rem; color: #d97706; font-weight: 600; text-transform: uppercase;">Weton</p><h4 style="font-weight: 700; color: #78350f; font-size: 1.125rem; margin-top: 0.125rem;">${_0x44dd.weton.nama}</h4><p style="font-size: 0.75rem; color: rgba(180, 83, 9, 0.8); margin-top: 0.25rem;">${_0x44dd.weton.ket}</p></div><div class="box-profesi"><p style="font-size: 0.75rem; color: #059669; font-weight: 600; text-transform: uppercase;">Profesi</p><h4 style="font-weight: 700; color: #064e3b; font-size: 1.125rem; margin-top: 0.125rem;">${_0x44dd.profesi.nama}</h4><p style="font-size: 0.75rem; color: rgba(4, 120, 87, 0.8); margin-top: 0.25rem;">${_0x44dd.profesi.ket}</p></div></div>`,
        _0x33a7 = (_0x11aa, _0x22bb, _0x33cc, _0x44dd, _0x55ee) => `<div class="card-box"><div class="card-header ${_0x33cc}"><span style="color: #1e293b;">${_0x11aa}</span><span class="${_0x44dd}" style="padding: 0.125rem 0.625rem; border-radius: 0.375rem; font-size: 0.75rem;">${_0x22bb.key}</span></div><div class="card-body"><div><p style="font-size: 0.75rem; color: #94a3b8; font-weight: 500;">Asmaul Husna</p><p style="font-weight: 600; color: #1e293b;">${_0x22bb.asmaulHusna}</p></div><div><p style="font-size: 0.75rem; color: #94a3b8; font-weight: 500;">Yasin</p><blockquote class="blockquote-yasin ${_0x55ee}">${_0x22bb.yasin}</blockquote></div><div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; padding-top: 0.5rem; border-top: 1px solid #f1f5f9; text-align: center;"><div style="background-color: #f8fafc; padding: 0.5rem; border-radius: 0.5rem;"><p style="font-size: 10px; color: #94a3b8; text-transform: uppercase;">Binatang</p><p style="font-weight: 600; color: #1e293b; font-size: 0.75rem; margin-top: 0.125rem;">${_0x22bb.binatang}</p></div><div style="background-color: #f8fafc; padding: 0.5rem; border-radius: 0.5rem;"><p style="font-size: 10px; color: #94a3b8; text-transform: uppercase;">Tokoh</p><p style="font-weight: 600; color: #1e293b; font-size: 0.75rem; margin-top: 0.125rem;">${_0x22bb.tokoh}</p></div></div></div></div>`,
        _0x44b8 = _0x22f6 + `<div style="margin-top: 1.5rem; background-color: #f8fafc; padding: 1rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;"><div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;"><h3 style="font-weight: 700; color: #334155; font-size: 1rem;">Matriks Angka</h3><span style="background-color: #e0e7ff; color: #4338ca; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 0.5rem; font-size: 0.875rem;">${_0x11aa.narasiKey}</span></div><div style="display: flex; flex-direction: column; gap: 1rem;">${_0x33a7('NEPTU', _0x55ee.neptu, 'header-emerald', 'badge-emerald', 'border-yasin-emerald')}${_0x33a7('TESEN', _0x55ee.tesen, 'header-amber', 'badge-amber', 'border-yasin-amber')}${_0x33a7('PELARIAN', _0x55ee.pelarian, 'header-rose', 'badge-rose', 'border-yasin-rose')}</div></div><div class="disclaimer-box"><b>Catatan Disclaimer:</b> Hasil refleksi ini didasarkan pada pembacaan karakter dan angka tradisional sebagai sarana introspeksi diri, bukan sebagai acuan mutlak masa depan.</div>`;
  const _0x55c9 = document.getElementById('hasilContainer');
  if (_0x55c9) {
    _0x55c9.innerHTML = _0x44b8;
    _0x55c9.classList.remove('hidden');
    _0x55c9.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function _0x3e4f(_0x11aa) {
  _0x6f7a(!1);
  const _0x22bb = document.getElementById('boxError');
  if (_0x22bb) _0x22bb.classList.add('hidden');
  const _0x33cc = _0x11aa.pasangan, _0x44dd = _0x11aa.kalkulasi, _0x55ee = _0x11aa.analisis,
        _0x66ff = ["Habis", "Sri", "Lungguh"],
        _0x77a1 = { "1": "Kebahagiaan", "2": "Kesedihan", "3": "Pertemuan", "4": "Perpisahan", "5": "Kemudahan", "6": "Kesulitan", "7": "Kesakitan", "8": "Kesehatan" },
        _0x88b2 = {
          "1": { bg: "theme-1-bg", border: "theme-1-border", text: "theme-1-text", badge: "theme-1-badge", mainBg: "theme-1-mainbg", mainBorder: "theme-1-mainborder" },
          "2": { bg: "theme-2-bg", border: "theme-2-border", text: "theme-2-text", badge: "theme-2-badge", mainBg: "theme-2-mainbg", mainBorder: "theme-2-mainborder" },
          "3": { bg: "theme-3-bg", border: "theme-3-border", text: "theme-3-text", badge: "theme-3-badge", mainBg: "theme-3-mainbg", mainBorder: "theme-3-mainborder" },
          "4": { bg: "theme-4-bg", border: "theme-4-border", text: "theme-4-text", badge: "theme-4-badge", mainBg: "theme-4-mainbg", mainBorder: "theme-4-mainborder" },
          "5": { bg: "theme-5-bg", border: "theme-5-border", text: "theme-5-text", badge: "theme-5-badge", mainBg: "theme-5-mainbg", mainBorder: "theme-5-mainborder" },
          "6": { bg: "theme-6-bg", border: "theme-6-border", text: "theme-6-text", badge: "theme-6-badge", mainBg: "theme-6-mainbg", mainBorder: "theme-6-mainborder" },
          "7": { bg: "theme-7-bg", border: "theme-7-border", text: "theme-7-text", badge: "theme-7-badge", mainBg: "theme-7-mainbg", mainBorder: "theme-7-mainborder" },
          "8": { bg: "theme-8-bg", border: "theme-8-border", text: "theme-8-text", badge: "theme-8-badge", mainBg: "theme-8-mainbg", mainBorder: "theme-8-mainborder" }
        },
        _0x99c3 = (_0x11aa, _0x22bb, _0x33cc, _0x44dd) => `<div class="card-box"><div class="card-header ${_0x33cc} ${_0x44dd}" style="border-bottom: 1px solid #f1f5f9;">${_0x11aa}</div><div class="card-body"><div><p style="font-size: 10px; color: #94a3b8; text-transform: uppercase; font-weight: 500;">Nama</p><p style="font-weight: 700; color: #1e293b; font-size: 1rem;">${_0x22bb.nama}</p></div><div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; padding-top: 0.5rem; border-top: 1px solid #f1f5f9; text-align: center;"><div style="background-color: #f8fafc; padding: 0.5rem; border-radius: 0.5rem;"><p style="font-size: 10px; color: #94a3b8; text-transform: uppercase;">Neptu</p><p style="font-weight: 600; color: #1e293b; font-size: 0.75rem; margin-top: 0.125rem;">${_0x22bb.neptu}</p></div><div style="background-color: #f8fafc; padding: 0.5rem; border-radius: 0.5rem;"><p style="font-size: 10px; color: #94a3b8; text-transform: uppercase;">Hari Lahir (Neptu)</p><p style="font-weight: 600; color: #1e293b; font-size: 0.75rem; margin-top: 0.125rem;">${_0x22bb.hariLahir}</p></div></div><div><p style="font-size: 10px; color: #94a3b8; text-transform: uppercase; font-weight: 500; margin-bottom: 0.375rem;">${_0x22bb.sukuKataList.length} Suku Kata</p><div style="display: flex; flex-wrap: wrap; gap: 0.375rem;">${_0x22bb.sukuKataList.map(_0x11aa => `<span style="background-color: #f1f5f9; padding: 0.25rem 0.625rem; border-radius: 0.375rem; border: 1px solid #e2e8f0; font-size: 0.75rem; font-weight: 600; color: #334155;">${_0x11aa}</span>`).join('')}</div></div></div></div>`,
        _0x00d4 = _0x88b2[String(_0x44dd.kodeKecocokan)] || _0x88b2["1"],
        _0x11e5 = `<h2 class="section-title">Hasil Kecocokan Pasangan</h2><div style="display: flex; flex-direction: column; gap: 1rem;">${_0x99c3('Pria', _0x33cc.pria, 'theme-3-mainbg', 'theme-3-text')}${_0x99c3('Wanita', _0x33cc.wanita, 'theme-2-mainbg', 'theme-2-text')}</div><div style="background-color: rgba(238, 242, 255, 0.6); padding: 0.75rem; border-radius: 0.75rem; border: 1px solid #e0e7ff; margin-top: 1rem; display: flex; flex-direction: column; gap: 0.5rem;"><p style="font-size: 0.875rem; color: #4f46e5; text-transform: uppercase; font-weight: 700;">Statistik Kalkulasi</p><div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.375rem; text-align: center;"><div style="background-color: #fff; padding: 0.5rem; border-radius: 0.5rem; border: 1px solid #e0e7ff; display: flex; flex-direction: column; justify-content: space-between;"><p style="font-size: 9px; color: #94a3b8; text-transform: uppercase; font-weight: 600;">Total Neptu Pasangan</p><span style="font-size: 0.875rem; font-weight: 800; color: #4338ca; margin-top: 0.25rem;">${_0x44dd.totalNeptuPasangan}</span></div><div style="background-color: #fff; padding: 0.5rem; border-radius: 0.5rem; border: 1px solid #e0e7ff; display: flex; flex-direction: column; justify-content: space-between;"><p style="font-size: 9px; color: #94a3b8; text-transform: uppercase; font-weight: 600;">Sisa Habis Ambil Tiga</p><span style="font-size: 0.75rem; font-weight: 800; color: #d97706; margin-top: 0.25rem;">${_0x44dd.sisaHabisAmbilTiga} <span style="font-weight: 500; font-size: 10px;">(${_0x66ff[_0x44dd.sisaHabisAmbilTiga]})</span></span></div><div style="background-color: #fff; padding: 0.5rem; border-radius: 0.5rem; border: 1px solid #e0e7ff; display: flex; flex-direction: column; justify-content: space-between;"><p style="font-size: 9px; color: #94a3b8; text-transform: uppercase; font-weight: 600;">Total Suku Kata Pasangan</p><span style="font-size: 0.875rem; font-weight: 800; color: #334155; margin-top: 0.25rem;">${_0x44dd.totalSukuKataGabungan}</span></div></div></div><div class="card-box" style="margin-top: 1rem;"><div style="background-color: #f1f5f9; padding: 0.625rem 1rem; font-weight: 700; font-size: 0.875rem; color: #334155; border-bottom: 1px solid #e2e8f0;">Daftar Kategori Kecocokan</div><div class="kategori-grid">${Object.entries(_0x77a1).map(([_0x11aa, _0x22bb]) => { const _0x33cc = _0x11aa === String(_0x44dd.kodeKecocokan); const _0x44dd_style = _0x88b2[_0x11aa]; return `<div class="kategori-item ${_0x33cc ? `${_0x44dd_style.bg} ${_0x44dd_style.border}` : ''}" style="${_0x33cc ? 'border-width: 1px; border-style: solid;' : 'background-color: #f8fafc; border: 1px solid transparent;'}"><span class="kategori-number ${_0x33cc ? _0x44dd_style.badge : ''}" style="${!_0x33cc ? 'background-color: #e2e8f0; color: #334155;' : ''}">${_0x11aa}</span><span style="font-weight: ${_0x33cc ? '700' : '500'}; color:${_0x33cc ? 'inherit' : '#334155'};" class="${_0x33cc ? _0x44dd_style.text : ''}">${_0x22bb}</span></div>`; }).join('')}</div></div><div class="${_0x00d4.mainBg} ${_0x00d4.mainBorder}" style="padding: 1rem; border-radius: 0.75rem; text-align: center; margin-top: 1rem; border-width: 1px; border-style: solid;"><p class="${_0x00d4.text}" style="font-size: 0.75rem; text-transform: uppercase; font-weight: 600;">Kategori Kecocokan</p><p class="${_0x00d4.text}" style="font-size: 1.875rem; font-weight: 800; margin-top: 0.25rem;">${_0x77a1[String(_0x44dd.kodeKecocokan)]}</p><p style="font-size: 0.75rem; color: #64748b; margin-top: 0.5rem;">Kode Kecocokan: <span style="font-weight: 700; color: #334155; font-size: 0.875rem;">${_0x44dd.kodeKecocokan}</span></p></div><div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;"><div style="background-color: #f8fafc; padding: 1rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;"><h4 style="font-weight: 600; color: #334155; font-size: 0.875rem; margin-bottom: 0.25rem;">Dinamika Hubungan</h4><p style="font-size: 0.875rem; color: #475569;">${_0x55ee.dinamika}</p></div><div style="background-color: #f8fafc; padding: 1rem; border-radius: 0.75rem; border: 1px solid #e2e8f0;"><h4 style="font-weight: 600; color: #334155; font-size: 0.875rem; margin-bottom: 0.25rem;">Saran / Solusi</h4><p style="font-size: 0.875rem; color: #475569;">${_0x55ee.saran}</p></div></div><div class="disclaimer-box"><b>Catatan Disclaimer:</b> Hasil analisis ini disusun berdasarkan metode tradisional (hitung-hitungan nama dan neptu) sebagai bentuk refleksi dan hiburan semata, bukan sebagai kepastian mutlak atas takdir hubungan.</div>`;
  const _0x22f6 = document.getElementById('hasilContainer');
  if (_0x22f6) {
    _0x22f6.innerHTML = _0x11e5;
    _0x22f6.classList.remove('hidden');
    _0x22f6.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
// Injeksi Template HTML Utama & Event Listener DOM
document.addEventListener("DOMContentLoaded", () => {
  const _0x00html = `
  <div class="card">
    <h1 class="app-title">Refleksi Nama & Kecocokan Pasangan</h1>
    <div class="tabs">
      <button onclick="_0x2b3c('refleksi')" id="tab-refleksi" class="tab-btn active">Refleksi Nama</button>
      <button onclick="_0x2b3c('pasangan')" id="tab-pasangan" class="tab-btn">Kecocokan Pasangan</button>
    </div>
    <div id="section-refleksi">
      <div class="form-group">
        <label class="form-label">Masukkan Nama Lengkap</label>
        <input type="text" id="inputNamaRefleksi" oninput="_0x8a9b(this)" placeholder="Contoh: Budi Santoso" class="form-input">
      </div>
      <div class="form-group">
        <label class="form-label-uppercase">Pilih Jenis Kelamin Sesuai Nama</label>
        <div class="gender-grid">
          <label class="gender-option">
            <input type="radio" name="genderRefleksi" value="pria">
            <span style="font-size: 0.875rem; font-weight: 600;">Laki-laki</span>
          </label>
          <label class="gender-option">
            <input type="radio" name="genderRefleksi" value="wanita">
            <span style="font-size: 0.875rem; font-weight: 600;">Perempuan</span>
          </label>
        </div>
      </div>
      <button id="btn-proses-refleksi" onclick="_0x0c1d()" class="btn-primary">Proses Refleksi</button>
    </div>
    <div id="section-pasangan" class="hidden">
      <div class="form-group">
        <label class="form-label">Nama Pria</label>
        <input type="text" id="inputNamaPria" oninput="_0x8a9b(this)" placeholder="Contoh: Budi Santoso" class="form-input">
      </div>
      <div class="form-group">
        <label class="form-label">Nama Wanita</label>
        <input type="text" id="inputNamaWanita" oninput="_0x8a9b(this)" placeholder="Contoh: Siti Aminah" class="form-input">
      </div>
      <button id="btn-proses-pasangan" onclick="_0x1d2e()" class="btn-primary">Cek Kecocokan</button>
    </div>
    <div id="boxError" class="error-box hidden">
      <span id="pesanError">Terjadi kesalahan</span>
      <button onclick="_0x5e70()" class="btn-close-error">&times;</button>
    </div>
    <div id="loading" class="loading-box hidden">
      <div class="spinner"></div>
      <p class="loading-text">Sedang memproses data ke server...</p>
    </div>
    <div id="hasilContainer" class="results-container hidden"></div>
  </div>`;

  const _0x00wrapper = document.querySelector('.my-app-wrapper');
  if (_0x00wrapper) {
    _0x00wrapper.innerHTML = _0x00html;
  }
});

// Fitur Proteksi Klik Kanan / Salin
document.addEventListener("contextmenu", _0x11aa => _0x11aa.preventDefault());
document.addEventListener("copy", _0x11aa => _0x11aa.preventDefault());
document.addEventListener("cut", _0x11aa => _0x11aa.preventDefault());
