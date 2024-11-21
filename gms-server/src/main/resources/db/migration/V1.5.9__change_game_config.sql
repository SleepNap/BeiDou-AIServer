-- 新增系统救援参数配置
INSERT INTO `game_config`(`config_type`, `config_sub_type`, `config_clazz`, `config_code`, `config_value`, `config_desc`) VALUES ('server', 'Game Mechanics', 'java.lang.Integer', 'system_rescue_maperror_changeid', '910000000', '卡地图救援系统，输入解救到指定地图ID[需要>0]，如果地图ID不存在则随机解救到[射手村，魔法密林，勇士部落，废弃都市，明珠港](Map exception error rescue system, input rescue to specified map ID[Need>0], if map ID does not exist, randomly rescue to [Henesys, Ellinia, Perion, Kerning City, Lith Harbor])');
INSERT INTO `game_config`(`config_type`, `config_sub_type`, `config_clazz`, `config_code`, `config_value`, `config_desc`) VALUES ('server', 'Game Mechanics', 'java.lang.String', 'system_rescue_maperror_message', '你的客户端不存在某些地图，\r\n请不要继续尝试前往这些地图。', '卡地图救援系统，给被救援的玩家留言一条上线可以查看到的弹窗信息。(Map error rescue system, leave a pop-up message for rescued players that can be viewed online.)');
