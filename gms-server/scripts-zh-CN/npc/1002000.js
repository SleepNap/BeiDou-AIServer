var status = 0;
var imaps = [104000000, 102000000, 101000000, 100000000, 103000000, 120000000, 105040300];
var maps = [102000000, 100000000, 101000000, 103000000, 120000000];
var cost = [1000, 1000, 800, 1000, 800];


var 明珠港_1 = "你所在的城镇是明珠港！好的，我会为你详细介绍一下#b明珠港#k。明珠港是你乘坐维多利亚号登陆金银岛的地方。很多刚从彩虹岛来到这里的新手都会在这里开始他们的旅程。这个小镇为新手提供了许多便利和指引，帮助他们熟悉游戏世界，并踏上冒险的旅途。在这里，你可以接取任务、学习技能、购买装备，为接下来的旅程做好准备";
var 明珠港_2 = "这是一个宁静的小镇，背后是宽阔的水域，这要归功于港口位于岛屿的西端。这里的大多数人都是或者曾经是渔民，因此他们可能看起来有些令人畏惧，但如果你主动与他们交谈，他们会变得非常友好。这些渔民们经历了海上的风雨，有着丰富的故事和经验，他们乐于与新来的人分享自己的生活和见闻。在明珠港，你可以感受到一种淳朴而热情的氛围，这里的人们都乐于助人，愿意为需要帮助的人伸出援手。";
var 明珠港_3 = "镇子周围是一片广袤而美丽的草原。这里的怪物大多体型小巧且性格温顺，对于初来乍到的新手冒险家来说，是绝佳的练级场所。如果你还未决定自己的职业方向，那么这片草原将是你快速提升等级、熟悉游戏机制的好地方。在这里，你可以轻松击败怪物，积累经验值，同时还有机会获得丰厚的奖励，为你的冒险之旅打下坚实的基础。";
var 勇士部落_1 = "好的，我会为你详细介绍一下“#b勇士部落#k”。它是一座位于金银岛最北端的战士之城，四周环绕着险峻的岩石山脉。这里的气氛并不友善，生存条件极为苛刻，只有真正的强者才能在这里生存下来。勇士部落是战士们的试炼场，他们在这里接受最严酷的挑战，锤炼自己的意志和技艺，以追求更高的荣耀和力量。";
var 勇士部落_2 = "在这片高地周围，你会发现一棵异常瘦削的树，一只野猪在四处奔跑，还有猴子遍布整个岛屿。此外，这里还隐藏着一个深邃的山谷。当你深入其中时，会遇到一头体型庞大的巨龙，它的力量与其体型相称，令人畏惧。因此，进入这个山谷时一定要格外小心，或者干脆避免前往，以免遭遇不测。";
var 勇士部落_3 = "如果你想要成为一名#b战士#k，那么你需要找到#r武术教练#k，也就是勇士部落的首领。如果你的等级达到了10级或以上，并且拥有不错的力量属性，他可能会将你接纳为战士。但如果你还没有达到这个标准，那么最好继续努力训练，直到你满足要求为止。战士之路充满挑战，但只要你坚持不懈，就一定能够成为真正的勇士。"
var 魔法密林_1 = "好的，我来为你详细介绍一下“#b魔法密林#k”。这是一座位于金银岛最东端的魔法师之城，被高耸而神秘的树木所覆盖。在这里，你还能遇到一些精灵。通常情况下，精灵们并不太喜欢人类，所以最好保持低调，不要打扰它们，努力赢得它们的好感。魔法密林是魔法师们学习魔法的圣地，这里充满了神秘与奇幻的气息，等待着勇敢的冒险家们前来探索。"; 
var 魔法密林_2 = "在魔法密林附近的森林中，你会发现绿色的史莱姆(绿水灵)、行走的蘑菇、猴子以及僵尸猴子等生物。当你深入森林时，还会遇到骑着飞天扫帚在空中飞行的女巫。不过，我要提醒你的是，除非你真的非常强大，否则我建议你最好不要靠近她们。这些女巫通常都拥有强大的魔法力量，对于实力不足的冒险家来说，可能会构成极大的威胁。"
var 魔法密林_3 = "如果你想要成为一名#b魔法师#k，那么你需要找到#r老膜法汉斯#k，他是魔法密林的领袖。如果你的等级达到了8级或以上，并且拥有不错的智力属性，他可能会将你接纳为魔法师。但如果你还没有达到这个标准，那么你可能需要继续狩猎和训练，直到你满足要求为止。魔法师之路虽然充满挑战，但只要你拥有坚定的信念和不懈的努力，就一定能够掌握强大的魔法力量。";
var 射手村_1 = "好的，我来为你详细介绍一下“#b射手村#k”。这是一座弓箭手之城，位于金银岛的最南端，坐落在一片广阔的平原之上，四周被茂密的森林和广袤的草原所环绕。这里的天气非常宜人，周围资源丰富，非常适合居住。射手村是弓箭手们的聚集地，他们在这里学习弓箭技巧，锻炼自己的实力。如果你对弓箭手这个职业感兴趣，不妨亲自前往射手村一探究竟。";
var 射手村_2 = "在草原的周围，你会遇到一些弱小的怪物，比如蜗牛、蘑菇和猪。但据我听说，在与射手村相连的某个地方，有一个被称为“猪猪公园”的深处，那里时不时会出现一种巨大而强大的蘑菇，名叫“蘑菇王”。这个蘑菇王虽然不常出现，但一旦遇到，对于实力不足的冒险家来说可能会是一场严峻的挑战。因此，在探索猪猪公园时，一定要小心谨慎。";
var 射手村_3 = "如果你想要成为一名#b弓箭手#k，你需要前往射手村找到NPC“赫丽娜”。当你的等级达到或超过10级，并且拥有不错的敏捷属性时，她可能会让你成为弓箭手。但如果你还没有达到这个标准，那么你需要继续努力训练，提升自己的实力，然后再次尝试。赫丽娜是射手村的领袖之一，也是弓箭手们的导师，她会为你提供必要的指导和帮助，让你在弓箭手的道路上越来越强。";
var 废弃都市_1 = "好的，我来为你详细介绍一下“#b废弃都市#k”。这是一座盗贼之城，位于金银岛的西北部。尽管名为“废弃都市”，但这里并非真正被遗弃，而是盗贼们的一个隐秘据点。这里的建筑物大多残破不堪，给人一种荒凉而神秘的感觉。然而，在废弃的街道上，你仍然可以发现盗贼们忙碌的身影，他们在这里交流技巧，策划行动。尽管城市上空常常笼罩着黑云，但如果你能攀登到高处，你将有机会目睹到那里独特而美丽的日落景色。废弃都市是冒险岛上一个充满挑战与机遇的地方，等待着勇敢的冒险家们前来探索。";
var 废弃都市_2 = "从废弃都市出发，你可以进入多个地下城进行探险。你可以选择前往一个沼泽地带，那里鳄鱼和毒蛇遍布，充满了危险与挑战。或者，你也可以选择进入一条充满鬼魂和蝙蝠的地铁隧道，感受那阴森恐怖的氛围。而在最深处，你将遇到名为“多尔”的怪物，它的体型庞大，危险程度丝毫不亚于巨龙，是林中之城最强大的存在之一。这些地下城都充满了未知与危险，只有勇敢的冒险家才能深入其中，揭开它们的秘密。";
var 废弃都市_3 = "当然，如果你想要成为一名#b飞侠#k，你需要前往废弃都市寻找#r达克鲁#k。他是这座城市黑暗之心的主宰，掌握着成为飞侠的秘密。如果你的等级达到了10级或以上，并且拥有足够的敏捷属性（DEX），他可能会认可你的潜力，让你踏上飞侠之路。但如果你还没有达到这个标准，那么你需要继续外出狩猎，锻炼自己的技能，提升自己的实力，直到你满足条件为止。飞侠之路充满了挑战与机遇，只有勇敢且机敏的冒险家才能在这条路上走得更远。";
var 诺特勒斯_1 = "#m120000000#它是一艘停泊在金银岛魔法密林与手村之间的潜水艇。这艘潜水艇是众多海盗的家园，他们在这里过着海上漂泊的生活。在潜水艇上，你可以欣赏到与明珠同样美丽的海洋风光。虽然身处海底，但透过潜水艇的窗户，你依然能感受到大海的壮阔与宁静。";
var 诺特勒斯_2 = "#m120000000#停泊在射手村和埃琳娜之间，所以如果你稍微走出去一点，就能同时欣赏到两个城镇的景色。镇上的海盗们都非常热情友好。";
var 诺特勒斯_3 = "如果你真的想成为一名#b海盗#k，那么你最好去见见#m120000000#的船长，#r#p1090000##k。如果你的等级超过10级，并且敏捷属性（DEX）达到20，那么她可能会让你成为海盗。如果你还没有达到这个水平，那么你需要更加努力训练，直到你达到要求！";
var 林中之城_1 = "好的，我来给你详细介绍一下#b林中之城#k。这是一个位于金银岛东南部的森林小镇，大致位于射手村和蚂蚁洞窟之间。镇上有一家旅馆，所以你可以在地下城探险一整天后去那里休息。总的来说，这是一个安静的小镇。";
var 林中之城_2 = "在旅馆前面，有一位名叫#r克里斯拉玛#k的老和尚。关于这位和尚，没有人知道太多。据说他会从旅行者那里收集材料并制作一些东西，但我不太清楚具体细节。如果你在那个地区有任何事情要做，请帮我查一下";
var 林中之城_3 = "从林中之城出发，向东走，你会发现通往金银岛最深处的蚂蚁隧道。那里有很多恶心且强大的怪物，所以如果你以为这只是散步那么简单，那你可能会以尸体的形式出来。在进去之前，你需要做好充分的准备，迎接一场艰难的旅程。";
var 林中之城_4 = "这是我听说的……据说在林中之城有一个秘密入口，通往一个未知的地方。据说，一旦你深入其中，你会发现一堆会移动的黑石。我近期想亲眼看看那到底是什么……";


var townText = [[明珠港_1, 明珠港_2, 明珠港_3], [勇士部落_1, 勇士部落_2, ""], [魔法密林_1, 魔法密林_2, 魔法密林_3], [射手村_1, 射手村_2, 射手村_3], [废弃都市_1, 废弃都市_2, 废弃都市_3], [诺特勒斯_1,诺特勒斯_2,诺特勒斯_3],[林中之城_1,林中之城_2,林中之城_3,林中之城_4]];
var selectedMap = -1;
var town = false;

function start() {
    cm.sendNext("你想去其他城镇吗？只要有一点钱，我就可以安排。虽然有点贵，但我给新手提供90%的特别折扣。");
}

function action(mode, type, selection) {
    status++;
    if (mode != 1) {
        if ((mode == 0 && !town) || mode == -1) {
            if (type == 1 && mode != -1) {
                cm.sendNext("这个城镇有很多值得一看的地方。如果你想去别的地方，告诉我一声。");
            }
            cm.dispose();
            return;
        } else {
            status -= 2;

            if (status < 1) {
                cm.dispose();
                return;
            }
        }

    }
    if (status == 1) {
        cm.sendSimple("如果这是你第一次来到这个地方，可能会对这里感到困惑是可以理解的。如果你对这个地方有任何问题，尽管问吧。\r\n#L0##b金银岛上有哪些类型的城镇？#l\r\n#L1#请带我去别的地方。#k#l");
    } else if (status == 2) {
        if (selection == 0) {
            town = true;
            var text = "金银岛中存在7大主城区域. 你想了解哪一个?#b";
            for (var i = 0; i < imaps.length; i++) {
                text += "\r\n#L" + i + "##m" + imaps[i] + "##l";
            }
            cm.sendSimple(text);
        } else if (selection == 1) {
            var selStr = cm.getJobId() == 0 ? "所有新手都可以享受90%的特别折扣。好的，你想去哪里？#b" : "看来你不是新手, 嗯? 那我只能收你全价了. 你想去哪儿?#b";
            for (var i = 0; i < maps.length; i++) {
                selStr += "\r\n#L" + i + "##m" + maps[i] + "# (" + (cost[i] / (cm.getJobId() == 0 ? 10 : 1)) + "  金币)#l";
            }
            cm.sendSimple(selStr);
        }
    } else if (town) {
        if (selectedMap == -1) {
            selectedMap = selection;
        }
        if (status == 3) {
            cm.sendNext(townText[selectedMap][status - 3]);
        } else {
            townText[selectedMap][status - 3] == undefined ? cm.dispose() : cm.sendNextPrev(townText[selectedMap][status - 3]);
        }
    } else if (status == 3) {
        selectedMap = selection;
        cm.sendYesNo("我猜你不需要在这里。你真的想要移动到 #b#m" + maps[selection] + "##k 吗？好吧，这将花费你 #b" + (cost[selection] / (cm.getJobId() == 0 ? 10 : 1)) + " 金币#k。你觉得怎么样？");
    } else if (status == 4) {
        if (cm.getMeso() < (cost[selectedMap] / (cm.getJobId() == 0 ? 10 : 1))) {
            cm.sendNext("你的金币不够。以你的能力来说，不该只挣这么点！");
        } else {
            cm.gainMeso(-(cost[selectedMap] / (cm.getJobId() == 0 ? 10 : 1)));
            cm.warp(maps[selectedMap]);
        }
        cm.dispose();
    }
}