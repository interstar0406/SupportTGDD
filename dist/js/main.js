'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});

// $(document).ready(function(){
// 	$(".owl-carousel").owlCarousel({
// 		items: 1
// 	});
//   });


//event click button Submit
$('#sub').on('click', function click() {
	//khai báo biến
	var lsuat = $('#lai_suat').val(),
	    ttruoc = $('#tra_truoc').val(),
	    sthang = $('#so_thang').val(),
	    gthang = $('#gop_thang').val(),
	    gto = $('#gt').val(),
	    giayto = void 0,
	    cty = void 0;
	//chọn giấy tờ
	if (gto == 1) {
		giayto = 'CMND + Sổ hộ khẩu';
	} else if (gto == 2) {
		giayto = 'CMND + Bằng lái xe/Sổ hộ khẩu';
	} else if (gto == 3) {
		giayto = 'CMND + Sổ hộ khẩu + Hóa đơn điện';
	} else if (gto == 4) {
		giayto = 'CMND + Bằng lái xe/Sổ hộ khẩu + Hóa đơn điện';
	}
	//chọn công ty tài chính
	if ($('#hom').click()) {
		cty = $('#hom').val();
	}
	if ($('#fecr').click()) {
		cty = $('#fecr').val();
	}

	//xuất gói trả góp sang output
	$('#form_output').text('Dạ, bạn có thể dùng gói lãi suất ' + lsuat + '% của công ty tài chính ' + cty + '. Số tiền trả trước là ' + ttruoc + ', trả trong ' + sthang + ' tháng. Mỗi tháng trả ' + gthang + ' (tham khảo, không chính xác 100%). Các giấy tờ cần thiết bao gồm ' + giayto + '. Nếu phù hợp, bạn có thể để lại số điện thoại bên mình liên lạc, hỗ trợ bạn làm hồ sơ trả góp online bạn nha.');
});
//# sourceMappingURL=main.js.map
