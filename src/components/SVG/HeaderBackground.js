import React from 'react';

function HeaderBackground() {
  
  return (
<svg className="header-background" viewBox="0 0 1440 179" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient x1="101.999998%" y1="100.999999%" x2="0%" y2="0%" id="linearGradient-1">
            <stop stop-color="#2C7460" offset="0%"></stop>
            <stop stop-color="#3A2854" offset="100%"></stop>
        </linearGradient>
        <polygon id="path-2" points="0 0 1440 0 1440 142.816406 720 178.460938 0 142.816406"></polygon>
        <filter x="-0.6%" y="-4.5%" width="101.1%" height="109.0%" filterUnits="objectBoundingBox" id="filter-3">
            <feGaussianBlur stdDeviation="7" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
            <feOffset dx="0" dy="-2" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
            <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowInnerInner1"></feComposite>
            <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.4 0" type="matrix" in="shadowInnerInner1"></feColorMatrix>
        </filter>
    </defs>
    <g id="Home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Header-Copy-7">
            <g id="Rectangle-5">
                <use fill="url(#linearGradient-1)" fill-rule="evenodd" xlinkHref="#path-2"></use>
                <use fill="black" fill-opacity="1" filter="url(#filter-3)" xlinkHref="#path-2"></use>
            </g>
        </g>
    </g>
</svg>
  )
};

export default HeaderBackground;