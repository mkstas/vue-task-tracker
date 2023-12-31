import { Ref, ref } from 'vue';

export const useOpenModal = () => {
  const isOpenModal: Ref<boolean> = ref(false);

  const openModal = () => (isOpenModal.value = true);

  const closeModal = () => (isOpenModal.value = false);

  return { isOpenModal, openModal, closeModal };
};
