import {get} from 'lodash';
import {createSelector} from 'reselect';

// WEB3
const web3 = state => get(state, 'web3.connection', null);
export const web3Selector = createSelector(web3, w => w);

const account = state => get(state, 'web3.account', null);
export const accountSelector = createSelector(account, a => a);

const accountLoaded = state => get(state, 'web3.accountLoaded', false);
export const accountLoadedSelector = createSelector(accountLoaded, a => a);

const game = state => get(state, 'web3.game', null);
export const gameSelector = createSelector(game, a => a);

const gameLoaded = state => get(state, 'web3.gameLoaded', false);
export const gameLoadedSelector = createSelector(gameLoaded, a => a);

const tennisPlayer = state => get(state, 'web3.tennisPlayer', null);
export const tennisPlayerSelector = createSelector(tennisPlayer, a => a);

const tennisPlayerLoaded = state => get(state, 'web3.tennisPlayerLoaded', false);
export const tennisPlayerLoadedSelector = createSelector(tennisPlayerLoaded, a => a);

// USER
const ownedPlayers = state => get(state, 'user.ownedPlayers', []);
export const ownedPlayersSelector = createSelector(ownedPlayers, a => a);

const selectedPlayerId = state => get(state, 'user.selectedPlayerId', false);
export const selectedPlayerIdSelector = createSelector(selectedPlayerId, a => a);

const selectedPlayerDetails = state => get(state, 'user.selectedPlayerDetails', false);
export const selectedPlayerDetailsSelector = createSelector(selectedPlayerDetails, a => a);

// NEW PLAYER
const newPlayerName = state => get(state, 'newPlayer.name', null);
export const newPlayerNameSelector = createSelector(newPlayerName, a => a);

const newPlayerAge = state => get(state, 'newPlayer.age', null);
export const newPlayerAgeSelector = createSelector(newPlayerAge, a => a);

const newPlayerHeight = state => get(state, 'newPlayer.height', null);
export const newPlayerHeightSelector = createSelector(newPlayerHeight, a => a);