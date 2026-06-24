// ---- Data: replace src with your own images ----
const photos = [
  { src: "https://s.yimg.com/ny/api/res/1.2/a9VVCUKVihDavt6BWgm.Jg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTY0MDtjZj13ZWJw/https://s.yimg.com/os/creatr-uploaded-images/2019-11/7c015730-112b-11ea-bf7f-4dd0aa5ef3e0", title: "Snow River", category: "landscape" },
  { src: "https://petapixel.com/assets/uploads/2017/10/Atacama-Desert-Jesse-Echevarri%CC%81a-1-of-1-1-800x534.jpg", title: "Atacama Desert", category: "landscape" },
  { src: "https://www.muchbetteradventures.com/magazine/content/images/2019/10/29122602/iStock-971053374.jpg", title: "Ice Skating", category: "landscape" },
  { src: "https://images.stockcake.com/public/9/6/0/960c2271-b753-4bde-af3a-c014131c7a06_large/earth-from-above-stockcake.jpg", title: "Earth View", category: "landscape" },
  { src: "https://cdn.travelstride.com/media/wysiwyg/1landscape-2265897_1920_1.jpg", title: "Beach View", category: "landscape" },
  { src: "https://www.worldatlas.com/r/w1200/upload/5b/c7/26/georgia-aquarium.jpg", title: "Underwater View", category: "landscape" },
  { src: "https://modernfarmer.com/wp-content/uploads/2014/08/bighornsheep12001.jpg", title: "Bighorn Sheep", category: "animals" },
  { src: "https://imageio.forbes.com/specials-images/imageserve/67c038498506d05636169e92/Paris--France-best-cities-to-visit/0x0.jpg?format=jpg&width=960", title: "Paris", category: "city" },
  { src: "https://www.travelandleisure.com/thmb/YWguIWwKKgQ1FiA5DUxQ0OOvnUY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/singapore_CITYBEAUTY1222-79fecfb20fc148a88bda4f5af6f07865.jpg", title: "Singapore", category: "city" },
  { src: "https://images.adsttc.com/media/images/60b6/09d7/f91c/8199/fb00/00cd/newsletter/shutterstock_1196821240.jpg?1622542766", title: "Dubai", category: "city" },
  { src: "https://img.magnific.com/premium-photo/beijing-tiananmen-square-cbd-area-china-city_1092689-23742.jpg?semt=ais_hybrid&w=740&q=80", title: "Tiananmen Square, Beijing", category: "city" },
  { src: "https://media.cnn.com/api/v1/images/stellar/prod/gold-best-portrait-20250926111235023.jpg?c=16x9&q=w_1383,c_fill", title: "Birds", category: "portrait" },
  { src: "https://121clicks.com/wp-content/uploads/2023/10/nature-best-photography-awards-winners-17.jpg", title: "Forest Lion", category: "animals" },
  { src: "https://a-z-animals.com/media/animals/images/original/rabbit_11.jpg", title: "Rabbit", category: "animals" },
  { src: "https://cdn.theatlantic.com/thumbor/yGRSht3TpDVjCTA1ioXGy9x6ryc=/900x600/media/img/photo/2024/10/winners-wildlife-photographer-year/a01_Vinod/original.jpg", title: "Monkey", category: "animals" },
  { src: "https://preview.redd.it/this-is-the-best-animal-in-the-world-v0-1yqr8sff8h471.jpg?width=640&crop=smart&auto=webp&s=04450cbd380ffe6633fd5170ac92769dba95d7d9", title: "Black Panther", category: "animals" },
  { src: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/1747B/production/_95355359_ce106843-eda6-4b52-9f55-5476d40a14e4.jpg", title: "Blue Whale", category: "animals" },
  { src: "https://drscdn.500px.org/photo/1123877169/q%3D80_m%3D1024/v2?sig=18c4abf684cc46512a6a2c5f9b9301c1599e37eac1a9357cf30f6f45f484ba9d", title: "Duck", category: "animals" },
  { src: "https://drscdn.500px.org/photo/1123997260/q%3D80_m%3D1024/v2?sig=185dbf738b99e8a5e5cf3c6d62ce0b1c2b19fc26176792d9159db456c9f24b33", title: "Fox", category: "animals" },
  { src: "https://media.istockphoto.com/id/520839324/photo/wild-elephant.jpg?s=612x612&w=0&k=20&c=jnDbuC5oqdaH_OCVsBGa19A5sCx7EVKj94DdVA6Xe0g=", title: "Elephant", category: "animals" },
  { src: "https://thumbs.dreamstime.com/b/zebra-black-shine-zebra-black-shine-photo-animal-world-146296650.jpg", title: "Zebra", category: "animals" },
  { src: "https://media.istockphoto.com/id/635731456/photo/green-turtle.jpg?s=612x612&w=0&k=20&c=W_QxMxGJftM-7i42Eyp7LYTDTXDnrQSmh8ZJelhULN0=", title: "Green Turtle", category: "animals" },
  { src: "https://i.pinimg.com/736x/99/e5/57/99e5576d8ef806338b3731de3c10334b.jpg", title: "Tiger", category: "animals" },
  { src: "https://c02.purpledshub.com/uploads/sites/41/2025/02/GOLD_Tom-Nickels_Polar-retriever.jpg?w=1200&webp=1", title: "Dog in the Snow", category: "animals" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", title: "Mountain Sunset", category: "landscape" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80", title: "Forest Path", category: "landscape" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80", title: "Desert Dunes", category: "landscape" },
  { src: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=1200&q=80", title: "Lion Portrait", category: "animals" },
  { src: "https://static.vecteezy.com/system/resources/thumbnails/057/163/050/small/african-giraffe-silhouette-at-sunset-underneath-an-acacia-tree-in-the-savannah-grasslands-free-photo.jpeg", title: "Giraffe", category: "animals" },
  { src: "https://thumbs.dreamstime.com/b/wildlife-spring-art-scene-nature-bird-beautiful-owl-flowers-barn-light-pink-bloom-clear-foreground-background-196612307.jpg", title: "Owl", category: "animals" },
  { src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&q=80", title: "New York City", category: "city" },
  { src: "https://resources.matcha-jp.com/resize/720x2000/2024/11/26-211996.webp", title: "Tokyo Streets", category: "city" },
  { src: "https://geo.northeastern.edu/wp-content/uploads/2022/02/Ireland-Blog-Images.png", title: "London Bridge", category: "city" },
  { src: "https://services.meteored.com/img/article/quels-sont-les-10-plus-beaux-lacs-du-monde-1761396726739_512.jpeg", title: "Lake Reflection", category: "landscape" },
  { src: "https://t4.ftcdn.net/jpg/03/09/28/45/360_F_309284534_T1davRbzZj2v3Y5KLFZCfCk0ShdL5AbP.jpg", title: "Northern Lights", category: "landscape" },
  { src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=1200&q=80", title: "Rolling Hills", category: "landscape" },
  { src: "https://media.istockphoto.com/id/170024624/photo/gray-wolf-napping-in-winter.jpg?s=612x612&w=0&k=20&c=wKncGx7RG7Q2uEmpf_4hjczzMUoI8Ego69nI9f7kbJs=", title: "Wolf in Snow", category: "animals" },
  { src: "https://static.vecteezy.com/system/resources/thumbnails/027/141/807/small/ai-generated-brown-horse-animal-in-motion-running-on-the-beach-bright-blue-sky-backdrop-free-photo.jpeg", title: "Horse Running", category: "animals" },
  { src: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1200&q=80", title: "Hong Kong Skyline", category: "city" },
  { src: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?w=1200&q=80", title: "Venice Canals", category: "city" },
  { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80", title: "Sydney Opera House", category: "city" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80", title: "Smiling Portrait", category: "portrait" },
  { src: "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=1200&q=80", title: "Elderly Portrait", category: "portrait" },
  { src: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=1200&q=80", title: "Studio Portrait", category: "portrait" },
  { src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&q=80", title: "Waterfall in Forest", category: "landscape" },
  { src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&q=80", title: "Snowy Mountain Peak", category: "landscape" },
  { src: "https://img.freepik.com/premium-photo/green-hills-are-most-beautiful-nature-world_882954-87932.jpg", title: "Green Valley", category: "landscape" },
  { src: "https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2014/12/maya-bay-koh-phi-phi-thailand.jpg?fit=970%2C546&ssl=1", title: "Tropical Beach", category: "landscape" },
];

const galleryEl = document.getElementById('gallery');
const filtersEl = document.getElementById('filters');
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbNum = document.getElementById('lbNum');
const lbTitle = document.getElementById('lbTitle');
const lbCaptionWrap = document.getElementById('lbCaptionWrap');

let activeCategory = 'all';
let currentIndex = 0;

// ---- Build filter pills ----
const categories = ['all', ...new Set(photos.map(p => p.category))];
filtersEl.innerHTML = categories.map(cat =>
  `<button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-cat="${cat}">${cat}</button>`
).join('');

filtersEl.addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  activeCategory = btn.dataset.cat;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGallery();
});

// ---- Film-roll style frame numbering, e.g. 0001A ----
function frameNumber(i) {
  return String(i + 1).padStart(4, '0') + 'A';
}

// ---- Render gallery cards ----
function renderGallery() {
  galleryEl.innerHTML = photos.map((p, i) => {
    const show = activeCategory === 'all' || p.category === activeCategory;
    return `
      <div class="card ${show ? '' : 'hidden'}" data-index="${i}" tabindex="0" role="button" aria-label="Open ${p.title}">
        <img src="${p.src}" alt="${p.title}" loading="lazy">
        <div class="card-info">
          <div class="num">${frameNumber(i)}</div>
          <div class="title">${p.title}</div>
        </div>
      </div>`;
  }).join('');
}
renderGallery();

// ---- Visible (filtered) index list, used for next/prev ----
function visibleIndices() {
  return photos
    .map((p, i) => ({ p, i }))
    .filter(({ p }) => activeCategory === 'all' || p.category === activeCategory)
    .map(({ i }) => i);
}

// ---- Open lightbox ----
galleryEl.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (!card || card.classList.contains('hidden')) return;
  currentIndex = parseInt(card.dataset.index, 10);
  openLightbox();
});

galleryEl.addEventListener('keydown', e => {
  if (e.key !== 'Enter' && e.key !== ' ') return;
  const card = e.target.closest('.card');
  if (!card || card.classList.contains('hidden')) return;
  e.preventDefault();
  currentIndex = parseInt(card.dataset.index, 10);
  openLightbox();
});

function openLightbox() {
  updateLightboxImage();
  lightbox.classList.add('open');
  lbCaptionWrap.style.display = 'block';
  document.body.style.overflow = 'hidden';
  document.getElementById('lbClose').focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lbCaptionWrap.style.display = 'none';
  document.body.style.overflow = '';
}

function updateLightboxImage() {
  const p = photos[currentIndex];
  lbImage.src = p.src;
  lbImage.alt = p.title;
  lbImage.style.animation = 'none';
  requestAnimationFrame(() => { lbImage.style.animation = 'pop .35s ease forwards'; });

  const vis = visibleIndices();
  const posInSet = vis.indexOf(currentIndex) + 1;
  lbNum.textContent = frameNumber(currentIndex) + '  ·  ' + String(posInSet).padStart(2, '0') + ' / ' + String(vis.length).padStart(2, '0');
  lbTitle.textContent = p.title;
}

function showNext() {
  const vis = visibleIndices();
  let pos = vis.indexOf(currentIndex);
  pos = (pos + 1) % vis.length;
  currentIndex = vis[pos];
  updateLightboxImage();
}

function showPrev() {
  const vis = visibleIndices();
  let pos = vis.indexOf(currentIndex);
  pos = (pos - 1 + vis.length) % vis.length;
  currentIndex = vis[pos];
  updateLightboxImage();
}

document.getElementById('lbClose').addEventListener('click', closeLightbox);
document.getElementById('lbNext').addEventListener('click', showNext);
document.getElementById('lbPrev').addEventListener('click', showPrev);

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});

// ---- Touch swipe support ----
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].screenX;
});
lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].screenX - touchStartX;
  if (Math.abs(dx) > 50) {
    dx > 0 ? showPrev() : showNext();
  }
});