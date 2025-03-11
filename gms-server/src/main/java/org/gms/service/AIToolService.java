package org.gms.service;

import dev.langchain4j.agent.tool.Tool;
import lombok.AllArgsConstructor;
import org.gms.client.Character;
import org.gms.constants.id.NpcId;
import org.gms.model.dto.DropSearchReqDTO;
import org.gms.net.server.Server;
import org.gms.net.server.channel.Channel;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * AI工具类
 */
@Service
@AllArgsConstructor
public class AIToolService {
    private final DropService dropService;

    @Tool(value = {"根据玩家id，进行每日签到"})
    public String autoSign(int playerId) {
        Character player = Server.getInstance().getCharacterById(playerId);
        if (player == null) {
            return "玩家不存在或者不在线";
        }
        player.getClient().getAbstractPlayerInteraction().openNpc(NpcId.BEI_DOU_NPC_BASE, "每日签到");
        return "执行成功";
    }

    @Tool(value = {"根据玩家名，获取玩家当前所在地图、等级"})
    public String getPlayerInfo(String playerName) {
        Character player = null;

        for (Channel channel : Server.getInstance().getAllChannels()) {
            player = channel.getPlayerStorage().getCharacterByName(playerName);
            if (player != null) {
                break;
            }
        }
        if (player == null) {
            return "玩家" + playerName + "不存在或者不在线";
        }
        return "玩家当前所在地图：" + player.getMap().getMapName() + "，等级：" + player.getLevel();
    }

    @Tool(value = {"根据怪物名，获取怪物掉落"})
    public List<String> getMobDrops(String mobName) {
        // todo 名字转id id转掉落
        dropService.getDropList(DropSearchReqDTO.builder().build(), false);
        dropService.getDropList(DropSearchReqDTO.builder().build(), true);


        return null;
    }

}
