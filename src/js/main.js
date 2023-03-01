import MainSlider from "./modules/sliders/slider-main";
import VideoPlayer from "./modules/playVideo";


window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({ btns: '.next', page: '.page', animationDuration: '200' });
    slider.render();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.init();

})