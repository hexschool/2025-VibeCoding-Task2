/* 視差滾動效果 */
window.addEventListener("scroll", function () {
  var bannerBg = document.querySelector(".banner-bg");
  if (bannerBg) {
    var scrolled = window.scrollY;
    bannerBg.style.transform = "translateY(" + scrolled * 0.3 + "px)";
  }
});
