var $popupTestDrive = new priceTestDrive('#modalTestDrive');
$popupTestDrive.init();
function priceTestDrive(id) {
    var instant = this;
    this.id = id;
    this.opened = false;
    this.openedScroll = false;
    this.openedExit = false;
    this.data = {"id":"7171","html":"<div class=\"modal fade modal-testdrive\" id=\"modalTestDrive\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <P class=\"modal-title\" data-col=\"title\">ĐĂNG KÝ LÁI THỬ XE</P>\r\n                <a class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"></a>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"form-group\">\r\n                    <p class=\"modal-desc\" data-col=\"desc\">Ngay sau khi nhận được yêu cầu Chúng tôi sẽ gửi Báo giá Ưu đãi đến Quý khách trong thời gian sớm nhất.</p>\r\n                </div>\r\n                <div class=\"row row-form\">\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Họ tên (Bắt buộc)\" data-field=\"HoTen\" data-required=\"1\" data-title=\"Họ tên\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Điện thoại (Bắt buộc)\" data-field=\"DienThoai\" data-required=\"1\" data-title=\"Điện thoại\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Email...\" data-field=\"Email\" />\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <select class=\"form-control\" data-col=\"cities\" data-field=\"TinhThanh\"></select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <select class=\"form-control\" data-col=\"vehicles\" data-field=\"DongXe\" data-required=\"1\" data-title=\"Dòng xe\"></select>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Ngày dự kiến (dd-MM-yyy)\" data-type=\"date\" data-field=\"NgayDangKy\" />\r\n                </div>\r\n                <div class=\"text-center\">\r\n                    <a class=\"btn btn-default\" href=\"javascript:void(0);\" title=\"Nhận báo giá\"><i class=\"fas fa-angle-double-right bounceAlpha mr-2\"></i>ĐĂNG KÝ LÁI THỬ NGAY</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>","css":".modal-testdrive .close{position:absolute;right:0;top:22px;width:44px;height:44px;font-size:40px;font-weight:100;-webkit-transition:.25s;-o-transition:.25s;transition:.25s;margin:-22px 0 0;padding:0;opacity:1;z-index:100}.modal-testdrive .close:focus,.modal-testdrive .close:hover{opacity:.8;cursor:pointer;-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.modal-testdrive .close:after,.modal-testdrive .close:before{position:absolute;content:\"\";top:50%;left:10px;height:2px;width:24px;background:#111;-webkit-transition:.5s;-o-transition:.5s;transition:.5s}.modal-testdrive .close:before{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.modal-testdrive .close:after{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.modal-backdrop{z-index:3000}.modal-testdrive{z-index:3001;padding:0}.modal-testdrive .modal-dialog{max-width:700px}.modal-testdrive .modal-content{background:#fff;padding:0;border-radius:10px;overflow:hidden;border:none}.modal-testdrive .modal-header{position:relative;color:#fff;background-color:#fff;border-radius:0;border:none;padding:30px 30px 0}.modal-testdrive .modal-body{padding:0 30px 30px}.modal-testdrive .modal-title{width:100%;font-size:36px;text-align:center;font-weight:700;color:#2b1907;padding:0;margin-bottom:5px}.modal-testdrive .modal-desc{width:100%;text-align:center;font-weight:400;font-style:italic}.modal-testdrive .btn{color:#fff;font-weight:700;background-color:#ed1c24;line-height:20px;padding:10px 20px;border-radius:2px;min-width:240px}.modal-testdrive .btn:hover{opacity:.9}@media (max-width:991px){.modal-testdrive .modal-dialog{max-width:100%;margin:5px}.modal-testdrive .modal-header{padding:40px 10px 0}.modal-testdrive .modal-body{padding:0 10px 40px}.modal-testdrive .modal-title{font-size:24px}}","data":"{\"triggers\":{\"timer\":{\"active\":0,\"value\":0},\"scroll\":{\"active\":0,\"value\":0},\"exit\":0,\"links\":[]},\"title\":\"ĐĂNG KÝ LÁI THỬ XE SUBARU\",\"desc\":\"Ngay sau khi nhận được yêu cầu Chúng tôi sẽ gửi thông tin lái thử đến Quý khách trong thời gian sớm nhất.\",\"cities\":{\"type\":\"all\",\"value\":\"getDataNameCities\"},\"vehicles\":[\"Subaru Forester\",\"Subaru Crosstrek\",\"Subaru Outback\",\"Subaru WRZ\",\"Subaru BRZ\"]}"};
    this.pageKeys = getPageKeys();
    this.init = function () {
        if (this.data.html && this.data.html.length > 0) {
            $('#pluginjs').after(this.data.html);
            if (this.data.css && this.data.css.length > 0) {
                $('#pluginjs').after('<style>' + this.data.css + '</style>');
            }
            var jsonData = JSON.parse(this.data.data);
            $(this.id).find('[data-col]').each(function () {
                var columnName = $(this).attr('data-col');
                switch (columnName) {
                    case "cities":
                        $(this).append('<option value="-1">== Chọn Tỉnh/Thành ==</option>');
                        if (jsonData[columnName] && jsonData[columnName].type == 'all') {
                            var cities = getDataCities();
                            for (var i = 0; i < cities.length; i++) {
                                $(this).append('<option value="' + cities[i].id + '">' + cities[i].name + '</option>');
                            }
                        }
                        else if (jsonData[columnName].value && jsonData[columnName].value.length > 0) {
                            var cities = jsonData[columnName].value;
                            for (var i = 0; i < cities.length; i++) {
                                $(this).append('<option value="1">' + cities[i] + '</option>');
                            }
                        }
                        break;
                    case "vehicles":
                        $(this).append('<option value="-1">== Chọn dòng xe ==</option>');
                        if (jsonData[columnName] && jsonData[columnName].length > 0) {
                            var vehicles = jsonData[columnName];
                            for (var i = 0; i < vehicles.length; i++) {
                                $(this).append('<option value="1">' + vehicles[i] + '</option>');
                            }
                        }
                        break;
                    default:
                        if (jsonData[columnName] && jsonData[columnName].length > 0) {
                            $(this).html(jsonData[columnName]);
                        }
                        break;
                }
            });
            $(this.id).find('input[data-type="date"]').datetimepicker({ timepicker: false, format: 'd-m-Y' });
            $(this.id).on('hidden.bs.modal', function (e) {
                instant.opened = false;
            });
            $(this.id).find('a.btn').on('click touch', function () {
                sendTestDrive(null, instant.id)
            });
            if (jsonData['triggers']) {
                var triggers = jsonData['triggers'];
                if (this.isAutoShow(triggers.links)) {
                    if (triggers.timer && parseInt(triggers.timer.active) == 1) {
                        setTimeout(function () {
                            instant.showPopup();
                        }, triggers.timer.value * 1000);
                    }
                    if (triggers.scroll && parseInt(triggers.scroll.active) == 1) {
                        var percentPlugin = parseInt(triggers.scroll.value);
                        $(window).scroll(function () {
                            if (!instant.openedScroll) {
                                var top = this.scrollTop || document.documentElement.scrollTop;
                                var height = this.scrollHeight || document.documentElement.scrollHeight;
                                var percent = parseInt(top * 100 / height);
                                if (percent >= percentPlugin) {
                                    instant.openedScroll = true;
                                    instant.showPopup();
                                }
                            }
                        });
                    }
                    if (parseInt(triggers.exit) == 1) {
                        $(window).on('mouseout', function (e) {
                            if (!instant.openedExit) {
                                var from = e.relatedTarget || e.toElement;
                                if (!from) {
                                    instant.openedExit = true;
                                    instant.showPopup();
                                }
                            }
                        });
                    }
                }
            }
        }
    }
    this.isAutoShow = function (pLinks) {
        var res = true;
        if (pLinks && pLinks.length > 0) {
            res = false;
            var href = $(location).attr('href');
            for (var i = 0; i < pLinks.length; i++) {
                if (res) {
                    return;
                }
                if (pLinks[i].type == this.pageKeys[window.pageKey]) {
                    res = true;
                }
                else if (pLinks[i].type == "equals") {
                    if (pLinks[i].value == href || pLinks[i].value == href.substring(0, href.indexOf('?'))) {
                        res = true;
                    }
                }
                else if (pLinks[i].type == "contains") {
                    if (href.indexOf(pLinks[i].value) > -1) {
                        res = true;
                    }
                }
            }
        }
        return res;
    }
    this.showPopup = function () {
        if (!this.opened) {
            this.opened = true;
            $(this.id).modal('show');
        }
    }
}
var $popupPriceQuote=new priceQuotePlugin('#modalPriceQuote');
$popupPriceQuote.init();
function priceQuotePlugin(id) {
    var instant = this;
    this.id = id;
    this.opened = false;
    this.openedScroll = false;
    this.openedExit = false;
    this.currentTop = 0;
    this.data = {"id":"7172","html":"<div id=\"modalPriceQuote\">\r\n    <div class=\"modal-banner\">\r\n        <img alt=\"Ưu đãi\" src=\"\" />\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p class=\"price-quote-title\">Nhận báo giá & Ưu đãi trong tháng</p>\r\n        <p class=\"price-quote-desc\">Ngay sau khi nhận được yêu cầu Chúng tôi sẽ gửi Báo giá Ưu đãi đến Quý khách ngay!</p>\r\n        <div class=\"text-center\">\r\n            <a class=\"btn\" title=\"Đăng ký ngay\" href=\"javascript:void(0);\" rel=\"nofollow\">ĐĂNG KÝ NGAY</a>\r\n        </div>\r\n    </div>\r\n</div>","css":"#modalPriceQuote{font-family:Arial,Helvetica,sans-serif;font-size:100%;color:#111!important;display:none;max-width:700px;border-radius:12px;padding:0;overflow:hidden}#modalPriceQuote .fancybox-close-small{right:6px!important;top:6px!important;background-color:#777;margin:0!important}#modalPriceQuote .fancybox-close-small:after,#modalPriceQuote .fancybox-close-small:before,#modalPriceQuote .form-control{background-color:#fff!important}#modalPriceQuote .fancybox-close-small:focus,#modalPriceQuote .fancybox-close-small:hover{background-color:#444!important}#modalPriceQuote .modal-banner img{width:100%}#modalPriceQuote .modal-body{padding:20px}#modalPriceQuote .price-quote-title{width:100%;font-size:36px;text-align:center;font-weight:700;color:#2b1907;line-height:1.1;padding:0;margin-bottom:5px}#modalPriceQuote .price-quote-desc{width:100%;text-align:center;font-weight:400}#modalPriceQuote .form-group{position:relative;padding-top:20px}#modalPriceQuote .form-group>label{position:absolute;background-color:#fff;top:10px;left:10px;line-height:1;margin:0;padding:0 4px}#modalPriceQuote .form-control{color:#111!important;height:auto!important;line-height:1.2!important;padding-top:14px;border:1px solid #ccc!important;border-radius:4px!important}#modalPriceQuote .text-align{text-align:center}#modalPriceQuote .btn{min-width:240px;color:#fff!important;background-color:#288ad6!important;border-radius:8px!important}#modalPriceQuote .btn:focus,#modalPriceQuote .btn:hover{opacity:.8}@media (max-width:991px){#modalPriceQuote{max-width:100%}#modalPriceQuote .modal-body{padding:10px}}","data":"{\"triggers\":{\"timer\":{\"active\":1,\"value\":10},\"scroll\":{\"active\":0,\"value\":0},\"exit\":0,\"links\":[]},\"banner\":\"../assets/image/popup/1.png\",\"title\":\"NHẬN BÁO GIÁ ƯU ĐÃI ➡️ HỖ TRỢ 100% THUẾ TRƯỚC BẠ\",\"desc\":\"Báo giá hấp dẫn nhất kèm chính sách trợ giá cực HẤP DẪN từ Subaru Hà Nội điền thông tin ngay để nhận báo giá lăn bánh TỐT NHẤT\",\"phonelabel\":\"Điện thoại\",\"isfullname\":1,\"fullnamelabel\":\"Họ tên\",\"isemail\":0,\"emaillabel\":\"Email\",\"isvehicle\":1,\"vehiclelabel\":\"Chọn dòng xe quan tâm\",\"vehicles\":[\"Subaru Forester\",\"Subaru Crosstrek\",\"Subaru Outback\",\"Subaru WRX\",\"Subaru BRZ\"],\"isnote\":0,\"notelabel\":\"Ghi chú\"}"}; 
    this.pageKeys = getPageKeys();
    this.init = function () {
        if (this.data.html && this.data.html.length > 0) {
            $('#pluginjs').after(this.data.html);
            if (this.data.css && this.data.css.length > 0) {
                $('#pluginjs').after('<style>' + this.data.css + '</style>');
            }
            var jsonData=JSON.parse(this.data.data);

            $(this.id).find('div.modal-banner img').attr('src',jsonData['banner']);
            if(jsonData['title']&&jsonData['title'].length) {
                $(this.id).find('.price-quote-title').html(jsonData['title']);
            }
            if(jsonData['desc']&&jsonData['desc'].length) {
                $(this.id).find('.price-quote-desc').html(jsonData['desc']);
            }

            var htmlControls='';
            if(jsonData['isfullname']&&jsonData['isfullname']==1) {
                htmlControls+=`<div class="form-group">
    <label>${jsonData['fullnamelabel']}</label>
    <input type="text" class="form-control" placeholder="${jsonData['fullnamelabel']}" data-field="HoTen" />
</div>`;
            }
            htmlControls+=`<div class="form-group">
    <label>${jsonData['phonelabel']} <span class="required">*</span></label>
    <input type="text" class="form-control" placeholder="${jsonData['phonelabel']}" data-field="DienThoai" data-required="1" data-title="${jsonData['phonelabel']}" />
</div>`;
            if(jsonData['isemail']&&jsonData['isemail']==1) {
                htmlControls+=`<div class="form-group">
    <label>${jsonData['emaillabel']}</label>
    <input type="text" class="form-control" placeholder="${jsonData['emaillabel']}" data-field="Email" />
</div>`;
            }
            if(jsonData['isvehicle']&&jsonData['isvehicle']==1) {
                var htmlVehicle=`<div class="form-group"><label>${jsonData['vehiclelabel']}</label><select class="form-control" data-field="DongXe" data-type="select"><option value="-1">== ${jsonData['vehiclelabel']} ==</option>`;
                if(jsonData['vehicles']&&jsonData['vehicles'].length>0) {
                    var vehicles=jsonData['vehicles'];
                    for(var i=0;i<vehicles.length;i++) {
                        htmlVehicle+='<option value="'+(i+1)+'">'+vehicles[i]+'</option>';
                    }
                }
                htmlControls+=htmlVehicle+'</select></div>';
            }
            if(jsonData['isnote']&&jsonData['isnote']==1) {
                htmlControls+=`<div class="form-group">
    <label>${jsonData['notelabel']}</label>
    <input type="text" class="form-control" placeholder="${jsonData['notelabel']}" data-field="GhiChu" />
</div>`;
            }
            $(htmlControls).insertAfter($(this.id).find('.price-quote-desc'));

            $(this.id).find('a.btn').on('click touch', function () {
                sendPriceQuote(null, instant.id)
            });
            if (jsonData['triggers']) {
                var triggers = jsonData['triggers'];
                if (this.isAutoShow(triggers.links)) {
                    if (triggers.timer && parseInt(triggers.timer.active) == 1) {
                        setTimeout(function () {
                            instant.showPopup();
                        }, triggers.timer.value * 1000);
                    }
                    if (triggers.scroll && parseInt(triggers.scroll.active) == 1) {
                        var percentPlugin = parseInt(triggers.scroll.value);
                        $(window).scroll(function () {
                            if (!instant.openedScroll) {
                                var top = this.scrollTop || document.documentElement.scrollTop;
                                var height = this.scrollHeight || document.documentElement.scrollHeight;
                                var percent = parseInt(top * 100 / height);
                                if (percent >= percentPlugin) {
                                    instant.openedScroll = true;
                                    instant.showPopup();
                                }
                            }
                        });
                    }
                    if (parseInt(triggers.exit) == 1) {
                        $(window).on('mouseout', function (e) {
                            if (!instant.openedExit) {
                                var from = e.relatedTarget || e.toElement;
                                if (!from) {
                                    instant.openedExit = true;
                                    instant.showPopup();
                                }
                            }
                        });
                    }
                }
            }
        }
    }
    this.isAutoShow = function (pLinks) {
        var res = true;
        if (pLinks && pLinks.length > 0) {
            res = false;
            var href = $(location).attr('href');
            for (var i = 0; i < pLinks.length; i++) {
                if (res) {
                    return;
                }
                if (pLinks[i].type == this.pageKeys[window.pageKey]) {
                    res = true;
                }
                else if (pLinks[i].type == "equals") {
                    if (pLinks[i].value == href || pLinks[i].value == href.substring(0, href.indexOf('?'))) {
                        res = true;
                    }
                }
                else if (pLinks[i].type == "contains") {
                    if (href.indexOf(pLinks[i].value) > -1) {
                        res = true;
                    }
                }
            }
        }
        return res;
    }
    this.showPopup = function () {
        if (!this.opened) {
            this.opened = true;
            this.currentTop = document.documentElement.scrollTop;
            $.fancybox.open({
                src: instant.id,
                type: 'inline',
                opts: {
                    keyboard: false,
                    arrows: false,
                    clickSlide: false,
                    touch: false,
                    afterClose: function (instance, current) {
                        instant.opened = false;
                        $('html, body').animate({ scrollTop: instant.currentTop }, 10);
                    }
                }
            });
        }
    }
}
$('#popupBaoGiaLink').on('click touch', function () {
    $popupPriceQuote.showPopup();
});
var $addwidget = new addWidgetPlugin('#addwidgetfixed');
$addwidget.init();
function addWidgetPlugin(id) {
    var instant = this;
    this.id = id;
    this.data = {"id":"7175","html":"<div class=\"menu-icon-color-fixed dark\" id=\"addwidgetfixed\">\r\n    <div class=\"menu-fixed-list\"></div>\r\n</div>","css":".menu-icon-color-fixed .menu-fixed-item .menu-icon .icon-price {\r\nbackground-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmExY2QxMmY0MSwgMjAyNC8xMS8wOC0xNjowOToyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTdCMTVGOUUxQzAwMTFGMEExOUZGMEY5Mzc1MEI0NDUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTdCMTVGOUQxQzAwMTFGMEExOUZGMEY5Mzc1MEI0NDUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjIgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MkE1OUI2MDFCRjcxMUYwQTE5RkYwRjkzNzUwQjQ0NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1MkE1OUI2MTFCRjcxMUYwQTE5RkYwRjkzNzUwQjQ0NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgViZr8AABVoSURBVHja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\");\r\n}\r\n.menu-icon-color-fixed .menu-fixed-item .menu-icon .icon-sms {\r\nbackground-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmExY2QxMmY0MSwgMjAyNC8xMS8wOC0xNjowOToyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTJBNTlCNTgxQkY3MTFGMEExOUZGMEY5Mzc1MEI0NDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTJBNTlCNTkxQkY3MTFGMEExOUZGMEY5Mzc1MEI0NDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRjIwM0Y3RjFCRjcxMUYwQTE5RkYwRjkzNzUwQjQ0NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRjIwM0Y4MDFCRjcxMUYwQTE5RkYwRjkzNzUwQjQ0NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Psc+CBEAABF3SURBVHja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\");\r\n}\r\n.menu-icon-color-fixed .menu-fixed-item .menu-icon .icon-phone {\r\nbackground-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmExY2QxMmY0MSwgMjAyNC8xMS8wOC0xNjowOToyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkYyMDNGNzkxQkY3MTFGMEExOUZGMEY5Mzc1MEI0NDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkYyMDNGN0ExQkY3MTFGMEExOUZGMEY5Mzc1MEI0NDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRjIwM0Y3NzFCRjcxMUYwQTE5RkYwRjkzNzUwQjQ0NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRjIwM0Y3ODFCRjcxMUYwQTE5RkYwRjkzNzUwQjQ0NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmbBbUUAABCQSURBVHja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\");\r\n}\r\n.menu-icon-color-fixed .menu-fixed-item .menu-icon .icon-zalo {\r\nbackground-image: url(\"data:image/png;base64,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\");\r\n}\r\n.menu-icon-color-fixed .menu-fixed-item .menu-icon .icon-drive {\r\nbackground-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAyIDc5LmExY2QxMmY0MSwgMjAyNC8xMS8wOC0xNjowOToyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI2LjIgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTdCMTVGQTUxQzAwMTFGMEExOUZGMEY5Mzc1MEI0NDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTdCMTVGQTYxQzAwMTFGMEExOUZGMEY5Mzc1MEI0NDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxN0IxNUZBMzFDMDAxMUYwQTE5RkYwRjkzNzUwQjQ0NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxN0IxNUZBNDFDMDAxMUYwQTE5RkYwRjkzNzUwQjQ0NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgOoFtcAABZOSURBVHjaxF0LlFXVef7vnTvDDDMCwzADwxsGUUBeFsEXYBBTTURXEp+J0iC2mtQ8XAqJrZYVQ7Wt2rXalRZrAl3WRE2sxqqxrY9EUUFsYuQlIA95v4ZhYIbHPO/u959/33vPY+99zgyCe3Hu2ffMuefs/e//8f2Pc0ipLfdQtCnvn/O7bxf8e5K/5Q8MQH8s9hOwjUe/DvtB2PripHKcXqJ/34Zjx7Edxjl7sN+Kg2txfA36H6O/v3B5//0j9/P1Q3MyHlfB6/jPU51EJX0pYySe81AMsVwTISrDAKZgPwuHpuM4E68/trRxkIWf9vA2pUBYGoWDM/Vfs+gfwDkgIr2D/m+x/z3OO2m4t2/yyj6fJIvgO5yKcGD4ROMNyDwQ+6CnYbsZ/S8LAWxcEbqHkyusE96Cj99gewa/X+XkMP8x98JHx+txYFWIgNaVcXGelQvBNeqr6N2J/ox4TnAQzH+vJNxSuNZy7B/H/gVsrcm5LU78CyKsRUe52TpCzJBYByebxm4u+h+g/7SVeBEud3CbSqCbzAs0wxsDEcai5uKUom4Tj8z0SRt1nFUHKrc4iW5bjv6T2jC4xSBuMVRCNaJ8kw+LpfQn4OuTWk9eHliQLuq8APGVcEuUsq6Bm/9WhY/H8f1N7C+JJ5jNKnZF5xmkggyLogK/vwj9N/RYq+LVUYzlxpd0l3QeGSdyBT7eR/eOwMT8ei4R8ZISLE7Jqxhr6/39Dm/MMnYD5xnGrsLjki+ZeGjC/Q4Ahg7fQaiSVDF37sP2Y9EtCXSIDXdlO0Up8+bEZ7k+1j3FY2AVnuoC3gtceBS+/jc6D2B7mDrbZJ75huunS2Lsg0fAGFyXxYXPOh/bJA188JP2I2VU/9ITlG2/BQcsE3BAIwX4lm2XAfNCZHoD5dVgAyQsqcb3szB4XqCUb/Vxfscx2NJD2A4QtewjajtM1NkqhEz5zqek1lwVYSwPgVBjaeS8v4BVPemNie/X/AnRnlf1OGyWW4GAcR4Ec0XpEKJeU+Rwx9G+dHjpc9TZMssjppFjLZzMXMwLUlRKVA6no2IctnNw/cEgWgV1qXUCK7fsxUQ3Eh2FQ3JsixCYCZnKJDRIJMTvPHkLNbw/kEZ//3oqqTwsTA7u2/0SOsVOCcokcr9yrN26r5p2/uRlaqufRunS5LhJacIV9yPqcwE24Oqew+mUWlGZLAJvA74sxGyAWjv0HtHJXUJEjyuVHa/mjvO5jWtn0er7XqVx98+hnoPrvfEmUG8ZC5YL/jgNTNzR1Id2gXjth0LEcxmIrIhYCQhX9QV4uJfijr3otLTSgfCigdsHXAVCriDaB/V2fLuMPVVkNjz+Pi9Iy8FptH7xyzTx4SshJUcihiNwDdGNKbXp+263TWElKmf2oLaDr1DzutmJOY9XkFe26jKimqtEz53Jlm0h2v+/0GMQw/Ymio7bMvaOE5jv5Deo6oKracvPWguGJPQbNnw9qvwEdBqTZdBf84I6zzGYTgyiJ0Rr4E0QsbPpc20n9xBt/w+iw/+niZiOB/eenu757zB0t1mMj9gGEDAd7+equ3HheSIGNhfHF+LpxMr3m01Ut/DzJ54X/xlENOaHRMNuKVj/OBDPujPbOs+bexgbhsA6OPB7riABI/e30S+O9Siy2tAMvBFiO6t7k2XObWsQeNLRLPrT85dKxEoXV3qr3m09ehgu8eZ/hUgfE90YFwNQxNSeic7KiP7UIpxxEK8Cu6V54rnCO7yqLN5DbifqfX4XRWynhiEbRdxYX7EIecA6gDcEkxWBkKUDgEsBf3pPxCjPFiiSpPWdSjQWi7DhH2SRPCI6oQ5uqJaijx+qYxEjQmxENn7P5g8+io973IFJDVFYvIfdiUlNSDYRBsWN0EmHwNzHtwrneSpCexdMLGP8Lqs37RkxZ/YcRlQ9HWpjenIsydZ5/WLAskYKGgkr1HkMH/cG9WTOiGz8rol4YCP1vrcCzsCidr+GwrXsPSXZ4BtXwTq+QnTiU+2SMfBNhYxSjI8ccAPbRAIYxgwEHux/RQG2uFrzZqK1DwogzwNva4C1AzuAV/VhwP30CLjhuyaT/jq22faAZ87a4uYDbwYHfDF+wG31QPbPCOflXa8Y7qYuRJE9Lwc6sxe8mxHfhGjXxY+pAYu5HuKcLtJc7wy2vhmgScQKF3ZXyYkUT7y+lyQj3tGPiDZBZBo/0MA2jnjhiEiCEDxzUVFPoqYNROsWgctfix9XFZhq2A2C/WxRnwLKuBz3/1IYfKRDg0l50YnABCwg2ROZm+MHWf8G0bZ/gnE4iruV2f1lcyDUDDlcUWTGesyNm5cI/otrQ68HI5wvDGEcV+D+9wuNCkYkXRi8R/lZ6F9kDlKqIGcwSC4qdw/uANypXU8WdJ3Vg7Fwm6Io1FCG3wRikEp0IAcsdj5PtPWn7jGyOhn15zBA5aLXbOMqBGRn+dc1ZP/VXdGBhujIQLnyQljc8TH65W3ReakSbVm7krCxcKNLMiLcmhKR3v0yOPHn7rH2HEI0+FqZW3yU/C4/a/pFeCQ+rzRO0q84metq5rgHdAx6aBfEJ53Rt+hKslvFJJQMUXzlSFplQMSd/wlpeNM95iHXgJCDQcT2uPzMlR6t9H39InwdxzSciRW2cpUXSeDT1tiD2LFMeyZFMSJhC8Iqe3QoLLaxSauUqI8t8AmO73CEx0DowXMoH8aypxtKhVYqIMJsPK5zTpIBbBo36Rfjpu15Dh7FXhHdxKJqGjB/dGrgbMq1JMiJ5PqsEzuOg4g/k+vZ2oAvwHeu9fnL1lTqdeyE6KSSd2AUbjTJOTH2S88CxupR6xDdT6D7lktsrSt6zt/n3AR7Jh4HFwv3sOroOCkSYHTqE3AxW+fDf4Qov2UfPxuS/tO1D06uhBbT6mz+mtEDmJmPXRsVs96z8XC1/S/JZCPIPkHCx8uR4LcVowArLhAfl4MHLBvsHx/7VIIBR9draSjpemaPdTJb5uqLxUqbWn+QYud/aU5N2QItxbo+55OMHsAM94SlDoQqxri5r2mdb2IJ8qp+y17SF5gM0KjqkqgrVlorwYNa2LhGcNH2p3S0udR93TDn8NiO4Xf170FcLzfPo2I47gUv5uiGwlzM2HMm5vXTtOa8SU5uYe7g2B4rWitsWa51R8qns8JVAwaishfAMGLsA9CvM+L92MrJRON/RNRnkiSRyJyvjZjtnP5kSLXvTbKbdYy/72QtEQ68Smoy046t8HAcGOYUNd5z9swax8NEmtbKitlqXyKwSAkB2Gc95wfCZUkbpz3HLAC3XiixPU/cDEl4ZeHCpk1ui9znvBDwN2JPsKoazEbkXHzpFUX8qhBC4puWDXeLb2tDEJe7EttsDFhsq6FGxvw1DFO/7mXlxi4EfvuaNjItlsRPmItSwvUNf7RfuwL8VNJHJ/wVGfw6Ps7ieDZr+zFuDJbVie9qR2hoo64qMEVOcqKcq24AkStGQJ9dIxx0Ko2N1chvQuT+RMDykbWF4G6qyJdoD3s3KTl36FfM12XildaAKQ4LHLMVCSgaxZUJdU7rxavA1tDl93JS28s3tEV/zzqHIzAlAN/l2sL2npAsZpe09RkvG1vo+pViAFoO6ihLh1mXNW+TAEJRmSWXApXSuJ6THpZF8LbhHNIf7MRQzFnFfVzhZSD4mzWCTwUqPQQ6gHjF4OCSygK8iWut9SDEO1iYbbKA7GJVwzqXxyTje4+Tje/LKqXtiBDJVHWbq6+x5pmrRfqs3pD3WcszqnJjKCVK2y5Hgtk+q1b/LtG2ZZJcytVDcrXBnpeJht2IxfpKEtkWvdod3eoXYxVXsaEqGQdWuBMrKhjHO53tyGpA03/WRqKc8oU+zMUsCVuXCZSq/dPTP5ZMT4eLmd9VsNksiZ4Q6icVvVNpTKwdz2pPpliMAVdscV7XMwxpQQM7nxPP5HS3mKos3S9O5yOXzprhM9BO7NHeRYlAnCoYm0l/TzT5EaJBX9JlbBkxDkc/PgMLqsxRn6BFVsyBLbGladnW0z9gztPmK6KyIqbs3DMncLYtB9J54xrB092yre7UgYh2C3siR2NLaDkUdNp1TrkYjdyiNa7xpULXSJQmh+u6WkvYndbebE4dBPViM+PAencUIyUJodPd2B9m6HDygBiNPa9gfdEv6iHYjiMpuYh473NO/3haGhLEMKmBRXiHPRum8VJ7ozsQ+Vk0BrSDrpaytNwgDwIL7ntdBynS4jvXzu6a39zdxgsZqJAwxTDVHhbhzU42ZbDpFfucAS6svQq+7VcF/LIhSesqUxZfFqn+l8F1u/UMGBBw+om9QaBtDsltY7nYgAOdedQa0YMpGTyH6dml6wos8SwnSdwuqes28jaiXmOE807sFs5nv5SJV3tF0L+NIwK7cjwJVgOBQqI47jsoW76y1VIhAeZjV24TeizwNdHEjS9azP4ul024XLpW3LTxI8CMdRjAPgnNKw1KywbCX50ovnBxTHlav4tk8wiQTW40mGvruU76A4x3R8EQMAHZt62Ev1w9FS7hUHdFV9PmQlWrDUjzo7ektmb0s7ZbcLzGmsfgmzUz9rrWflN2t7Y+LrkLz89M66IhEtjBfu3B5eCm/oAlcwTbUTqZN5Ck7X+L6NNnJOKci9TkH5PAIhzbifuvgKezlGjUXKK6bzjm8iHWLesbnhGhbGYtLTW7ynsY72JrKJ710LGt4uTbwlrlI4QgvNr5khslc2BRUNqb4ZKyrU+I2zb6O/HcmERVbFpCtOsVXR9TFoVhrJ2KdHkyxw1dVpzVDscK0+7HG3BsFX9Ja8PxlgUoFpxzZunGP9hvzC5XzWWaAx2m3yu7ABQ5BFFb//CpYUzmrPX/KEkgJlwgH2MwjDy2aqiQfo5SvMOrhVvTGQo9HhYOLvxOFxd5bUUBUFsmz6vLYuqCMwOvleRTtiMeQzFw5qDmlie6T0AW2b2v+aJFylH90ClcVRdjxXe/VpijMuo+7jOt3qO8rCmAaVJvuzmnWAwJZ95sjeuXh1xnqDExYCilibj/d8KNXW3NUCnbf6UTXQZuC+PadnD60GtgyByZxeOw+gdXihpSlgUpPMhdr6uz8jd61poT9udH9v4mBsvBh+13oRbNVHQy4fwIG5pdL3YdqO/8ta4uTRuCHiGPikWX9d6oP3Nfc/sLwLxNlH8UwhpUUc/m48U+DnkVnwcCHBKeMOuYIx/J5gpm1t0hrlkuGhwpU/MNysuSfSJGKnHgAYao4Q8FbBfhEh/XMwgvhohPWOi26gx7dv2PTri7ahW9l1zkuSjtEy92NZ625lhzoNpb/V9Kobg1mgvAfe49EsoPRDUMwQquV2TLd2RdcgIe3STWPB98UGY1kXMBJ/xAkuWutmmZpEhT6WgNTvCZ4ac9HajyBZaBE5eQ8+UMSrJUzZvE2Xc1zl+MvU+ImKv+ND1mn8uSsf5J2o7vCmYBTd6C96gZiDERY6iOyf7tg/rf95ZYcpsFlz3TZomfKdMhFmW/+JexT4kzQt/9fLzY9RpNNP5vJCnEOtH2jBozNpfFJQ41NTk4j8SDYXx5/o+IBsyIiboA5H/8E5+rqRw6FbRhGil/iW9UVB/CR0sUjPr7abG0m/8lHscxwJ6wWLJqPLFcyURYRFLFXQi3+57tCD/5zu5b5XlEUx+FMbsgHkeuwXkn9hsqESL+L9PkoXCiKW2IBUI+6d+sReB5Luwh7hk/OkXZ+AzXuB8SnXOXiDSHpbxnTHL3zeo0YsJWWhPilk6BKUzY0fOFeBXD4q+zERh0/zsFKGQqGy4YQNBEbQozU8YSSP0xPq5naOwMafONOQ3JlVV18+MHPBAQp2qKPAm+77fiI6f1EM7qQmq0V50sIBsf5mi2soPhW4+4AYQbmuwa254DiP+FtszKAN0ChNqL/WITDTKWh1gacOxezyrHFYczEfmZXEb5I+bGD5zBdt08Kac9AOV9YDlgCQBAn3HJCeiVoI0UzFY7EwszWyIsSdv2F0XveTAoZYo0hwnJtDhk0pEptWquIxvnAcYbg060icWzAlYHzRFOTPrwX04PMSfmxTJpyB2/Ka6wF0ra2lZMacMS/YhZ2hEsDRiOmyLnsb4tq2YC3uoq7u6HH/ErnEZEjYqhgoGNBFd/jv7LU4+yfOZZNoj6xzB6254XoudCbc43fCh+oG8qvh6KnOe9jKM69Oai6AWYbW/Fya3mB2JUEGSzPuHqz4/+6szkbpM2jq6sWiB6L1MmxDPqPF81WWdbq8xdHTJ6OcEqfZObld+/R8V9vl0oYgw/NRTiXg5VMdBdvYjo018UAgufS1Oi71Z8R4KkmfK4HEfhiYRedd/25m5MtBUInja+pcNPJPYiar+4jAZdvcjDWLZgg38FvVoWDGIbCPghfNCD75552jHBVt5NtPYxcdH8ZWzW1zmRGLS6GxbRubctC8Q2LWgkE/s+qtxzGsO//iCd3NeLDi6/J1oraIofpmXFOcS+7u+kbHbw1dCq00J1J58xxzHhtv9awlIcl8yHu0xPYYbmzh7OkCsfo7F3Pui5d5Q1nxeBMTbi+cPmzKzn3n2vd9UDby/Ii4O1etNXk8z9xrVSYcDVqTWXwthMk37SLJvTN94D3bsKaA3YsnGDGAw2FBzGtz53F1JXbR7xHqEpixZ6i5/tiHk9HvmAtOupH391Fu/HLFhIZYOO0s4XFgfgStxjDbkgJYeNmrZAP/5K8BzjPw5ysufAGLEoppSOgwRcesvXOQJiNayRLBqLXkq/MCydMXhPDuKxRR0z/34a+62/LeDbEooUxxuUf0qt+EaMCOsK0Z6DAxEwavj9rfAElsCilXfv9Xb6FSSdunSNLTi7fOzVsGfh+bu+cleO63HAoaVREv3MMVn9vgZPJaQThPVN4pg9Dp39LRpw8VP5+eZyw4fXUb7IMxKGYxxYwwT8erwI80S92JoPsnjZN5qG85ZiPy4BIHV4NErSiJ6+Db0GL5zcSumUqZVgCe5V+L4e23zcd5VU+WcL4+Z7FJU6HpLs8MB/xmoE/IPz0oVFJqLwW3Kno/8I+vOjBtqtgAPn5/PIRV0jhq00z/m0u7fnhV+AfqNg2DLDeVkLXQLRGJMvbAKXFo4iHoC6HR0uXt4Ydfli3vjrLKE1v/DLPj4D0I+OY6Me6+1CPNdik1P/RV8BGtB9ppVV9vwDqRfxfSp5b4RUDcYIdORxfYrnJNP5Ku58oxrht6AD3St+p/WL1qdFI/c04eSwJxIGwpRAf5lfC9yMay3W7515NBDBULZMnyl5rRxPops9AkdE5ZB+iRA/2/YgtiYnFyd49bG/n1Lv3uTWf6fyrgNFA/EBf5L4zV/nxd+jm++MMXMeTKj6OfpPYb83PhiShGChd2d5VjhPwFN5s3fsu0oZZ/ALub+G71yjNiqxde6aNeciqdexf16S39RulR6XBxb7dxIIVcZWOPx4ViyRukXUdnnHtPf2n1KcMxH7S/VrRPg/JBiEfq9YbgxyIESR4IIoDvusxN/Y4V7t5XPiiK5yEFNR7FuTbMRlqAXapdTqBywwgNxiZY/ekvWlFeZKJ376G6JOw/C3oV4agV/srQhoWuWqIjmcxpGMBi2OO4lLkxWH2jWXKXKE5S3frbCNHP/9hw/i9Kik/xdgAJBsO52pr3mcAAAAAElFTkSuQmCC\");\r\n}\r\n.menu-icon-color-fixed .menu-fixed-item .menu-icon i{background-position:center;background-size:40px 40px;background-repeat:no-repeat}.menu-icon-color-fixed{position:fixed;display:block;border-radius:8px;box-shadow:0 0 5px rgba(0,0,0,.1)}.menu-fixed-list .menu-name{color:#333;font-size:9px;font-weight:700;line-height:1.2}.menu-fixed-list .menu-fixed-item{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;padding:5px}.menu-fixed-list .menu-icon{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:.5s linear;margin-bottom:5px}.menu-fixed-list .menu-fixed-item:hover{background-color:#efefef}.menu-fixed-list .menu-icon i{display:block;width:40px;height:40px}#back-top{bottom:100px}.menu-icon-color-fixed.dark{box-shadow:0 0 5px rgba(255,255,255,.2)}.menu-icon-color-fixed.dark .menu-fixed-list{background-color:#222;border-color:#444}.menu-icon-color-fixed.dark .menu-fixed-list .menu-name{color:#ddd}.menu-icon-color-fixed.dark .menu-fixed-list .menu-fixed-item.phone .menu-icon{background-color:#222}.menu-icon-color-fixed.dark .menu-fixed-list .menu-fixed-item:hover{background-color:#333}@media (min-width:992px){.menu-icon-color-fixed{right:10px;bottom:20%;z-index:1000;box-shadow:none}.menu-icon-color-fixed.right{right:10px;left:unset}.menu-icon-color-fixed.left{left:10px;right:unset}.menu-fixed-list{display:flex;flex-direction:column;align-items:center;background-color:#fff;border:1px solid #ddd;padding:5px 0;border-radius:8px}}@media (max-width:992px){.menu-icon-color-fixed{left:0;bottom:0;right:0;z-index:1000;border-radius:0}.menu-icon-color-fixed .menu-fixed-list{display:flex;flex-direction:row;align-items:center;padding:5px 0 0;padding-bottom:env(safe-area-inset-bottom);background-color:#fff}#back-top{bottom:calc(env(safe-area-inset-bottom) + 100px)}.menu-icon-color-fixed .menu-fixed-list .menu-fixed-item.phone .menu-icon{width:60px;height:60px;margin-top:-20px;background-color:#fff;padding:5px}.menu-icon-color-fixed .menu-fixed-list .menu-fixed-item.phone .menu-icon i{width:60px;height:60px;background-size:50px 50px}.menu-icon-color-fixed .menu-fixed-item.phone .menu-icon{position:relative}.menu-icon-color-fixed .menu-fixed-item.phone .menu-icon::after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 0 5px rgba(0,0,0,.1);content:\"\";display:block;border-radius:50%;width:60px;height:60px;z-index:-2000}.menu-icon-color-fixed.dark .menu-fixed-item.phone .menu-icon::after{box-shadow:0 0 5px rgba(255,255,255,.2)}}","data":"{\"isphone\":1,\"phonetel\":\"0849996883\",\"isphonesms\":1,\"phonesms\":\"0849996883\",\"iszalo\":1,\"zalo\":\"0849996883\",\"ispricequote\":1,\"pricequote\":\"Nhận báo giá\",\"pricequotelink\":\"javascript:OpenModelBaoGiaPopup()\",\"istestdrive\":1,\"testdrive\":\"Đăng ký lái thử\",\"testdrivelink\":\"javascript:OpenModelLaiThuPopup()\",\"position\":\"2\"}"};
    this.init = function () {
        if (this.data.html && this.data.html.length > 0) {
            $('#pluginjs').after(this.data.html);
            if (this.data.css && this.data.css.length > 0) {
                $('#pluginjs').after('<style>' + this.data.css + '</style>');
            }
            var jsonData = JSON.parse(this.data.data);

            switch (parseInt(jsonData['position'])) {
                case 1: // left
                    $(this.id).addClass('left');
                    break;
                case 2: // bottom
                    $(this.id).addClass('right');
                    break;
                default:
                    $(this.id).addClass('left');
                    break;

            }

            var htmlControls='';
            if(jsonData['ispricequote']&&jsonData['ispricequote']==1) {
                htmlControls+='<a class="menu-fixed-item pricequote" href="'+jsonData['pricequotelink']+'"><span class="menu-icon"><i class="icon-price"></i></span><span class="menu-name">'+jsonData['pricequote']+'</span></a>';
            }
            if(jsonData['isphonesms']&&jsonData['isphonesms']==1) {
                htmlControls+='<a class="menu-fixed-item sms" href="sms:'+jsonData['phonetel']+'"><span class="menu-icon"><i class="icon-sms"></i></span><span class="menu-name">Nhắn tin SMS</span></a>';
            }
            if (jsonData['isphone'] && jsonData['isphone'] == 1) {
                htmlControls+='<a class="menu-fixed-item phone" href="tel:'+jsonData['phonetel']+ '"><span class="menu-icon"><i class="icon-phone"></i></span><span class="menu-name">Gọi điện</span></a>';
            }
            if(jsonData['iszalo']&&jsonData['iszalo']==1) {
                htmlControls+='<a class="menu-fixed-item zalo" href="https://zalo.me/'+jsonData['zalo']+'" target="_blank"><span class="menu-icon"><i class="icon-zalo"></i></span><span class="menu-name">Chat Zalo</span></a>';
            }
            if(jsonData['istestdrive']&&jsonData['istestdrive']==1) {
                htmlControls+='<a class="menu-fixed-item testdrive" href="'+jsonData['testdrivelink']+'"><span class="menu-icon"><i class="icon-drive"></i></span><span class="menu-name">'+jsonData['testdrive']+'</span></a>';
            }
            $(this.id).find('.menu-fixed-list').append(htmlControls);
        }
    }
}
