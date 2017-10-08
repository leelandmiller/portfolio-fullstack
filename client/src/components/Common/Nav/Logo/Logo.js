import React from 'react';
import InlineSVG from 'react-svg-inline';

const Logo = (props) => {
    const mySvg = `<svg id="logo" data-name="lm_logo Image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488.96 488.96">
                    <defs>
                        <style>
                            .cls-1 {
                                fill: #fff;
                            }

                            .cls-2 {
                                fill: none;
                                stroke: #fff;
                                stroke-miterlimit: 10;
                                stroke-width: 12px;
                            }

                            #logo {
                                width: 50px;
                                height: 50px;
                            }

                            #logo .fill {
                                fill: #fafafa;
                            }

                            #logo * {
                                -moz-transition: all 0.5s;
                                -o-transition: all 0.5s;
                                -webkit-transition: all 0.5s;
                                transition: all 0.5s;
                            }
                            #logo:hover .logo-red {
                                fill: #f44336;
                            }
                            #logo:hover .logo-blue {
                                fill: #2196f3;
                            }
                            #logo:hover .cls-2 {
                                stroke: #f44336;
                            }
                            #logo:hover .fill {
                                -webkit-transform: scale(2400, 2400);
                                -o-transform: scale(2400, 2400);
                                -moz-transform: scale(2400, 2400);
                                transform: scale(2400, 2400);
                            }
                        </style>
                    </defs>
                    <title>my-logo</title>
                    <g id="fill" transform="translate(245,245)">
                        <circle class="fill" r="0.1"/>
                    </g>

                    <polygon class="cls-1 logo-red" points="168.92 156.79 244.48 217.67 401.51 91.19 401.51 373.61 363.65 341.01 363.65 176.88 244.48 268.02 168.92 210.9 168.92 156.79"/>
                    <polygon class="cls-1 logo-blue" points="87.57 91.19 91.42 399.28 391.2 399.28 355.57 366.07 134.27 366.07 134.27 129.22 87.57 91.19"/>
                    <circle class="cls-2" cx="244.48" cy="244.48" r="238.48"/>
                </svg>`

    return (
        <InlineSVG svg={mySvg} />
    )
}

export default Logo;
