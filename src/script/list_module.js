define(['pagination', 'jlazyload'], function() {
    return {
        init: function() {
            const $list = $('.ulist');
            let $array_default = [];
            let $array = [];
            let $prev = [];
            let $next = [];
            //1.渲染列表页面
            $.ajax({
                url: 'http://192.168.64.2/dashboard/project-xiaomi/php/pagelist.php',
                dataType: 'json'
            }).done(function(datalist) {
                // console.log(datalist);
                data = datalist.pagecontent;
                let $strhtml = '';
                $.each(data, function(index, value) {
                    $strhtml += `
                        <li>
                            <a href="detail.html?sid=${value.sid}">
                                <img class="lazy" data-original="${value.url}" width="200" height="200"/>
                                <h3>${value.title}</h3>
                                <p>${value.describe}</p>
                                <span>￥${value.price}</span>
                            </a>
                        </li>
                    `;
                });
                $list.html($strhtml);
                //懒加载
                $("img.lazy").lazyload({ effect: "fadeIn" });

                $('.ulist li').each(function(index, element) {
                    $array_default[index] = $(this);
                    $array[index] = $(this);
                });
                console.log($array_default);

                $('.page').pagination({
                    pageCount: datalist.pagesize,
                    jump: true,
                    prevContent: '上一页',
                    nextContent: '下一页',
                    callback: function(api) {
                        console.log(api.getCurrent());
                        $.ajax({
                            url: 'http://192.168.64.2/dashboard/project-xiaomi/php/pagelist.php',
                            data: {
                                page: api.getCurrent()
                            },
                            dataType: 'json'
                        }).done(function(datalist) {
                            data = datalist.pagecontent;
                            console.log(data);
                            let $strhtml = '';
                            $.each(data, function(index, value) {
                                $strhtml += `
                                        <li>
                                            <a href="detail.html?sid=${value.sid}">
                                                <img class="lazy" src="${value.url}"/>
                                                <h3>${value.title}</h3>
                                                <p>${value.describe}</p>
                                                <span>￥${value.price}</span>
                                            </a>
                                        </li>
                                    `;
                            });
                            $list.html($strhtml);
                            //懒加载
                            $("img.lazy").lazyload({ effect: "fadeIn" });

                            $('.list li').each(function(index, element) {
                                $array_default[index] = $(this);
                                $array[index] = $(this);
                            });
                            console.log($array_default);
                        });
                    }
                });


                $('.sort-li').eq(0).on('click', function() {
                    $.each($array_default, function(index, value) {
                        $list.append(value);
                    });
                });
                $('.sort-li').eq(1).on('click', function() {
                    for (let i = 0; i < $array.length - 1; i++) {
                        for (let j = 0; j < $array.length - i - 1; j++) {
                            $prev = parseFloat($array[j].find('span').html().substring(1));
                            $next = parseFloat($array[j + 1].find('span').html().substring(1));
                            if ($prev > $next) {
                                let temp = $array[j];
                                $array[j] = $array[j + 1];
                                $array[j + 1] = temp;
                            }
                        }
                    }
                    //遍历渲染。
                    $.each($array, function(index, value) {
                        $list.append(value);
                    });
                });

                $('.sort-li').eq(2).on('click', function() {
                    for (let i = 0; i < $array.length - 1; i++) {
                        for (let j = 0; j < $array.length - i - 1; j++) {
                            $prev = parseFloat($array[j].find('span').html().substring(1));
                            $next = parseFloat($array[j + 1].find('span').html().substring(1));
                            if ($prev < $next) {
                                let temp = $array[j];
                                $array[j] = $array[j + 1];
                                $array[j + 1] = temp;
                            }
                        }
                    }
                    $.each($array, function(index, value) {
                        $list.append(value);
                    });
                });
            });
        }
    }
});