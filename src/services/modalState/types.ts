import { EContent } from "@/src/services/modalState/slice";

export type TPhotographyModalState = {
  isModalVisible: boolean;
  content?: EContent;
};
