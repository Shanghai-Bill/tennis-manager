// Author: Alex Roan
pragma solidity ^0.5.5;

import "./CompetingTennisPlayer.sol";
import "./TrainableTennisPlayer.sol";

contract TennisPlayer is CompetingTennisPlayer, TrainableTennisPlayer {

    function myPlayers() public view returns (uint[] memory) {
        return _tokensOfOwner(msg.sender);
    }
}