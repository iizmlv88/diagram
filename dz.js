"use strict";

import {data} from './lang.js';
console.log("-> data", data);


const $container = document.querySelector('.container');
console.log($container);

function language(element, col){

    for (let i = 0; i < col.length; i++){
        element.innerHTML = `
       
            <ul class="lang_list">
                
                <li>
                    <div class="lango">${col[0].language}</div>
                    <div class="back">
                        <div class="proc javascript">${col[0].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[1].language}</div>
                    <div class="back">
                        <div class="proc java">${col[1].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[2].language}</div>
                    <div class="back">
                        <div class="proc python">${col[2].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[3].language}</div>
                    <div class="back">
                        <div class="proc c">${col[3].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[4].language}</div>
                    <div class="back">
                        <div class="proc typescript">${col[4].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[5].language}</div>
                    <div class="back">
                        <div class="proc php">${col[5].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[6].language}</div>
                    <div class="back">
                        <div class="proc kotlin">${col[6].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[7].language}</div>
                    <div class="back">
                        <div class="proc cplus">${col[7].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[8].language}</div>
                    <div class="back">
                        <div class="proc db">${col[8].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[9].language}</div>
                    <div class="back">
                        <div class="proc swift">${col[9].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[10].language}</div>
                    <div class="back">
                        <div class="proc go">${col[10].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[11].language}</div>
                    <div class="back">
                        <div class="proc ruby">${col[11].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[12].language}</div>
                    <div class="back">
                        <div class="proc dart">${col[12].popularity}</div>
                    </div>
                </li>

                <li>
                    <div class="lango">${col[13].language}</div>
                    <div class="back">
                        <div class="proc scala"></div>${col[13].popularity}
                    </div>
                    
                </li>

                <li>
                    <div class="lango">${col[14].language}</div>
                    <div class="back">
                        <div class="proc apex"></div>${col[14].popularity}
                    </div>
                </li>

                <li>
                    <div class="lango">${col[15].language}</div>
                    <div class="back">
                        <div class="proc s"></div>${col[15].popularity}
                    </div>
                </li>

                <li>
                    <div class="lango">${col[16].language}</div>
                    <div class="back">
                        <div class="proc ones"></div>${col[16].popularity}
                    </div>
                </li>

                <li>
                    <div class="lango">${col[17].language}</div>
                    <div class="back">
                        <div class="proc groovy"></div>${col[17].popularity}
                    </div>
                </li>

                <li>
                    <div class="lango">${col[18].language}</div>
                    <div class="back">
                        <div class="proc rust"></div>${col[18].popularity}
                    </div>
                </li>
            </ul>
    `
    } 

    }

language($container, data);