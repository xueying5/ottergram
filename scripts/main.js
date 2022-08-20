var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
// 修改图片地址和图片标题
function setDetails(imageUrl, titleText) {
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src', imageUrl);

    var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
    detailTitle.textContent = titleText;
}
// 获取图片地址
function imageFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}
// 获取图片标题
function titleFromThumb(thumbnail) {
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}
// 更具缩略图修改详情图
function setDetailsFromThumb(thumbnail) {
    'use strict';
    setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}
// 鼠标点击图片处理
function addThumbClickHandler(thumb) {
    'use strict';
    thumb.addEventListener('click', function (e) {
        e.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails();
    });
}
// 获取缩略图数组
function getThumbnailsArray() {
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = Array.prototype.slice.call(thumbnails);
    return thumbnailArray;
}
// 隐藏大图
function hiddenDetails() {
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}
// 显示大图
function showDetails() {
    'use strict';
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}

function addKeyPressHandler() {
    'use strict';
    document.body.addEventListener('keyup', function (e) {
        e.preventDefault();
        // console.log(e.code);
        if (e.code === 'Escape') {
            hiddenDetails();
        }
    })
}
// 为数组中所有缩略图添加点击事件处理函数
function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
    addKeyPressHandler();
}
initializeEvents();