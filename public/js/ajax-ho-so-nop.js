 $(function(){

    $('#showDialogNganh').click(function(event) {
        $('#querry').val('insert');
        $('#h4-Nganh').text("Thêm Ngành");
        $('#nganh-maso').val('');
        $('#nganh-ten').val('');
        $('#nganh-chitieu').val('');
       $('#nganh-diemchuan').val('');
        $(':checkbox:checked').each(function(i){
                  $(this).prop({checked: false});
        });
    });

 	$.ajaxSetup({
		  headers: {
		    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
		  }
		});

   
 	


 	$(document).ready(function($) {
 		hoSoNop();
        $('#hoSoNop_paginate').addClass('dbtb_paginate');
        $('#hoSoNop_length').addClass('dbtb_length');
        
 	});
 
 	hoSoNop = function () {
        var url = $(location).attr('pathname');
        var indexsl = url.lastIndexOf('/') + 1;
        var id_nganh = url.substring(indexsl,url.length);
 		$('#hoSoNop').DataTable({
            responsive: true,
     		"dom": '<"text-right"f>rt<lp><"clear">',
     	 	"language": {
                "search": "Tìm kiếm:",
                "processing":     "Đang xử lý...",
                "lengthMenu": "Hiện _MENU_ dòng",
                "zeroRecords": "Không tìm thấy!",
                "info": "Hiện _PAGE_ của _PAGES_",
                "infoEmpty": "Không có dữ liệu",
                "infoFiltered": "(Lọc từ _MAX_ total dòng)"
            },
     	 	aLengthMenu: [[10, 20, 50, 100, -1], [10, 20, 50, 100, "Tất cả"]],
     	 	iDisplayLength: 10,
            processing: true,
            serverSide: true,
            "bSort" : false,
            ajax:{
                url: '/dai-hoc/get-list-ho-so',
                type: 'POST',
                data: {id_nganh: id_nganh}
            },
            columns: [
                {data: 'stt'},
                {data: 'hs_maso'},
                {data: 'hs_ten'},
                {data: 'hs_sdt'},
                {data: 'diem_hs'},
                {data: 'khoi_ten'},
                {data: 'nv_douutien'},
                {data: 'kq'},
            ],
             "columnDefs": [ 
               {
                "targets": 0,
                "data": null,
                "render": function ( data, type, row, meta ) {
                  return meta.row+1;
                }
              },]
       
        
    });
 	} 

    

 });