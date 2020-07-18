/*
 * action
 * Type: actionの種類を識別するための文字列
 * Payload: actionを実行する際に使う任意のデータ
 */

export const addLive = ({live}) => {
  return {
    // Type
    type: 'ADD_LIVE',
    // Payload
    live,
  };
};

export const deleteAllLives = ({live}) => {
  return {
    // Type
    type: 'DELETE_ALL_LIVES',
    live,
  };
};
