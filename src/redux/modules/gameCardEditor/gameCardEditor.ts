import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GameCardType from "@/types/mockapi";

interface ValueInterface extends GameCardType {
  params: {
    url?: string;
    typeOfEvent: string;
  };
}

export interface InitialStateInterface {
  value: ValueInterface;
}

const initialState = { value: {} } as InitialStateInterface;

const gameCardSlice = createSlice({
  name: "gameCard",
  initialState,
  reducers: {
    setGameCard: (_state, action: PayloadAction<ValueInterface>) => {
      const newState = { value: { ...action.payload } };
      return newState;
    },
  },
});

export const { setGameCard } = gameCardSlice.actions;

export default gameCardSlice.reducer;
