-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-12-18 09:02:49
-- 服务器版本： 10.4.16-MariaDB
-- PHP 版本： 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `project-xiaomi`
--

-- --------------------------------------------------------

--
-- 表的结构 `registry`
--

CREATE TABLE `registry` (
  `sid` int(3) UNSIGNED NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(40) DEFAULT NULL,
  `email` varchar(99) DEFAULT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `registry`
--

INSERT INTO `registry` (`sid`, `username`, `password`, `email`, `phone`, `date`) VALUES
(68, 'zhuzhu', '55361d944991c212ee7a09ce119016542cd7307d', 'zhu@qq.com', '15878459876', '2020-12-17 12:45:08'),
(69, 'zzz', '1c24270c7bcb5d9c67df0da14cc839070c5f8314', 'zzz@qq.com', '15878904567', '2020-12-18 00:48:12');

-- --------------------------------------------------------

--
-- 表的结构 `xiaomigoods`
--

CREATE TABLE `xiaomigoods` (
  `sid` tinyint(3) UNSIGNED NOT NULL,
  `url` varchar(300) DEFAULT NULL,
  `title` varchar(300) DEFAULT NULL,
  `describe` varchar(200) DEFAULT NULL,
  `price` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `xiaomigoods`
--

INSERT INTO `xiaomigoods` (`sid`, `url`, `title`, `describe`, `price`) VALUES
(1, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e75e528fb468aee107f551179aa0799.jpg?thumb=1&w=200&h=200&f=webp&q=90', 'Note 9 Pro', '一亿像素夜景相机，120Hz六档变速高刷屏', 1599),
(2, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/de2f71a797a74e1ca70f1fb4570bc026.jpg?thumb=1&w=200&h=200&f=webp&q=90', 'Note 9', '天玑 800U处理器，5000mAh电池，', 1299),
(3, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/13f10e47913f9dc82e6c6a6199f413cd.jpg?thumb=1&w=200&h=200&f=webp&q=90', 'Note 9 4G', '6000mAh长续航', 999),
(4, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米10 至尊版\r\n小米10 至尊版', '120X 变焦/120W秒充/120Hz屏幕', 5299),
(5, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7cf7a05df86a858a1f391a0378d8c27d.jpg?thumb=1&w=200&h=200&f=webp&q=90', 'Redmi K30S 至尊纪念版', '144Hz[7档]变速高刷屏', 2599),
(6, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3b19bf0e7e599c1bbbce510fb0dbc8bc.jpg?thumb=1&w=200&h=200&f=webp&q=90', 'Redmi K30 至尊版', '120Hz弹出全面屏，天玑1000+旗舰处理器', 1999),
(7, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/237942bfcaf2bbe82fbe966c2f584d69.jpg?thumb=1&w=200&h=200&f=webp&q=90', '腾讯黑鲨3S', '骁龙865处理器，120Hz刷新率', 3999),
(8, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c892a7640f58032489cbff8a948b50f9.jpg?thumb=1&w=200&h=200&f=webp&q=90', 'Redmi 9A', '5000mAh长循环大电量，6.53\"超大护眼屏幕', 599),
(9, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90', 'Redmi 红米电视 70英寸', '70英寸震撼巨屏，4K画质，细腻如真', 3299),
(10, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8b3fe3a07ef69fb4c959e39c768c7525.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米全面屏电视E32C', '全面屏设计，人工智能系统', 899),
(11, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef6b4e9b9151849b3b1fb1dbf069c6ed.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米全面屏电视E55A', '全面屏设计，人工智能语音', 2199),
(12, '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2b911be4c2f156bb6e4cf367c6080045.jpg?thumb=1&w=200&h=200', '米家空调', '出众静音，快速制冷热', 1499),
(13, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ec20453216dcd42f982cffe5fdbc3115.jpg?thumb=1&w=200&h=200&f=webp&q=90', '米家互联网洗烘一体机 Pro 10kg', '智能洗烘，省心省力', 2899),
(14, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b8c63a2024528fe5410ebe669b7d2407.jpg?thumb=1&w=200&h=200&f=webp&q=90', 'Redmi全自动波轮洗衣机1A 8kg', '一键操作，父母都爱用', 799),
(15, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/74e573c4c0d89048392d14831cc507d5.jpg?thumb=1&w=200&h=200&f=webp&q=90', 'Air 13.3\" 2019款', '新一代独立显卡', 3999),
(16, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7e5f89adf98ab3fccb34012b5209cd58.jpg?thumb=1&w=100&h=100&f=webp&q=90', '米家互联网烟灶套装（天然气）', NULL, 2298),
(17, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/011dd8493ad62f3793dbb63d9fbd3bc0.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米「小爱老师」', '英语提分利器', 999),
(18, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f0914c60fa1ab807972541b4e2b1a4cd.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米智能门锁 E', '告别钥匙，畅享便捷生活', 999),
(19, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e7c6e79433c883e1a022ec21402c1679.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米小爱音箱 Play', '听音乐、语音遥控家电', 99),
(20, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/44a30f0da2aacb66a0f896293ebc703f.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小爱音箱万能遥控版', '传统家电秒变智能', 149),
(21, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b42e49c6c0208f2de5a2f7a491a3af46.jpg?thumb=1&w=200&h=200&f=webp&q=90', '米家电饭煲4L', '890W 立体加热 ', 299),
(22, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3accd497afc0047cfbd40f442e3b17df.jpg?thumb=1&w=200&h=200&f=webp&q=90', '米家智能窗帘', '窗帘开合随心控', 799),
(23, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/550177d2e54387521bce9e78cb2949dd.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米体脂秤2', '轻松掌握身体脂肪率', 99),
(24, '//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/T1r_x_BgLT1RXrhCrK.jpg?thumb=1&w=100&h=100', '九号平衡车', NULL, 1999),
(25, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5fc35cf0af915a9e60f5d4ea220521ab.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米真无线蓝牙耳机Air 2 Pro', ' 主动降噪/持久续航/无线充', 699),
(26, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90', '高速无线充套装', '快速无线闪充，Qi充电标准', 149),
(27, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ea8e42faebf7d76a4cb42b8930cf9e46.jpg?thumb=1&w=200&h=200&f=webp&q=90', 'Redmi充电宝 10000mAh 标准版 白色', '10000mAh大电量 ', 59),
(28, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/eaf70e0e9905de6452f07b1f48fcc386.jpg?thumb=1&w=200&h=200&f=webp&q=90', 'Redmi充电宝 20000mAh 快充版', '大容量，	可上飞机 ', 99),
(29, '//i8.mifile.cn/v1/a1/5dd69c0a-8f4a-b42f-d840-6c5a47f2cd03!200x200.jpg', '小米插线板 5孔位', '多重安全保护', 39),
(30, '//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/321610e787393c42e5cb2e5730a7681d.jpg?thumb=1&w=200&h=200', '小米小爱蓝牙音箱 随身版', '小巧便携，一键唤醒小爱', 49),
(31, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9946e252a7c49662376c056ced004a20.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米小爱触屏音箱', '好听，更好看', 199),
(32, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/601d1ac94ca155a59a813bff1045e8b3.jpg?thumb=1&w=100&h=100&f=webp&q=90', '小米无线车充通用快充版', NULL, 129),
(33, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9eb0178e3bfeb7d170edd641fb4be4bc.jpg?thumb=1&w=200&h=200&f=webp&q=90', '高速无线充套装', '快速无线闪充，Qi充电标准', 149),
(34, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/1f32af53d1ad60f4980146f6a2b81019.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米无线充电宝青春版10000mAh', '能量满满，无线有线都能充', 129),
(35, '//i8.mifile.cn/v1/a1/b0ded71f-b235-8f99-ba1c-20f80c3a4231!200x200.jpg', '米家LED随身灯', '小巧轻便 5级亮度调节', 19.9),
(36, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8fde8a877fd4b12ad88119d9b6bc061.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米GaN充电器 Type-C 65W', '氮化镓黑科技 65W MAX 大功率快充', 149),
(37, '//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/553e9c2b-0023-e9a7-3bdb-26ec66a4007c.jpg?thumb=1&w=200&h=200', '移动电源高配版（10000mAh）', ' 轻薄设计，轻松出行', 129),
(38, '//cdn.cnbj0.fds.api.mi-img.com/b2c-miapp-a1/287594eb-b765-8db1-3255-0a05c4c07440.jpg?thumb=1&w=200&h=200', '小米二合一数据线100cm', '支持快充，安全保护', 24.9),
(39, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6c19fad90ad73f91e13c97cce2b15d82.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米9 SE 街头风保护壳', '简约时尚，多彩三色', 49),
(40, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cccac948e1b8ffb47f1fecde67692e60.jpg?thumb=1&w=200&h=200&f=webp&q=90', '米家飞行员太阳镜 Pro', '尼龙偏光，轻巧佩戴', 189),
(41, '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/57433a4b991b2a2ddc889f2d8d434655.jpg?thumb=1&w=200&h=200&f=webp&q=90', '小米巨能写中性笔10支装', '一支顶4支，超长顺滑书写', 9.99);

--
-- 转储表的索引
--

--
-- 表的索引 `registry`
--
ALTER TABLE `registry`
  ADD PRIMARY KEY (`sid`);

--
-- 表的索引 `xiaomigoods`
--
ALTER TABLE `xiaomigoods`
  ADD PRIMARY KEY (`sid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `registry`
--
ALTER TABLE `registry`
  MODIFY `sid` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- 使用表AUTO_INCREMENT `xiaomigoods`
--
ALTER TABLE `xiaomigoods`
  MODIFY `sid` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
