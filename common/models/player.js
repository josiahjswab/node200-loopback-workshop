'use strict';

module.exports = function(Player) {
  Player.disableRemoteMethodByName('deleteById');
};
