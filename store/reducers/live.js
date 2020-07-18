/*
 * reducers : storeを更新する(actionから渡されたpayloadと元のstateから、新たなstateを生成する)
 */

const initState = {
  lives: [],
};

/*
 * 第一引数: 元のstate(初期値)
 * 第二引数: action
 */
const reducer = (state = initState, action) => {
  /* actionのtypeによって処理を分ける */
  switch (action.type) {
    case 'ADD_LIVE':
      return {
        ...state,
        lives: [...state.lives, action.live],
      };
    case 'DELETE_ALL_LIVES':
      return {
        ...state,
        lives: [],
      };
    default:
      return state;
  }
};

export default reducer;
