! function($) {
    const $form = $('form');
    const $username = $('#username');
    const $password = $('.password');
    const $email = $('.email');
    const $telphone = $('.phone');
    const $span = $('span');
    const $submit = $('#submit');
    const $hint = $('.hint');

    let $userflag = true;
    let $telpflag = true;
    let $passflag = true;
    let $emailflag = true;

    $username.on('focus', function() {
        $hint.first().html('中英文均可，最长14个英文或7个汉字');
        $hint.first().css('color', '#999');
    })

    $username.on('blur', function() {
        if ($(this).val() !== '') {
            let $strlen = $(this).val().replace(/[\u4e00-\u9fa5]/g, '**').length;
            if ($strlen > 0 && $strlen <= 14) {
                let $reg = /^[a-zA-Z\u4e00-\u9fa5]+$/;
                if ($reg.test($(this).val())) {
                    $span.eq(0).html('√');
                    $span.eq(0).css('color', 'green');
                    $userflag = true;
                } else {
                    $hint.eq(0).html('你输入的格式有误');
                    $hint.eq(0).css('color', 'red');
                    $userflag = false;
                }
            } else {
                $hint.eq(0).html('用户名的长度有误');
                $hint.eq(0).css('color', 'red');
                $userflag = false;
            }
        } else {
            $hint.eq(0).html('用户名不能为空');
            $hint.eq(0).css('color', 'red');
            $userflag = false;
        }
    })

    $telphone.on('focus', function() {
        $hint.eq(3).html('请输入11位正确的手机号码');
        $hint.eq(3).css('color', '#999');
    })
    $telphone.on('blur', function() {
        if ($(this).val() !== '') {
            let $reg = /^1[3|5|8]\d{9}$/;
            if ($reg.test($(this).val())) {
                $span.eq(3).html('√');
                $span.eq(3).css('color', 'green');
                $telpflag = true;
            } else {
                $hint.eq(3).html('手机号码格式有误');
                $hint.eq(3).css('color', 'red');
                $telpflag = false;
            }
        } else {
            $hint.eq(3).html('手机号码不能为空');
            $hint.eq(3).css('color', 'red');
            $telpflag = false;
        }
    })

    $password.on('focus', function() {
        $hint.eq(1).html('请输入密码，长度为8-14个字符');
        $hint.eq(1).css('color', '#999');
    })
    $password.on('blur', function() {
        if ($(this).val() !== '') {
            if ($(this).val().length >= 0 && $(this).val().length <= 14) {
                let $regnum = /\d+/;
                let $reguppercase = /[A-Z]+/;
                let $reglowercase = /[a-z]+/;
                let $other = /[\W_]+/;
                let $count = 0;
                if ($regnum.test($(this).val())) {
                    $count++
                }
                if ($reguppercase.test($(this).val())) {
                    $count++
                }
                if ($reglowercase.test($(this).val())) {
                    $count++
                }
                if ($other.test($(this).val())) {
                    $count++
                }

                switch ($count) {
                    case 1:
                        $span.eq(1).html('弱');
                        $span.eq(1).css('color', 'red');
                        $passflag = false;
                        break;
                    case 2:
                        $span.eq(1).html('中');
                        $span.eq(1).css('color', 'orange');
                        $passflag = true;
                        break;
                    case 3:
                    case 4:
                        $span.eq(1).html('强');
                        $span.eq(1).css('color', 'green');
                        $passflag = true;
                        break;
                }
            } else {
                $hint.eq(1).html('密码的长度有误');
                $hint.eq(1).css('color', 'red');
                $passflag = false;
            }
        } else {
            $hint.eq(1).html('用户密码不能为空');
            $hint.eq(1).css('color', 'red');
            $passflag = false;
        }
    })

    $email.on('focus', function() {
        $hint.eq(2).html('请输入电子邮箱');
        $hint.eq(2).css('color', '#999');
    })
    $email.on('blur', function() {
        if ($(this).val() !== '') {
            let $reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
            if ($reg.test($(this).val())) {
                $span.eq(2).html('√');
                $span.eq(2).css('color', 'green');
                $emailfalg = true;
            } else {
                $hint.eq(2).html('您输入的邮箱有误');
                $hint.eq(2).css('color', 'red');
                $emailflag = false;
            }
        } else {
            $hint.eq(2).html('电子邮箱不能为空');
            $hint.eq(2).css('color', 'red');
            $emailflag = false;
        }
    })

    // 4、 阻止跳转
    $submit.on('click', function() {
        if ($username.val() === '') {
            $hint.eq(0).html('用户名不能为空');
            $hint.eq(0).css('color', 'red');
            $userflag = false;
        }
        if ($telphone.val() === '') {
            $hint.eq(3).html('电话号码不能为空');
            $hint.eq(3).css('color', 'red');
            telpflag = false;
        }
        if ($password.val() === '') {
            $hint.eq(1).html('用户密码不能为空');
            $hint.eq(1).css('color', 'red');
            $passflag = false;
        }
        if ($email.val() === '') {
            $hint.eq(2).html('电子邮箱不能为空');
            $hint.eq(2).css('color', 'red');
            $emailflag = false;
        }
        if (!$userflag || !$telpflag || !$passflag || !$emailflag) {
            return false;
        }
    })

    $username.on('blur', function() {
        $.ajax({
            type: 'post',
            url: 'http://192.168.64.2/dashboard/project-xiaomi/php/reg.php',
            data: {
                xingming: $username.val()
            }
        }).done(function(data) { //data就是后端返回的结果
            if (!data) { //不存在
                $span.css('color', 'green').html('√');
            } else { //存在
                $hint.css('color', 'red').html('该用户名已存在');
            }
        });
    });
}(jQuery);