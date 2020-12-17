define(['pagination', 'jlazyload'], function() {
    return {
        init: function() {
            const $goods = $('.main-r');
            const $lunbo = $('.banner-show');
            const $ulist = $('.sw-piclist');
            const $piclist = $('.sw-piclist li');
            const $circle = $('.sw-btnlist li');
            const $left = $('#show-left');
            const $right = $('#show-right');
            const $list = $('.left-nav-li');
            const $bitem = $('.banner-list');
            const $items = $('.item');
            let $timer = null;
            let $num = 0;
            // 数据渲染
            $.ajax({
                url: 'http://192.168.64.2//dashboard/project-xiaomi/php/listdata.php',
                dataType: 'json'
            }).done(function(data) {
                let $strhtml = '';
                $.each(data, function(index, value) {
                    if (index < 8) {
                        $strhtml += `
                        <div class="sj goods-sj">
                            <a href="javascript:;">
                                <img class="list lazy" data-original="${value.url}" width="200" height="200"/>
                                <h3 class="tit">${value.title}</h3>
                                <p class="con">${value.describe}</p>
                                <p class="price">￥${value.price}</p>
                            </a>
                        </div>
                    `;
                    }
                });
                $goods.html($strhtml);
                $("img.lazy").lazyload({ effect: "fadeIn" });
            })



            // 轮播图
            const $liwidth = $piclist.first().width();
            $ulist.width($liwidth * $piclist.size());
            $circle.on('click', function() {
                $num = $(this).index() - 1;
                capsulation()
            })
            $lunbo.hover(function() {
                clearInterval($timer);
                $left.show();
                $right.show();
            }, function() {
                $left.hide();
                $right.hide();
                $timer = setInterval(function() {
                    $right.click();
                }, 3000);
            })
            $left.on('click', function() {
                $num -= 2;
                capsulation()
            })

            $right.on('click', function() {
                capsulation()
            })

            function capsulation() {
                $num++;
                if ($num === $circle.size() + 1) {
                    $ulist.css('left', 0);
                    $num = 1;
                }

                if ($num === -1) {
                    $ulist.css('left', -$liwidth * $circle.size());
                    $num = $circle.size() - 1;
                }

                if ($num === $circle.size()) {
                    $circle.first().addClass('active').siblings('li').removeClass('active');
                } else {
                    $circle.eq($num).addClass('active').siblings('li').removeClass('active');
                }
                $ulist.stop(true).animate({
                    left: -$liwidth * $num
                })
            }
            $timer = setInterval(function() {
                $right.click();
            }, 3000);


            // 二级导航
            $list.hover(function() {
                $bitem.show();
                $(this).addClass('active').siblings('li').removeClass('active');
                $items.eq($(this).index()).show().siblings('.item').hide();

                let $scrolltop = $(window).scrollTop();
                let $bannertop = $('.banner').offset().top;
                if ($scrolltop > $bannertop) {
                    $bitem.css({
                        top: $scrolltop - $bannertop
                    });
                } else {
                    $bitem.css({
                        top: 0
                    });
                }
            }, function() {
                $bitem.hide();
                $list.removeClass('active');
            });

            $bitem.hover(function() {
                $(this).show();
            }, function() {
                $(this).hide();
            });

            //用户登录检测
            if (localStorage.getItem('loginname')) {
                $('.admin').show().css('color', '#ddd');
                $('.login').hide();
                $('.admin em').html(localStorage.getItem('loginname'));
            }

            //退出登录 - 删除本地存储
            $('.admin a').on('click', function() {
                $('.admin').hide();
                $('.login').show();
                localStorage.removeItem('loginname');
            });

        }

    }
})