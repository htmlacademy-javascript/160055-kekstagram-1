const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const imageUploader = document.querySelector('.img-upload__input');
const previewPicture = document.querySelector('.img-upload__preview');

imageUploader.addEventListener('change', () => {
  const file = imageUploader.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    previewPicture.src = URL.createObjectURL(file);
  }
});
