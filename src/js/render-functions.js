import { lightbox, galleryList } from '../main';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderGallery(arr) {
  if (arr.length == 0) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
    return;
  } else {
    const markup = arr
      .map(photo => {
        return `<li class="photos-list-item">
            <a class="photos-list-link" href="${photo.largeImageURL}">
            <img class="photo" src="${photo.webformatURL}" alt="${photo.tags}"/>
            </a>
            <ul class="photo-information-container">
            <li class="item-photo-information-container"><p><span class="accent">Likes</span></br>${photo.likes}</p></li>
            <li class="item-photo-information-container"><p><span class="accent">Views</span></br>${photo.views}</p></li>
            <li class="item-photo-information-container"><p><span class="accent">Comments</span></br>${photo.comments}</p></li>
            <li class="item-photo-information-container"><p><span class="accent">Downloads</span></br>${photo.downloads}</p></li>
            </ul>
            </li>`;
      })
      .join('');
    galleryList.insertAdjacentHTML('beforeend', markup);

    lightbox.refresh();
    return markup;
  }
}
