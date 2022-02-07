import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GameCardType from "@/types/mockapi";

export interface InitialStateInterface {
  value: GameCardType;
}

const initialState = { value: {} } as InitialStateInterface;

const gameCardSlice = createSlice({
  name: "gameCard",
  initialState,
  reducers: {
    setGameCard: (_state, action: PayloadAction<GameCardType>) => {
      const newState = { value: { ...action.payload } };
      return newState;
    },
  },
});

export const { setGameCard } = gameCardSlice.actions;

export default gameCardSlice.reducer;
