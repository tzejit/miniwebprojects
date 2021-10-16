const Modal = () => {

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContainer.appendChild(modalContent);
  document.body.appendChild(modalContainer);

  window.onclick = (event) => {
    if (event.target == modalContainer) {
      hideModal();
    }
  }

  const setRepeatModal = (title, desc) => {
    modalContent.innerText = `Task: ${title}\n${desc}\nhas already been entered`;
  }

  const showModal = () => {
    modalContainer.style.display = "block";
  }

  const hideModal = () => {
    modalContainer.style.display = "none";
  }

  return {setRepeatModal, showModal};
}

export {Modal};