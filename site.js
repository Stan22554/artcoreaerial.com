const dialog=document.querySelector('#lightbox');
let opener;
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{
  opener=button;
  const image=document.querySelector('#large-image');
  image.src=button.dataset.image;
  image.alt=button.dataset.caption;
  document.querySelector('#image-caption').textContent=button.dataset.caption;
  dialog.showModal();
}));
document.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
dialog.addEventListener('close',()=>opener?.focus());
