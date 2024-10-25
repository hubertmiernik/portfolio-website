import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TPhotographyModalState } from "./types";
import { RootState } from "@/src/store";

export enum EContent {
  DRONE = "DRONE",
  PRODUCT = "PRODUCT",
  COMMERCIAL = "COMMERCIAL",
}

const initialState: TPhotographyModalState = {
  isModalVisible: false,
  content: undefined,
};

type TModalContent = {
  content: EContent;
};

const photographyModalSlice = createSlice({
  name: "photographyModal",
  initialState,
  reducers: {
    showPhotographyModal: (
      state,
      { payload }: PayloadAction<TModalContent>,
    ) => {
      state.isModalVisible = true;
      state.content = payload.content;
    },
    hidePhotographyModal: (state) => {
      state.isModalVisible = false;
    },
  },
});

export const photographyModalReducerPath = photographyModalSlice.name;

export const { showPhotographyModal, hidePhotographyModal } =
  photographyModalSlice.actions;

export const isModalVisible = ({ photographyModal }: RootState) =>
  photographyModal.isModalVisible;

export const modalContent = ({ photographyModal }: RootState) =>
  photographyModal.content;

export default photographyModalSlice.reducer;
