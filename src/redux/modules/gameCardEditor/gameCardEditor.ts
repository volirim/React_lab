import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import GameCardType from "@/types/mockapi";
import createGameCardObject from "@/utils/cardEditModal/createGameCardObject";

interface ValueInterface extends GameCardType {
  params: {
    url?: string;
    typeOfEvent: string;
  };
}

export interface InitialStateInterface {
  value: ValueInterface;
}

const initialState = { value: createGameCardObject() } as InitialStateInterface;

const gameCardSlice = createSlice({
  name: "gameCard",
  initialState,
  reducers: {
    setGameCard: (_state, action: PayloadAction<ValueInterface>) => ({ value: { ...action.payload } }),
    setGenres: (state, action: PayloadAction<{ [key: string]: string }>) => ({
      ...state,
      genres: { ...action.payload },
    }),
  },
});

export const { setGameCard, setGenres } = gameCardSlice.actions;

export default gameCardSlice.reducer;
