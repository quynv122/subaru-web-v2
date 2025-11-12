var slice = [].slice;
function OpenModelBaoGiaPopup() {
  $popupPriceQuote && $popupPriceQuote.showPopup();
}
function OpenModelLaiThuPopup() {
  $popupTestDrive && $popupTestDrive.showPopup();
}
function OpenModelUocTinhGiaPopup() {
  $("#modalUocTinhGia").modal("show");
}
function LoadEstimatedPriceCar() {
  var b = $("#cboTinhThanhUocTinhGiaPopup").find("option:selected"),
    a = parseInt($("#modalUocTinhGia").attr("data-price")),
    c = parseInt($("#modalUocTinhGia").attr("data-road")),
    d = parseInt($("#modalUocTinhGia").attr("data-insurance")),
    e = parseInt($("#modalUocTinhGia").attr("data-registration")),
    f = parseInt(b.attr("data-percent")),
    g = parseInt(b.attr("data-plate")),
    h = (a * f) / 100;
  $("#lblGiaXe").html(formatNumber(a)),
    $("#lblTyLePhanTram").html(formatNumber(f)),
    $("#lblPhiTruocBa").html(formatNumber(h)),
    $("#lblPhiDuongBo").html(formatNumber(c)),
    $("#lblBaoHiemDanSu").html(formatNumber(d)),
    $("#lblPhiBienSo").html(formatNumber(g)),
    $("#lblPhiKiemXe").html(formatNumber(e)),
    $("#lblTongCong").html(formatNumber(a + h + c + d + e + g));
}
!(function ($, a) {
  var b;
  (a.Starrr = b =
    (function () {
      function a(a, b) {
        var c, d, e;
        (this.options = $.extend({}, this.defaults, b)),
          (this.$el = a),
          this.createStars(),
          this.syncRating(),
          this.options.readOnly ||
            (this.$el.on(
              "mouseover.starrr",
              "a",
              ((c = this),
              function (a) {
                return c.syncRating(c.getStars().index(a.currentTarget) + 1);
              })
            ),
            this.$el.on(
              "mouseout.starrr",
              ((d = this),
              function () {
                return d.syncRating();
              })
            ),
            this.$el.on(
              "click.starrr",
              "a",
              ((e = this),
              function (a) {
                return (
                  a.preventDefault(),
                  e.setRating(e.getStars().index(a.currentTarget) + 1)
                );
              })
            ),
            this.$el.on("starrr:change", this.options.change));
      }
      return (
        (a.prototype.defaults = {
          rating: void 0,
          max: 5,
          readOnly: !1,
          emptyClass: "far fa-star",
          fullClass: "fas fa-star",
          change: function (a, b) {},
        }),
        (a.prototype.getStars = function () {
          return this.$el.find("a");
        }),
        (a.prototype.createStars = function () {
          var a, b, c;
          for (
            a = 1, c = [], b = this.options.max;
            1 <= b ? a <= b : a >= b;
            1 <= b ? a++ : a--
          )
            c.push(this.$el.append("<a href='#' />"));
          return c;
        }),
        (a.prototype.setRating = function (a) {
          return (
            this.options.rating === a && (a = void 0),
            (this.options.rating = a),
            this.syncRating(),
            this.$el.trigger("starrr:change", a)
          );
        }),
        (a.prototype.getRating = function () {
          return this.options.rating;
        }),
        (a.prototype.syncRating = function (d) {
          var f, a, b, c, e;
          for (
            d || (d = this.options.rating),
              f = this.getStars(),
              e = [],
              a = b = 1,
              c = this.options.max;
            1 <= c ? b <= c : b >= c;
            a = 1 <= c ? ++b : --b
          )
            e.push(
              f
                .eq(a - 1)
                .removeClass(
                  d >= a ? this.options.emptyClass : this.options.fullClass
                )
                .addClass(
                  d >= a ? this.options.fullClass : this.options.emptyClass
                )
            );
          return e;
        }),
        a
      );
    })()),
    $.fn.extend({
      starrr: function () {
        var a, c;
        return (
          (c = arguments[0]),
          (a = 2 <= arguments.length ? slice.call(arguments, 1) : []),
          this.each(function () {
            var d;
            if (
              ((d = $(this).data("starrr")) ||
                $(this).data("starrr", (d = new b($(this), c))),
              "string" == typeof c)
            )
              return d[c].apply(d, a);
          })
        );
      },
    });
})(window.jQuery, window),
  $(document).ready(function () {
    var f = 0;
    if (
      ($(window).scroll(function (b) {
        var a = $(this).scrollTop();
        a > 100 ? $("#back-top").fadeIn() : $("#back-top").fadeOut(),
          Math.abs(f - a) >= 100 &&
            (a > f
              ? ($("body").addClass("is-scrolldown"),
                $("body").removeClass("is-scrollup"))
              : ($("body").addClass("is-scrollup"),
                $("body").removeClass("is-scrolldown")),
            (f = a));
      }),
      $("#menu-fixed>.close").on("click touch", function () {
        $("#menu-fixed").remove();
      }),
      $("#back-top").on("click touch", function (a) {
        return $("html, body").animate({ scrollTop: 0 }, 800), !1;
      }),
      $(
        'a.linkscroll[href*="#"]:not([href="#"]), .detail-content a[href*="#"]:not([href="#"])'
      ).click(function () {
        if (
          location.hostname == this.hostname &&
          !$(this).attr("data-toggle")
        ) {
          var a = $(this.hash);
          if (
            (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]")).length
          )
            return (
              $("html, body").animate({ scrollTop: a.offset().top - 10 }, 800),
              !1
            );
        }
      }),
      $("#navbarSupportedContent").on("show.bs.collapse", function () {
        $("body").addClass("navbar-collapse-show");
      }),
      $("#navbarSupportedContent").on("hide.bs.collapse", function () {
        $("body").removeClass("navbar-collapse-show");
      }),
      $(".navbar-nav .caret").on("click touch", function (a) {
        a.preventDefault(),
          992 > $(window).width() && $(this).closest("li").toggleClass("show");
      }),
      $(".nav-vertical .caret").on("click touch", function (a) {
        a.preventDefault(), $(this).closest("li").toggleClass("show");
      }),
      $(".owl-banner-main").length &&
        $(".owl-banner-main").owlCarousel({
          loop: !0,
          items: 1,
          margin: 0,
          dots: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          nav: !0,
          navText: ["", ""],
          responsive: { 0: { nav: !1 }, 1e3: { nav: !0 } },
        }),
      $(".box-product .owl-product").length &&
        $(".box-product .owl-product").owlCarousel({
          loop: !0,
          items: 4,
          margin: 10,
          dots: !1,
          autoplay: !1,
          autoplayTimeout: 5e3,
          nav: !0,
          navText: ["", ""],
          responsive: {
            0: { items: 2 },
            768: { items: 2 },
            1e3: { items: 4, margin: 15 },
          },
        }),
      $(".social a").on("click touch", function () {
        var a = $(this).closest(".social"),
          b = $(a).attr("data-name"),
          c = $(a).attr("data-url"),
          d = $(this).attr("data-type");
        openSocialSharing(d, b, c);
      }),
      $(".wrap-content .show-more .btn").on("click touch", function () {
        var b = $(window).scrollTop(),
          a = $(this).attr("data-target");
        $(this).hasClass("show")
          ? ($(this)
              .text(ObjLangs.btn_view_show)
              .attr("title", ObjLangs.btn_view_show),
            $(this).removeClass("show"),
            $(a).find(".detail-content").addClass("max-height-content"))
          : ($(this)
              .text(ObjLangs.btn_view_hidden)
              .attr("title", ObjLangs.btn_view_hidden),
            $(this).addClass("show"),
            $(a).find(".detail-content").removeClass("max-height-content"),
            $("html, body").scrollTop(b));
      }),
      $(".wrap-content").each(function () {
        var a = parseInt($(this).outerHeight());
        a &&
          a < 400 &&
          ($(this).find(".detail-content").removeClass("max-height-content"),
          $(this).find(".show-more").remove());
      }),
      $(".pagination-list").each(function () {
        var d = parseInt($(this).attr("data-total")),
          e = parseInt($(this).attr("data-item")),
          f = parseInt($(this).attr("data-current")),
          a = getDataPagination(d, e, f, 1, !1);
        if (a.length > 0) {
          for (var c = '<ul class="pagination">', b = 0; b < a.length; b++)
            "previous" == a[b].class
              ? (c +=
                  '<li class="page-item previous"><a class="page-link" href="' +
                  a[b].url +
                  '">\u2794</a></li>')
              : "next" == a[b].class
              ? (c +=
                  '<li class="page-item next"><a class="page-link" href="' +
                  a[b].url +
                  '">\u2794</a></li>')
              : "active" == a[b].class
              ? (c +=
                  '<li class="page-item active"><span class="page-link">' +
                  a[b].name +
                  "</span></li>")
              : (c +=
                  '<li class="page-item"><a class="page-link" href="' +
                  a[b].url +
                  '">' +
                  a[b].name +
                  "</a></li>");
          (c += "</ul>"), $(this).html(c);
        }
      }),
      $(".product-item .btn-default").on("click touch", function () {
        OpenModelBaoGiaPopup();
      }),
      $(".starrr").each(function () {
        $(this).starrr({
          change: function (d, a) {
            var b = parseInt($(this).attr("data-id"));
            if (!isNaN(b) && !isNaN(a) && b > 0 && a > 0) {
              var c = $(this).attr("data-type");
              switch (c) {
                case "product":
                  voteProduct(null, b, a);
                  break;
                case "news":
                  voteNews(null, b, a);
              }
            }
          },
        });
      }),
      $(".captcha").each(function () {
        var a = this;
        refreshCaptcha(null, $(this).find("img")),
          $(this)
            .find("a")
            .on("click touch", function () {
              refreshCaptcha(null, $(a).find("img"));
            });
      }),
      $(".form-contactus .btn-default").on("click touch", function () {
        sendContact(null, ".form-contactus");
      }),
      $("input.number").each(function () {
        $(this).number(!0);
      }),
      $('input[data-type="date"]').datetimepicker({
        timepicker: !1,
        format: "d-m-Y",
      }),
      $(".captcha").each(function () {
        var a = this;
        refreshCaptcha(null, $(this).find("img")),
          $(this)
            .find("a")
            .on("click touch", function () {
              refreshCaptcha(null, $(a).find("img"));
            });
      }),
      $(".form-pricequote .btn").on("click touch", function () {
        sendBook(null, $(this).closest(".form-pricequote"));
      }),
      "undefined" != typeof typeCityTestDrive)
    ) {
      var b = $('#formtestdrive select[data-field="TinhThanh"]')[0];
      if (1 == typeCityTestDrive) loadDataCombobox(b, getDataCities());
      else if (sourceCityTestDrive)
        for (var a = 0; a < sourceCityTestDrive.length; a++)
          $(b).append(
            '<option value="1">' + sourceCityTestDrive[a] + "</option>"
          );
    }
    if (
      ($("#formtestdrive .btn-primary").on("click touch", function () {
        sendTestDrive(null, "#formtestdrive");
      }),
      "productdetail" == window.pageKey)
    ) {
      $("#cboTinhThanhUocTinhGiaPopup").each(function () {
        $(this).on("change", function () {
          LoadEstimatedPriceCar();
        });
        var a = parseInt($(this).attr("data-value"));
        $(this).val(a).trigger("change");
      });
      var c = $("#bigimages"),
        d = $("#thumimages"),
        g = !1;
      function e(a) {
        d.find(".owl-item").removeClass("selected"),
          d.find(".owl-item").eq(a).addClass("selected");
      }
      c
        .owlCarousel({
          items: 1,
          nav: !0,
          dots: !1,
          navText: ["", ""],
          responsive: { 0: { nav: !1 }, 768: { nav: !1 } },
        })
        .on("changed.owl.carousel", function (a) {
          g ||
            ((g = !0),
            d.trigger("to.owl.carousel", [a.item.index, 300, !0]),
            e(a.item.index),
            (g = !1));
        }),
        d
          .owlCarousel({
            items: 8,
            margin: 10,
            nav: !0,
            navText: ["", ""],
            dots: !1,
            responsive: {
              0: { items: 4 },
              768: { items: 6 },
              1e3: { items: 8 },
            },
          })
          .on("click", ".owl-item", function (a) {
            c.trigger("to.owl.carousel", [$(this).index(), 300, !0]),
              e($(this).index());
          }),
        e(0);
    }
  });
