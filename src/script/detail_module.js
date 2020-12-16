define(['jcookie'], () => {
    return {
        init: function() {
            //1.通过地址栏获取列表页面传入的sid。
            let $sid = location.search.substring(1).split('=')[1];

            if (!$sid) {
                $sid = 1;
            }

            //2.将sid传给后端
            $.ajax({
                url: 'http://192.168.64.2//dashboard/project-xiaomi/php/detail.php',
                data: {
                    sid: $sid
                },
                dataType: 'json'
            }).done(function(data) {
                $('#smallpic').attr('src', data.url);
                $('.loadtitle').html(data.title);
                $('.loadpcp').html(data.price);
            });

            //3.图片轮播效果

            const $left = $('#left');
            const $right = $('#right');
            const $lunbo = $('.wrap') //盒子
            const $picList = $('.spic-img img');
            const $btnList = $('#olist li');
            let timer = null;
            let $num = 0;



            $btnList.on('mouseover', function() {
                $num = $(this).index();
                lunbo()
            });

            function lunbo() {
                $btnList.eq($num).addClass('active').siblings('li').removeClass('active');
                $picList.eq($num).css('opacity', 1).siblings('img').css('opacity', 0);
            }

            $right.on('click', function() {
                $num++;
                if ($num > $btnList.size() - 1) {
                    $num = 0;
                }
                lunbo();
            })


            $left.on('click', function() {
                $num--;
                if ($num < 0) {
                    $num = $btnList.size() - 1;
                }
                lunbo();
            });


            $lunbo.hover(function() {
                clearInterval(timer);

            }, function() {
                timer = setInterval(function() {
                    $right.click();
                }, 3000);
            });

            timer = setInterval(function() {
                $right.click();
            }, 3000);

            // cookie取值
            let arrsid = [];
            let arrnum = [];

            function getcookiesid() {
                if ($.cookie('cookiesid') && $.cookie('cookienum')) {
                    arrsid = $.cookie('cookiesid').split(',');
                    arrnum = $.cookie('cookienum').split(',');
                }
            }

            $('.p-btn a').on('click', function() {
                getcookiesid();
                if ($.inArray($sid, arrsid) === -1) {
                    arrsid.push($sid);
                    $.cookie('cookiesid', arrsid, { expires: 5, path: '/' });
                    arrnum.push($('#count').val());
                    $.cookie('cookienum', arrnum, { expires: 5, path: '/' });
                } else {

                    let $index = $.inArray($sid, arrsid);

                    arrnum[$index] = parseInt(arrnum[$index]) + parseInt($('#count').val()); //重新赋值
                    $.cookie('cookienum', arrnum, { expires: 3, path: '/' });
                }
                confirm('你确定要加入购物车吗？');
            });
        }
    }
});