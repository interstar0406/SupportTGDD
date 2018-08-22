
// $(document).ready(function(){
// 	$(".owl-carousel").owlCarousel({
// 		items: 1
// 	});
//   });
var cty
$('#hom').on('click', function(){
	cty=$('#hom').val()
})
$('#fecr').on('click',function(){
	cty=$('#fecr').val()
})

//event click button Submit
$('#sub').on('click', function click() {
	//khai báo biến
	let lsuat = $('#lai_suat').val(),
		ttruoc = $('#tra_truoc').val(),
		sthang = $('#so_thang').val(),
		gthang = $('#gop_thang').val(),
		gto = $('#gt').val(),
		giayto;
	//chọn giấy tờ
	if(gto == 1){
		giayto = 'CMND + Sổ hộ khẩu';
	}
	else if(gto==2){
		giayto = 'CMND + Bằng lái xe/Sổ hộ khẩu';
	}
	else if(gto==3){
			giayto = 'CMND + Sổ hộ khẩu + Hóa đơn điện';
	}
	else if(gto==4){
		giayto = 'CMND + Bằng lái xe/Sổ hộ khẩu + Hóa đơn điện';
	}
	//chọn công ty tài chính
	
	//xuất gói trả góp sang output
	$('#form_output').text('Dạ, bạn có thể dùng gói lãi suất '+ lsuat +'% của công ty tài chính '+cty+'. Số tiền trả trước là '+ ttruoc +', trả trong '+ sthang +' tháng. Mỗi tháng trả '+ gthang +' (tham khảo, không chính xác 100%). Các giấy tờ cần thiết bao gồm '+ giayto +'. Nếu phù hợp, bạn có thể để lại số điện thoại bên mình liên lạc, hỗ trợ bạn làm hồ sơ trả góp online bạn nha.')
}
)
